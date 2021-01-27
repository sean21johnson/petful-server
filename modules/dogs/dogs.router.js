const express = require("express");
const json = require("body-parser").json();

const PetsService = require("../pets/pets.service");
const People = require("../people/people.service");

const dogsRouter = express.Router();

dogsRouter
	//return all cats currently up for adoptions
	.get("/", (req, res) => {
		return res.status(200).json(PetsService.get().dog);
	});

dogsRouter.delete("/", json, (req, res) => {
	const adopted = PetsService.dequeue(`${req.body.type}s`).name;
	const adopter = People.dequeue();

	const message = `${adopter} just adopted ${adopted}`;
	const dog = PetsService.get().dog;
	const cat = PetsService.get().cat;

	res.json({
		dog,
		cat,
		message,
	});
});

module.exports = dogsRouter;
