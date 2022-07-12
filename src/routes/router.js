import { Router } from "express";
import Task from "../models/Task.js"

const router = Router();

router.get("/", async (req, res) => {
    //Agrego el lean a la consulta para convertirla en un objeto entendible para javascript
    const tasks = await Task.find().lean()
    res.render("index", { tasks: tasks })
})

router.post('/task/add', async (req, res) => {
    const task = Task(req.body)
    try {
        const taskSave = await task.save()
    } catch (error) {
        console.log(error)
    }
    res.redirect('/')
})


router.get("/about", (req, res) => {
    res.render("about")
})

router.get("/edit", (req, res) => {
    res.render("edit")
})

export default router