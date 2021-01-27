const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const peopleRouter = express.Router();

peopleRouter
	.get("/", (req, res) => {
		const people = People.get();
		res.json(people);
	})

	.post("/", json, (req, res) => {
		const person = People.enqueue(req.body.name);
		res.json({ person });
	});

module.exports = peopleRouter;
