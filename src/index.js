import express from "express"

const app = express();

app.set("port", 3000)


app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`)
})