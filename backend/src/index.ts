	
import { Hono } from "hono";
import blog from "../routes/blog";
const app = new Hono();

app.use("/api/v1/blog/", blog);

export default app;