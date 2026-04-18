# Front Boilerplate

React + TypeScript + Vite boilerplate with modern tooling.

## Stack

- **Runtime**: Bun
- **Build**: Vite + React + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **State**: Zustand (with persist middleware)
- **Server State**: TanStack Query v5
- **Forms**: React Hook Form + Zod
- **HTTP**: Axios
- **i18n**: react-i18next (auto-detects browser language)
- **Testing**: Vitest + RTL

## Getting Started

```bash
bun install
bun dev
```

## Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Production build |
| `bun lint` | Run ESLint |
| `bun lint:fix` | Fix lint issues |
| `bun format` | Format with Prettier |
| `bun test` | Run unit tests |
| `bun preview` | Preview production build |

## Routes

- `/` - Home page
- `/about` - About page

## Project Structure

```
src/
├── components/
│   └── layout/     # Layout, Navbar, Footer
├── hooks/         # Custom hooks
│   └── use-api/   # Pre-built API hooks
├── lib/
│   ├── api/      # Axios client
│   └── utils/    # Utilities (cn)
├── mocks/         # MSW handlers
├── pages/        # Route pages
├── stores/       # Zustand stores
└── i18n.ts      # Translations
```

## Environment Variables

Create a `.env` file (see `.env.example`):

```
VITE_API_URL=/api
VITE_APP_NAME=boilerplate
```