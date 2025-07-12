import { merge } from "./merge";

const collection_1 = [9, 6, 3];     // DESC
const collection_2 = [2, 5, 8];     // ASC
const collection_3 = [1, 4, 7];     // ASC

console.log('Collection 1:',collection_1)
console.log('Collection 2:',collection_2)
console.log('Collection 3:',collection_3)

const result = merge(collection_1, [], collection_3);
console.log('Merged result:', result);