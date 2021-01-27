const express = require("express");
const json = require("body-parser").json();

const PetsService = require("./pets.service");
const People = require("../people/people.service");

const petsRouter = express.Router();

petsRouter.delete("/", json, (req, res) => {
	const adoptedDog = PetsService.dequeue("dogs").name;
	const adoptedCat = PetsService.dequeue("cats").name;
	const adopter = People.dequeue();

	const message = `${adopter} just adopted ${adoptedDog} & ${adoptedCat}!`;

	const cat = PetsService.get().cat;
	const dog = PetsService.get().dog;

	res.json({
		cat,
		dog,
		message,
	});
});

module.exports = petsRouter;
