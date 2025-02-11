import { LinkedList } from "./linked-lists.js";

const list = new LinkedList();

list.append("First Node");

list.append("Second Node");

list.append("Third Node");

list.append("Fourth Node");

list.prepend("Node Zero");

console.log(list.size());

console.log(list.getHead());

console.log(list.getTail());

console.log(list.getNodeAt(3));

console.log(list.pop());

console.log(list);

console.log(list.size());

console.log(list.contains("Node Five"));
