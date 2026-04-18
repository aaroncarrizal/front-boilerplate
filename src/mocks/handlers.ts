import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.get('/api/health', async () => {
    await delay(200);
    return HttpResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
  }),
];
