import { Hono } from "hono";

const app = new Hono();

app.post("/:id",async (c) => {
  c.text("hello")
});

export default app;