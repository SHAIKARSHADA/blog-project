import { Hono } from "hono";

const user = new Hono() 

user.get("/signup",async (c) => {
  c.text("hello");
})

export default user;