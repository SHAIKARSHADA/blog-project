import { Hono } from 'hono'
import mainRouter from "../routes/index"
const app = new Hono();

app.use('/api/v1',mainRouter)


export default app
