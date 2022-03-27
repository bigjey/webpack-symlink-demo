import toArray from "to-array";
import isNumber from "is-number";

import { square } from "./flow-is-sad";

export function test(limit) {
  console.log("isNumber", isNumber(limit));
  console.log("square", square(limit));
  return toArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], limit);
}
