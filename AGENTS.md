# AGENTS.md

## Package Manager

- Uses **bun** (bun.lockb = binary lockfile)
- Run with: `bun run <script>` or `bun <command>`

## Dev Commands

- `bun run dev` - Start Vite dev server
- `bun run build` - Production build
- `bun run lint` - ESLint check
- `bun run lint:fix` - Auto-fix ESLint issues
- `bun run format` - Format with Prettier
- `bun run test` - Vitest run once
- `bun run test:watch` - Vitest watch mode

## Path Alias

- `@/*` maps to `./src/*` (configured in vite.config.ts and tsconfig.app.json)

## Testing

- Vitest with jsdom environment
- Setup file at `src/test/setup.ts`
- Test files: `src/**/*.{test,spec}.{ts,tsx}`
- @testing-library/jest-dom included in setup

## Tailwind / CSS

- Tailwind v4 uses CSS-based config via `@theme` in `src/index.css`
- CSS variables for theming (dark mode support via next-themes)

## i18n

- react-i18next with i18next-browser-languagedetector
- Auto-detects browser language
- Persists choice to localStorage

## API

- Axios client at `src/lib/api/client.ts`
- Pre-built hooks at `src/hooks/use-api/index.ts`
- MSW for mocking at `src/mocks/`