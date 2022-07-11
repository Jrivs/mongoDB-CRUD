import express from "express"
import router from "./routes/router";

const app = express();

app.set("port", 3000)

app.use(router)

export default app