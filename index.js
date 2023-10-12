import { Filter } from "./content-checker/dist/index.js";
const filter = new Filter();

const newBadWords = ["some", "bad", "word"];

filter.addWords(...newBadWords);

console.log(filter.clean("some bad word"));
