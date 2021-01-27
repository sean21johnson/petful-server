const express = require("express");
const cors = require("cors");

const catsRouter = require("../cats/cats.router");
const dogsRouter = require("../dogs/dogs.router");
const peopleRouter = require("../people/people.router");
const petsRouter = require("../pets/pets.router");

const app = express();

app.use(cors());

app.use("/cat", catsRouter);
app.use("/dog", dogsRouter);
app.use("/people", peopleRouter);
app.use("/pets", petsRouter);

module.exports = app;
