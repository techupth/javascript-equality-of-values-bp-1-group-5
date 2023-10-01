// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // false
console.log(Object.is(10,20))

Object.is(0, -0); // true
console.log(Object.is(0,-0))
// Same Value Equality จะให้ผลลัพธ์เป็น false เพราะ 0 และ -0 ถือว่าเป็นคนละ Value ใน JavaScript
console.log(0 === -0)
// แต่ Strict Equality จะให้ผลลัพธ์เป็น true เพราะในความเป็นจริงแล้ว 0 และ -0 มีคุณสมบัติทางคณิตศาสตร์เหมือนกัน


Object.is(NaN, 100); // false
console.log(Object.is(NaN, 100))
console.log(NaN === 100)
console.log (NaN == 100)


Object.is("one", "two"); // true
console.log(typeof "one")
console.log(typeof "two")
console.log(Object.is("one", "two")) // ตอบ false เพราะว่าคนละคำกัน? ถือว่าไม่เหมือนกัน ?

// ข้างล่างคือลองเปลี่ยน parameter จาก "two" > "one" : คำตอบที่ได้จะเป็น true
Object.is("one","one");
console.log(Object.is("one","one"))
console.log("one" === "one")
console.log("one" == "one")



Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // true
console.log(typeof { name: "John", age: 30 } )
console.log(Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }))
console.log({ name: "John", age: 30 } === { name: "John", age: 30 })
// เพราะว่ามันคนละตำแหน่งกัน เหมือนกับว่า parameter(1) ชี้ไปตำแหน่งนึง ซึ่งคนละที่กับตำแหน่งของ parameter(2) มันเลยได้ออกมาเป็น false

Object.is(null, undefined); // true
console.log(Object.is(null, undefined))
// ฟังก์ชั่น Object.is(a,b) จะบอกว่า a และ b มี Value เดียวกันหรือไม่ ซึ่งในที่นี้ null ไม่เหมือนกันกับ undefined

10 === 20; // false
console.log(10 === 20)
// ตอบ false เพราะ === ใช้เปรียบเทียบความเหมือนกันหรือเป็นอย่างเดียวกัน แต่เพราะว่า 10 คือ Number ส่วน "10" คือ String นั่นก็คือ Type of ไม่เหมือนกันแล้ว 

10 === "10" // true
console.log(Object.is(10,"10"))
// ฟังก์ชั่น Object.is(a,b) จะบอกว่า a และ b มี Value เดียวกันหรือไม่ 
console.log(10 === "10")
// ตอบ false เพราะ === ใช้เปรียบเทียบความเหมือนกันหรือเป็นอย่างเดียวกัน แต่เพราะว่า 10 คือ Number ส่วน "10" คือ String นั่นก็คือ Type of ไม่เหมือนกันแล้ว 

3.14 !== 3.14; // true
console.log(3.14 !== 3.14)

"TechUp" !== "TechUp"; // true
console.log("TechUp" !== "TechUp")

NaN === NaN; // false
console.log(NaN === NaN)

0 !== -0; // true
console.log(0 !== -0)
// 0 (not)(loose equality) -0 
console.log(0 === -0) // จะได้ค่าเป็น true เพราะ strict equality (===) เพราะในความเป็นจริงแล้ว 0 และ -0 มีคุณสมบัติทางคณิตศาสตร์เหมือนกัน
console.log(Object.is(0.-0))

// 62-65 เป็นการทดลองจาก exercise 
Object.is(undefined, undefined); // เข้าใจว่า undefined คืิอเรายังไม่ได้กำหนดค่าให้มัน
console.log(typeof undefined)
console.log(Object.is(undefined,undefined))
console.log(undefined === undefined)
// เป็น true เพราะ ===  ใช้ในการเปรียบเทียบความเหมือนกัน/เป็นอย่างเดียวกัน 
console.log(undefined == undefined)


let objectA = { course: "Web Developer", price: 300000 }; // 
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // true
console.log(objectA === objectB)
// เพราะว่ามันคนละตำแหน่งกัน เหมือนกับว่า objectA ชี้ไปตำแหน่งนึง ซึ่งคนละที่กับตำแหน่งของ objectB มันเลยได้ออกมาเป็น false