// Exercise #2: Loose Equality
// Start commenting here
0 == false; // Nine ตอบ fasle
// 0 (loose Equality) false : ตอบ false เพราะว่า fasle ในโจทย์ คือ Boolean มีค่าเป็น 0  ดังนั้นจะกลายเป็น 0 (loose Equality) 0 ซึ่งถูกต้องแล้ว
console.log(0 == false); //เฉลยตอบ True เพราะว่า มันคือการบอกว่า 0 มันเท่ากับ 0 

null == undefined; // Nine ตอบ true
// เพราะ Null คือแปลว่าไม่มีค่าอะไร แต่ undefinded คือมีค่า แต่ว่ายังไม่ได้เอามาใส่ ฟีลว่าหาไม่เจอ ระบุไม่ได้ 
console.log(null == undefined);
// เฉลยคือ true : Loose Equality ทำการเปรียบเทียบโดยไม่สนใจเรื่อง Type 


10 == "10"; // Nine ตอบ False
// เพราะ 10 is Number, but "10" is String 
console.log(10 == "10"); //เฉลยตอบ true
//เพราะว่า Loose Equality ไม่สนใจเรื่อง Type (เนื่องจากได้เอา Value สองตัวมาเปลี่ยนให้เป็น Type เดียวกันก่อนที่จะทำการเช็ค) **งง** 

[10] == 10; // Nine ตอบ true
// เพราะเป็น number ที่มีค่าเท่ากันทั้งคู่
console.log([10] == 10);

[1,2] == "1,2"; // Nine ตอบ  false
// เพราะ ใน arrey คือ number แต่ ใน " " คือ string
console.log([1,2] == "1,2"); // เฉลยตอบ true
//เพราะว่า Loose Equality ไม่สนใจเรื่อง Type (เนื่องจากได้เอา Value สองตัวมาเปลี่ยนให้เป็น Type เดียวกันก่อนที่จะทำการเช็ค)

console.log(Object.is([1,2],"1,2"))
console.log([1,2] === "1,2")