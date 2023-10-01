// Exercise #3 Checking Plain Object Function
// Start coding here
function isPlainObject(value) {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
    return true
  } else if (Array.isArray(value) || value === null) {
    return false
  } else {
    return "This is not an object"
  }
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);
let result4 = isPlainObject("Hello")
let result5 = isPlainObject(1234)

// ผลลัพธ์ที่ควรได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
console.log(result4); // "This is not an object"
console.log(result5); // "This is not an object"