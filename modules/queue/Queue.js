class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(data) {
		const node = new _Node(data);

		this.length++;

		if (this.first === null) {
			this.first = node;
		}
		if (this.last) {
			this.last.next = node;
		}
		this.last = node;
	}

	dequeue() {
		if (this.first === null) {
			return;
		}

		this.length--;

		const node = this.first;
		this.first = this.first.next;

		if (node === this.last) {
			this.last = null;
		}

		return node.value;
	}

	show() {
		if (this.first === null) {
			return null;
		}
		return this.first.value;
	}

	all() {
		let allNodes = [];
		let current = this.first;

		while (current != null) {
			allNodes.push(current.value);
			current = current.next;
		}
		return allNodes;
	}
}

class _Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

module.exports = Queue;
