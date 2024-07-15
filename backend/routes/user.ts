import { Hono } from "hono";

const app = new Hono();

app.post("/signup",async (c) => {
  c.text("hello")
});

export default app;