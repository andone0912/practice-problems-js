//makes an array that has all whole numbers up to 10
/*const arr =[];
for(let i=1; i < 11; i++){
 arr.push(i)
}

console.log(arr)*/

// finds all odd numbers from 0 to 100
/*const arr = [];
for(let i = 0; i < 100; i++){
 if(i % 2 !== 0) {
 arr.push(i)
}
}

console.log(arr)*/


//the multiplication table for 7
/*let result;
for(let i=0; i<11; i++) {
result = 7* i
console.log(7 * ${i} = ${result})
}*/

//multiplication table up to 10
/*let result;
for(let x=0; x<11;x++) {
 for(let i=0; i<11;i++) {
  result = x * i;
  console.log(${x} * ${i} = ${result})
}*/
/*let result =0;
for(let i=0; i<11; i++){
  result += i;

}
console.log(result)*/

// multiplies all numbers up to 10
/*let result=1
for(let i=1; i<11; i++){
 result= result * i
}
console.log(result)*/

//the sum of all odd numbers from 10 to 30
/*let result=0;
let arr=[]
for(let i=0; i<31; i++){
 if(i > 10 && i % 2 !== 0){
   result += i
}

}
console.log(result)*/

// converts celsius to farenheit
/*const celsius = 20
let farenheitFormula = (celsius * 9/5) + 32;
console.log(farenheitFormula)*/

// Calculates the sum of all nums in an array
/*let result=0
arr=[3, 5, 11, 17, 4, 9]
for(let i=0; i < arr.length; i++){
 result += arr[i]
}
 console.log(result)*/

// Finds the average in an array of nums
/*let sum = 0
const arr = [5, 42, 20, -10, -20, 15]
for(let i=0; i < arr.length; i++){
 sum += arr[i]
}
sum = sum / arr.length
console.log(sum)*/

//filters out positive numbers from an array
/*arr=[-2, 3, 5, -8, 10, -40]
function sortNumbers() {
arr2=[]
for(let i=0; i < arr.length; i++){
 if(arr[i] < 0) {
   arr2.push(arr[i])
}}
return arr2;}
sortNumbers()
console.log(arr2)*/

//Finds the biggest nr from an array
/*let num=0
function findMax() {
arr =[2, 35, 12, 10, 100]
for(let i=0; i < arr.length; i++){
 if(arr[i] > num){
  num = arr[i]}}
return num;}
findMax()
console.log(num)*/

//Fibonacci sequence
/*arr=[0, 1]
for(let i = 0; i < 11; i++){
  if(i > 1) {
    arr[i]= arr[i-1] + arr[i-2]
  }
}
console.log(arr)*/

arr1 = []
for(let i = 1; arr1.length === 10; i++) {
  const n =  Math.round(Math.random() * 10)
  for(let e = 0; e < arr1.length; e++) {} 
}
console.log(arr1)