import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/health", (c) => c.json({ ok: true }));

// Anything not matched by a static asset or an API route gets the 404 page.
app.notFound(async (c) => {
  const res = await c.env.ASSETS.fetch(new URL("/404.html", c.req.url));
  return new Response(res.body, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});

export default app;
