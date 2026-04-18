import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from 'sonner';

async function enableMocks() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

enableMocks().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
        <App />
        <Toaster position="bottom-right" />
      </ThemeProvider>
    </StrictMode>
  );
});