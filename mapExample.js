const arr = [5, 1, 3, 2, 6];

function double (x){
    return x*2;
}

const output = arr.map(double);
console.log(output);

// binary 

const output1 = arr.map(function binary (x){
    return x.toString (2);
});

// using arrow function 

const output2 = arr.map ((x) => x.toString(2));

console.log(output1);
console.log(output2);

// filter function example

const array = [5, 1, 4 , 2, 6];


function  isOdd(x){
    return x%2;// odd
    // return x % 2 ===0;//Even 
    // return x > 4 greter than 4
    
}
const filterdoutput = array.filter(isOdd);

// using arow function
const filterdoutput1 = array.filter((x) => x > 4);
console.log(filterdoutput);
console.log(filterdoutput1);

//*********** */ reduce function 
// sum
// normal function example 

function findSum(arr) {
  let sum = 0;
    for (let i=0 ; i < arr.length; i++){
        sum  = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//*** using  reduce sum of the array*/
const reduceFunction= arr.reduce(function (acc , curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log(reduceFunction);

//***using reduce Max of array */
const reduceFunctionMax= arr.reduce(function (max , curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);

console.log(reduceFunctionMax);

