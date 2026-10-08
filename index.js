const  express = require("express")
const StudentController = require("./app/Controllers/StudentController")
const TeacherController = require("./app/controllers/TeacherController")
const PORT = 5789
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to my college")
})

app.post("/student",StudentController.create),
app.get("/student",StudentController.readAll),
app.get("/student/:id",StudentController.readOne),
app.put("/student/:id",StudentController.update),
app.delete("/student/:id",StudentController.destroy),


app.post("/Teacher",TeacherController.create),
app.get("/Teacher",TeacherController.readAll),
app.get("/Teacher/:id",TeacherController.readOne),
app.put("/Teacher/:id",TeacherController.update),
app.delete("/Teacher/:id",TeacherController.destroy),


app.listen(PORT, () => {
    console.log(`Server Start at http://localhost:${PORT}`);
})