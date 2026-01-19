let arr = [10, 30, 40];
arr.push(60);
console.log(arr);


arr.pop();
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(70);
console.log(arr);

let a = [3, 5, 7, 8]
a.map((value,i)=>{
    console.log(value,i);
})