function isPlainObject(x) {
  // Start coding here
  if (typeof x === 'object' && !Array.isArray(x) && x !== null) {
    return true
  } else if (Array.isArray(x) || x === null) {
    return false
  } else {
    return "This is not an object"
  }
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);
let result4 = isPlainObject(7000);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
console.log(result4); // "This is not an object"