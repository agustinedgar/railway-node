const express = require ("express")
//const bodyParse = require("body-parse")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.status(200).send({ msg: "Hola mundo"});

});

app.post("/welcome", (req,res) => {
    const {username} = req.body;
    res.status(200).send({ msg: `hola, ${username}` });
});

app.listen (PORT, () => {
    console.log(`Tuserver está levantado en puesrto ${PORT}`)
});