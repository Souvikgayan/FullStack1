import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";




const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


const person = [{name: "Diprati Das", age: 20, address: {city: "Sodepur", country: "INDIA"}, contact: {email: "diprati@example.com", phone: "+1234567890"}},
{name: "Ani Sarkar", age: 21, address: {city: "Jadavpur", country: "INDIA"}, contact: {email: "ani@example.com", phone: "+1234567890"}},
{name: "Anupam Roy", age: 30, address: {city: "Siliguri", country: "INDIA"}, contact: {email: "anupam@example.com", phone: "+1234567890"}},
{name: "Anupam Roy", age: 30, address: {city: "Siliguri", country: "INDIA"}, contact: {email: "anupam@example.com", phone: "+1234567890"}}];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req,res)=>{
    res.render(__dirname + "/views/index.ejs",  { person: person });
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});