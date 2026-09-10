#!/usr/bin/env python3
"""Audit the generated static site for crawl, metadata, and internal-link integrity."""
from __future__ import annotations

import glob
import html
import os
import re
import sys
from urllib.parse import urlparse

ROOT = "dist"
SITE = "https://talonexpeditions.com"
DONOR_TERMS = ("Avero", "Elementor", "Nomaden")


def target_for(path: str) -> str:
    if path == "/":
        return os.path.join(ROOT, "index.html")
    if path.endswith("/"):
        return os.path.join(ROOT, path.lstrip("/"), "index.html")
    return os.path.join(ROOT, path.lstrip("/"))


def capture(pattern: str, raw: str):
    return re.search(pattern, raw, re.I | re.S)


def main() -> int:
    files = glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True)
    missing_links = []
    meta_issues = []
    titles: dict[str, list[str]] = {}
    descriptions: dict[str, list[str]] = {}
    internal_link_count = 0

    for path in files:
        raw = open(path, encoding="utf-8").read()
        rel = os.path.relpath(path, ROOT)

        if rel != "404.html":
            title = capture(r"<title>(.*?)</title>", raw)
            description = capture(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', raw)
            canonical = capture(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', raw)
            if not title or not description or not canonical:
                meta_issues.append((rel, bool(title), bool(description), bool(canonical)))
            if title:
                value = html.unescape(re.sub(r"\s+", " ", title.group(1)).strip())
                titles.setdefault(value, []).append(rel)
            if description:
                value = html.unescape(re.sub(r"\s+", " ", description.group(1)).strip())
                descriptions.setdefault(value, []).append(rel)

        for href in re.findall(r'href=["\']([^"\']+)["\']', raw, re.I):
            if not href.startswith("/"):
                continue
            internal_link_count += 1
            url_path = urlparse(href).path
            target = target_for(url_path)
            if not os.path.exists(target):
                missing_links.append((rel, href, target))

    duplicate_titles = {key: value for key, value in titles.items() if len(value) > 1}
    duplicate_descriptions = {key: value for key, value in descriptions.items() if len(value) > 1}

    sitemap_path = os.path.join(ROOT, "sitemap.xml")
    robots_path = os.path.join(ROOT, "robots.txt")
    sitemap = open(sitemap_path, encoding="utf-8").read()
    robots = open(robots_path, encoding="utf-8").read()
    locs = re.findall(r"<loc>(.*?)</loc>", sitemap)

    public_html = [path for path in files if os.path.relpath(path, ROOT) != "404.html"]
    canonical_urls = []
    for path in public_html:
        raw = open(path, encoding="utf-8").read()
        canonical = capture(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', raw)
        if canonical:
            canonical_urls.append(canonical.group(1))

    missing_from_sitemap = sorted(set(canonical_urls) - set(locs))
    extra_in_sitemap = sorted(set(locs) - set(canonical_urls))

    donor_brand_hits = []
    for path in files:
        raw = open(path, encoding="utf-8").read()
        # Ignore URLs because licensed donor image URLs are intentionally temporary.
        raw = re.sub(r'https?://[^\s"\'<>]+', " ", raw)
        visible_text = re.sub(r"<[^>]+>", " ", raw)
        visible_text = html.unescape(re.sub(r"\s+", " ", visible_text))
        for term in DONOR_TERMS:
            if re.search(term, visible_text, re.I):
                donor_brand_hits.append((os.path.relpath(path, ROOT), term))

    robots_ok = f"Sitemap: {SITE}/sitemap.xml" in robots

    print("HTML_FILES", len(files))
    print("INTERNAL_LINKS", internal_link_count)
    print("MISSING_INTERNAL", len(missing_links))
    print("META_ISSUES", len(meta_issues))
    print("DUP_TITLE_GROUPS", len(duplicate_titles))
    print("DUP_DESC_GROUPS", len(duplicate_descriptions))
    print("SITEMAP_LOCS", len(locs), "UNIQUE", len(set(locs)))
    print("PUBLIC_HTML", len(public_html), "CANONICALS", len(canonical_urls))
    print("MISSING_FROM_SITEMAP", len(missing_from_sitemap))
    print("EXTRA_IN_SITEMAP", len(extra_in_sitemap))
    print("ROBOTS_SITEMAP_OK", robots_ok)
    print("DONOR_BRAND_TEXT_HITS", donor_brand_hits)

    if missing_links:
        print("MISSING_SAMPLE", missing_links[:30])
    if meta_issues:
        print("META_SAMPLE", meta_issues[:30])
    if duplicate_titles:
        print("DUP_TITLES", duplicate_titles)
    if duplicate_descriptions:
        print("DUP_DESCS", duplicate_descriptions)
    if missing_from_sitemap:
        print("MISSING_SITEMAP", missing_from_sitemap[:30])
    if extra_in_sitemap:
        print("EXTRA_SITEMAP", extra_in_sitemap[:30])

    failed = any((
        missing_links,
        meta_issues,
        duplicate_titles,
        duplicate_descriptions,
        missing_from_sitemap,
        extra_in_sitemap,
        donor_brand_hits,
    )) or not robots_ok
    return 2 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
