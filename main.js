import { LinkedList } from "./linked-lists.js";

const list = new LinkedList();

list.append("First Node");

list.append("Second Node");

list.append("Third Node");

list.append("Fourth Node");

list.prepend("Node Zero");

console.log(list.size());

console.log(list);
