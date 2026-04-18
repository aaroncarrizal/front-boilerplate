# Front Boilerplate

A modern React + TypeScript + Vite boilerplate with pre-configured tooling for rapid development.

![Bun](https://img.shields.io/badge/Bun-ffffff?logo=bun&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232g?logo=react&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C9?logo=typescript&style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&style=for-the-badge)

## Features

- **Fast dev server** with Vite HMR
- **TypeScript** for type safety
- **TanStack Query** for server state management
- **Zustand** for client state with persist middleware
- **MSW** for API mocking in development
- **i18n** with auto language detection
- **Dark mode** support via CSS variables
- **Vitest** for unit testing
- **ESLint + Prettier** for code quality
- **Caveman skill** for terse AI communication

## Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Open http://localhost:5173
```

## Available Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server at http://localhost:5173 |
| `bun build` | Production build to `dist/` |
| `bun lint` | Run ESLint to check code |
| `bun lint:fix` | Auto-fix ESLint issues |
| `bun format` | Format code with Prettier |
| `bun test` | Run unit tests (Vitest) |
| `bun test:watch` | Run tests in watch mode |
| `bun preview` | Preview production build |

---

## Project Structure

```
front-boilerplate/
├── public/                  # Static assets
│   └── mockServiceWorker.js # MSW service worker
├── src/
│   ├── components/
│   │   └── layout/         # Layout, Navbar, Footer
│   ├── hooks/             # Custom hooks
│   │   └── use-api/       # Pre-built API hooks
│   ├── lib/
│   │   ├── api/           # Axios client
│   │   └── utils/         # Utilities (cn helper)
│   ├── mocks/              # MSW handlers
│   ├── pages/             # Route pages
│   ├── stores/             # Zustand stores
│   ├── test/               # Test setup
│   ├── App.tsx            # Main app with routing
│   ├── main.tsx           # Entry point
│   ├── i18n.ts            # i18n configuration
│   └── index.css          # Tailwind + theme variables
├── .env                   # Environment variables
├── .env.example           # Example env file
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── eslint.config.js      # ESLint configuration
```

---

## Adding New Routes

Routes are defined in `src/App.tsx` using React Router v7:

```typescript
// src/App.tsx
import { createBrowserRouter } from 'react-router-dom';
import MyPage from './pages/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/my-page', element: <MyPage /> },  // Add new route here
    ],
  },
]);
```

---

## Adding New Pages

Create a new page file in `src/pages/`:

```typescript
// src/pages/MyPage.tsx
import { useTranslation } from 'react-i18next';

export default function MyPage() {
  const { t } = useTranslation();

  return (
    <div className="container py-10">
      <h1>{t('myPage.title')}</h1>
      <p>{t('myPage.description')}</p>
    </div>
  );
}
```

---

## Using TanStack Query

The boilerplate includes pre-built API hooks in `src/hooks/use-api/`:

```typescript
import { useGet, usePost, apiClient } from '@/hooks/use-api';

// GET request
const { data, isLoading, error } = useGet(
  ['users'],
  () => apiClient.get('/users').then(res => res.data)
);

// POST request
const mutation = usePost(
  ['users'],
  (newUser) => apiClient.post('/users', newUser).then(res => res.data)
);

// Usage
mutation.mutate({ name: 'John' });
```

---

## Using Zustand Stores

Create a store in `src/stores/`:

```typescript
// src/stores/my-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MyState {
  count: number;
  increment: () => void;
}

export const useMyStore = create<MyState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: 'my-store' }  // key in localStorage
  )
);
```

**Usage:**

```typescript
import { useMyStore } from '@/stores/my-store';

function MyComponent() {
  const { count, increment } = useMyStore();
  return <button onClick={increment}>{count}</button>;
}
```

---

## API Mocking with MSW

Add mock handlers in `src/mocks/handlers.ts`:

```typescript
import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.get('/api/users', async () => {
    await delay(200);
    return HttpResponse.json([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  }),
];
```

MSW auto-starts in development mode (see `src/main.tsx`).

---

## Internationalization

Translations are in `src/i18n.ts`. Add more languages:

```typescript
const resources = {
  en: { translation: { home: { title: 'Home Page' } } },
  es: { translation: { home: { title: 'Página de Inicio' } } },
  fr: { translation: { home: { title: 'Page d\'accueil' } } },  // Add more
};
```

**Use in components:**

```typescript
const { t } = useTranslation();
<h1>{t('home.title')}</h1>
```

Language auto-detects from browser, persists to localStorage.

---

## Dark Mode

The theme is controlled via CSS variables in `src/index.css`. Use them:

```typescript
// Classes available: bg-background, text-foreground,
// bg-card, text-card-foreground, border-border, etc.

<div className="bg-background text-foreground">
  Content adapts to dark/light mode automatically.
</div>
```

**Toggle programmatically:**

```typescript
import { useTheme } from 'next-themes';

const { theme, setTheme } = useTheme();
setTheme('dark');  // 'light', 'dark', or 'system'
```

---

## Testing

```bash
# Run tests once
bun test

# Run tests in watch mode
bun test:watch
```

**Example test:**

```typescript
// src/pages/__test__/HomePage.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders title', () => {
    render(<HomePage />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
```

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Available variables:

| Variable | Description | Default |
|---------|-------------|----------|
| `VITE_API_URL` | API base URL | `/api` |
| `VITE_APP_NAME` | App name | `boilerplate` |

Access in code:

```typescript
import.meta.env.VITE_API_URL
```

---

## License

MIT