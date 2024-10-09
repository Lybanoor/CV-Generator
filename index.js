import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.post("/get", (req, res) => {

    res.render("form.ejs");
});

app.post("/submit", (req, res) => {
  const {name,email} = req.body;
  console.log(name,email);
  res.render("final_cv.ejs", {name:name,email:email});
  
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});