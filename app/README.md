# PALM Lab Website

Official public website of the PALM (PAttern Learning and Mining) Lab at Southeast University.

Source for [palmlab.cn](https://palmlab.cn). Lives in the `app/` directory of the [palm](https://github.com/JacksonHe04/palm) monorepo.

## Tech Stack

- **Framework**: Next.js 16.2
- **UI**: React 19, Lucide React
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## Quick Start

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
pnpm lint
```

## Project Structure

```
app/
├── app/
│   ├── components/     # React components
│   ├── constants/      # Shared URLs and config
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/             # Static assets
└── ...
```

## Conventions

- Manage external links in `app/constants/urls.ts`
- Legacy AMS code (`web/`, `server/`) is archived and not deployed
