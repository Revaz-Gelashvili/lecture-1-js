var myVar = "Hello";
var myVar = "World";
console.log(myVar);

{
  const myConst = 42;
  // myConst = 50; // შეცდომა
  // const myConst = 60; // შეცდომა
  console.log(myConst);
}

{
  let myText = "Initial";
  myText = "Changed";
  console.log(myText);
}

let a = 5;
let b = 7;
console.log(a + b); // 12

let x = 10;
let y = 3;
console.log(x * y); // 30
console.log(x - y); // 7

let n1 = 10,
  n2 = 20,
  n3 = 30,
  n4 = 40;
let avg = (n1 + n2 + n3 + n4) / 4;
console.log(avg); // 25

let name = "გიორგი";
let surname = "ჯორბენაძე";
let age = 20;
console.log(`${name} ${surname} არის ${age} წლის`);

let num1 = 10;
let num2 = 3;
console.log(num1 % num2); // 1

let m = 7,
  l = 5,
  c = 4;
console.log((m + l) % c); // (12 % 4) = 0

let originalWidth = 1920;
let originalHeight = 1080;
let newWidth = 1024;

let newHeight = (newWidth * originalHeight) / originalWidth;
console.log(newHeight); // 576
