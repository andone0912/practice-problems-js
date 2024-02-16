/*const arr =[];
for(let i=1; i < 11; i++){
 arr.push(i)
}

console.log(arr)*/

/*const arr = [];
for(let i = 0; i < 100; i++){
 if(i % 2 !== 0) {
 arr.push(i)
}
}

console.log(arr)*/

/*let result;
for(let i=0; i<11; i++) {
result = 7* i
console.log(7 * ${i} = ${result})
}*/

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


/*let result=1
for(let i=1; i<15; i++){
 result= result * i
}
console.log(result)*/

/*let result=0;
let arr=[]
for(let i=0; i<31; i++){
 if(i > 10 && i % 2 !== 0){
   result += i
}

}
console.log(result)*/

/*const celsius = 20
let farenheitFormula = (celsius * 9/5) + 32;
console.log(farenheitFormula)*/


/*let result=0
arr=[3, 5, 11, 17, 4, 9]
for(let i=0; i < arr.length; i++){
 result += arr[i]
}
 console.log(result)*/


/*let sum = 0
const arr = [5, 42, 20, -10, -20, 15]
for(let i=0; i < arr.length; i++){
 sum += arr[i]
}

sum = sum / arr.length

console.log(sum)*/

/*arr=[-2, 3, 5, -8, 10, -40]

function sortNumbers() {
arr2=[]
for(let i=0; i < arr.length; i++){
 if(arr[i] < 0) {
   arr2.push(arr[i])
}}
 return arr2;
}

sortNumbers()
console.log(arr2)*/

/*let num=0

function findMax() {
arr =[2, 35, 12, 10, 100]

for(let i=0; i < arr.length; i++){
 if(arr[i] > num){
  num = arr[i]
}}
return num;
}
findMax()
console.log(num)*/

arr=[0, 1]
for(let i = 0; i < 11; i++){
  if(i > 1) {
    arr[i]= arr[i-1] + arr[i-2]
  }
}
console.log(arr)