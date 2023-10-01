// Exercise #3 Checking Plain Object Function
// Start coding here



function isPlainObject(data) {
  if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
    return true;
  } else if (Array.isArray(data) || data === null) {
    return false;
  } else {
    return "This is not an object";
  }
}
// If data is of type 'object', not an array, and not null, the function will return true.
//If data is an array or null, the function will return false.
//If data is neither an object, nor an array, nor null, the function will return the string "This is not an object".

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);
let result4 = isPlainObject("hi");


// ผลลัพธ์ที่ควรได้จาก Example case
console.log(result1); //true
console.log(result2); // false***
console.log(result3); // false
console.log(result4);
