# Talon Expeditions

Astro website for Talon Expeditions. The purchased Avero Elementor kit is used as a visual and information-architecture donor, but the production implementation is clean static Astro with no Elementor runtime dependency.

## Current site architecture

The build includes the complete commercial, informational, trust, and editorial structure needed for a mature group-travel operator:

- Home
- Experiences
- Private Group Travel
- Custom Group Trip Planning
- Learn-To Trips and four specialist subpages
- Trekking & Active Travel and two specialist subpages
- Cultural & Cruise Travel and two specialist subpages
- Group Travel hub and six organizer/audience pages
- Join a Trip / selected departures
- Travel Planning Services
- How It Works
- Support & What’s Included
- Why Talon
- About
- Trip Leaders & Local Partners
- Where We Serve
- Trip Planning Examples
- Gallery
- FAQ plus three specialist FAQ libraries
- Resources with six topic hubs
- 18 long-form answer-first guides
- Plan a Trip
- Contact
- Careers / specialist network
- Privacy, Cookies, Terms
- custom 404
- robots.txt and dynamic XML sitemap

## Avero donor coverage

The site uses the full kit rather than only the homepage. Avero homepage, destination, destination detail, tour packages, services, guides, gallery, testimonials, why-choose-us, appointment, FAQ, blog, single-post, career, contact, header, footer, 404, booking forms, contact form, and newsletter patterns have all been translated into Talon Expeditions components or pages.

## Search architecture

The build follows the Talon Expeditions SEO/GEO strategy with:

- explicit entity definition and consistent business details
- descriptive service and audience pages
- hub-and-spoke internal linking
- answer-first blocks on commercial and editorial pages
- FAQ content and structured data where appropriate
- Service, Article, Breadcrumb, Organization, and WebSite schema
- canonical URLs and social metadata
- crawlable rendered HTML
- XML sitemap and robots governance
- long-tail organizer, preparation, learn-to, trekking, and cultural-travel content

## Development

```bash
npm install
npm run dev
```

Validation and static build:

```bash
npm run check
npm run build
```

## Media and forms

The current build uses licensed Avero donor imagery from the purchased kit through a centralized registry in `src/data/assets.ts`. The selected images should be localized into `public/` before production deployment. Talon logo assets are already isolated in `public/assets/` so they can be replaced without changing page layouts.

The current static inquiry forms prepare structured email messages to `sales@talonexpeditions.com`. A server-side form endpoint can replace that transport later without redesigning the forms.
