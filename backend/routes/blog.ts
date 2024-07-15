import { Hono } from "hono";

const blog = new Hono();

blog.post("/:id",async (c) => {
  c.text("hello")
});

export default blog;