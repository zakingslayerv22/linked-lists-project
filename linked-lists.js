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

  size() {
    let currentNode = this.head;
    let nodeCount = 1;

    if (!currentNode) {
      nodeCount = 0;
      return nodeCount;
    }

    while (currentNode.nextNode) {
      nodeCount += 1;
      currentNode = currentNode.nextNode;
    }
    return nodeCount;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  getNodeAt(index) {
    const nodeSize = this.size();
    if (index < 1) return 0;
    if (index > nodeSize)
      return `Total nodes are ${nodeSize}. Cannot search for index greater than ${nodeSize}.`;

    let currentNode = this.head;
    let currentIndex = 1;

    while (currentIndex !== index) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    return currentNode;
  }

  pop() {
    const nodeSize = this.size();

    if (nodeSize === 0) return;

    const lastNode = this.getNodeAt(nodeSize);

    if (nodeSize === 1) {
      this.head = null;
      return lastNode;
    }

    const secondToLastNode = this.getNodeAt(nodeSize - 1);
    secondToLastNode.nextNode = null;
    return lastNode;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode.nextNode) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.nextNode;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let listSize = this.size();

    let string = "";
    while (listSize >= 1) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
      listSize -= 1;
    }
    string += "null";

    return string;
  }

  insertAt(value, index) {
    const newNode = new Node();
    newNode.value = value;

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    const listSize = this.size();

    if (index === 1) {
      let currentNode = this.head;
      this.head = newNode;
      newNode.nextNode = currentNode;
      return newNode;
    }

    let currentNode = this.getNodeAt(index);
    let previousNode = this.getNodeAt(index - 1);

    if (index > listSize) {
      const lastNode = this.getNodeAt(listSize);
      lastNode.nextNode = newNode;
    } else {
      previousNode.nextNode = newNode;
      newNode.nextNode = currentNode;
    }

    return newNode;
  }
}

export class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
