// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const numero=+prompt("Ingresa el número de veces que quieres hacer el Fizz-Buzz");
for (let i = 1; i < numero+1; i++) {
  if (i % 15 === 0){
    console.log("Fizz-Buzz")
  }
   else if (i % 7=== 0) {
    console.log("Woof");
  }
  else if (i % 5=== 0) {
    console.log("Buzz");
  }
  else if(i % 3 === 0){
    console.log("Fizz")
  }
  else
  console.log(i);
  };