import express from "express"
import { engine } from "express-handlebars"
import morgan from "morgan";
import { join } from "path"
import router from "./routes/router";

const app = express();



//Settings
app.set("views", join(__dirname, 'views'))
app.engine('.hbs', engine({
    layoutsDir: join(app.get("views"), 'layouts'),
    partialsDir: join(app.get("views"), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set("port", 3000)


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//Router
app.use(router)

export default app