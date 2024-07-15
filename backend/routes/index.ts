import { Hono } from "hono";
import blogRouter from "./blog"
import userRouter from "./user"

const app = new Hono();

app.use('/user/',userRouter);
app.use('/blog/',blogRouter);

export default app;