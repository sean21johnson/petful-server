const Queue = require("../queue/Queue");
const store = require("../../store");

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

const PeopleService = {
	get() {
		return people.all();
	},

	enqueue(person) {
		return people.enqueue(person);
	},

	dequeue() {
		return people.dequeue();
	},
};

module.exports = PeopleService;
