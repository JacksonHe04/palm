# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PALM Lab official public website, built with Next.js 16 + React 19 + Tailwind CSS 4.

This `app/` directory is the **production** entry point for [palmlab.cn](https://palmlab.cn). Legacy AMS code (`front-vite/`, `back-django/`) in the parent repo is archived and not deployed.

## Commands

Run from this `app/` directory:

```bash
pnpm dev      # Dev server
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # ESLint
```

## Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **UI**: React 19, lucide-react
- **Styling**: Tailwind CSS 4
- **Fonts**: JetBrains Mono, Noto Serif SC
- **Package manager**: pnpm

## Architecture

### Page structure
- [app/layout.tsx](app/layout.tsx) — Root layout, fonts, metadata
- [app/page.tsx](app/page.tsx) — Entry page, renders HomePage
- [app/components/HomePage.tsx](app/components/HomePage.tsx) — Home page composition

### Component tree
```
HomePage
├── Header
├── HeroSection
├── HomeCards
│   ├── stats-card (Join Us)
│   ├── horizontal-card (lab title)
│   └── small-cards (4 nav cards)
└── Footer
```

### Conventions
- All external links go through [urls.ts](app/constants/urls.ts)
- GitHub repo URL points to `JacksonHe04/palm`, not the deprecated `palm-lab`

### Static assets
- [public/home-bg-m.png](public/home-bg-m.png) — Background
- [public/palm_logo_cicle.png](public/palm_logo_cicle.png) — Lab logo

### Styling
- CSS variables for theme colors
- Glass effect via `backdrop-filter: blur()`
- Dark mode via `prefers-color-scheme`

## Related

- Legacy lab site: http://8.149.133.61/
- Feishu wiki: https://seu-palm.feishu.cn/wiki/PgEFwrnPvi9pZwkfCmQcYnKWnbe
