# iSunGlobal website

The bilingual iSunGlobal public preview for Chinese entrepreneurs exploring overseas markets.

**Live:** [isunglobal.com](https://isunglobal.com/) · [English](https://isunglobal.com/?lang=en)

## Features

- Responsive Chinese/English editorial homepage.
- Three topic guides and local search.
- Cooperation-brief preparation, copy and text download.
- An explicit onward link to the existing iSunTV contact page.
- About/privacy information and disclosure of AI-generated illustrative scenes.

Briefs remain in the visitor's browser until the visitor chooses to share them. This site has no submission backend, analytics or advertising cookies. Topic guides are discussion prompts, not client case studies or professional advice.

## Develop and build

Requires Node.js 22 or later; the preserved release was built with Node.js 26.7.

```sh
npm ci
npm run dev
npm run build
npm run test:sites
```

The Vite/React build emits the static website in `dist/client/`. The lockfile pins dependency versions. The existing optional Sites packaging is also retained in `dist/server/` and `dist/.openai/`.

## Cloudflare deployment

Production uses `cloudflare-worker.mjs` and `wrangler.jsonc`. Deploy only from an authorized Cloudflare account with access to `isunglobal.com`:

```sh
npx wrangler whoami
npx wrangler deploy
```

If more than one account is available, set `CLOUDFLARE_ACCOUNT_ID` in your local environment. Do not commit credentials, `.env`, `.dev.vars` or Wrangler state.

The Worker serves static assets only, redirects HTTP and `www` to the HTTPS apex, preserves path/query parameters, and sets security headers. It uses the exact routes `isunglobal.com/*` and `www.isunglobal.com/*`; other subdomains are excluded. Existing proxied DNS records are required. Domain email remains separately managed.

Pushing to this repository **does not automatically deploy**. Production deployment is a separate explicit command.

## Project layout

- `src/`: React interface and responsive CSS.
- `public/`: site images, brand favicon, robots and sitemap files.
- `cloudflare-worker.mjs`: production Worker.
- `wrangler.jsonc`: production routing and asset configuration; account ID is supplied locally.
- `scripts/`, `worker/`, `tests/`, `.openai/`: retained optional Sites build packaging.

## Provenance

Published to GitHub from the checksum-verified 28 September 2026 release. Application source, public assets, Worker code and dependency lockfile were checked against that release. The repository-specific changes are this README, `.gitignore`, and omission of the account identifier from Wrangler configuration. Internal receipts, local machine paths, deployment logs, credentials and private archives are excluded.

The private canonical release and rollback archive remain preserved separately. This repository does not contain the iSunOne historical archive.
