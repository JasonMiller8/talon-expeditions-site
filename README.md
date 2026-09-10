# Talon Expeditions

Astro reconstruction of the Talon Expeditions public website, using the purchased Avero Elementor kit as the primary visual donor while rebuilding the implementation as clean static Astro components.

## Current implementation

- Astro static output
- Avero-derived visual language without Elementor runtime dependencies
- Group-first Talon Expeditions messaging
- Homepage plus first-wave commercial pages
- Responsive navigation and mobile layouts
- Centralized temporary donor-image registry in `src/data/assets.ts`

## Development

```bash
npm install
npm run dev
```

Build and type-check:

```bash
npm run check
npm run build
```

## Asset note

The current first pass references licensed Avero demo imagery through a centralized donor registry. These assets are temporary implementation references and should be localized into this repository before production deployment. Final Talon Expeditions logos and icon assets are also pending replacement.
