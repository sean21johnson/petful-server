const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
	cats: new Queue(),
	dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

const PetsService = {
	get() {
		return { dog: pets.dogs.show(), cat: pets.cats.show() };
	},

	dequeue(type) {
		return pets[type].dequeue();
	},
};

module.exports = PetsService;
