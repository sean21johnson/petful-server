class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

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

    const node = this.first;
    this.first = this.first.next

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  show() {
    if (this.first === null) {
      return "No items remaining in the Queue"
    }
    if (this.first) {
      return this.first;
    }
  }

  all() {
    let current = this.first;
    let allNodes = [];

    while (current != null) {
      allNodes.push(current);
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

module.exports = Queue
