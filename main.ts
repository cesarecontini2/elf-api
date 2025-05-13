import { Hono, Context } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

// Serve static files from the dist directory
app.use("/assets/*", serveStatic({ root: "./dist" }));
app.use("/*.js", serveStatic({ root: "./dist" }));
app.use("/*.css", serveStatic({ root: "./dist" }));
app.use("/favicon.ico", serveStatic({ root: "./dist" }));

app.get("/*", serveStatic({ path: "./dist/index.html" }));

app.get("/api/health", (c: Context) => {
  return c.json({ status: "ok!!" });
});

Deno.serve(app.fetch);
