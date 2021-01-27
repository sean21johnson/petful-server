const express = require("express");
const json = require("body-parser").json();

const PetsService = require("../pets/pets.service");
const People = require("../people/people.service");

const catsRouter = express.Router();

catsRouter
	//return all cats currently up for adoptions
	.get("/", (req, res) => {
		const cat = PetsService.get().cat;
		res.json(cat);
	});

catsRouter.delete("/", json, (req, res) => {
	const adopted = PetsService.dequeue(`${req.body.type}s`).name;
	const adopter = People.dequeue();

	const message = `${adopter} just adopted ${adopted}`;
	const cat = PetsService.get().cat;
	const dog = PetsService.get().dog;

	res.json({
		cat,
		dog,
		message,
	});
});

module.exports = catsRouter;
