export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
}

export class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
