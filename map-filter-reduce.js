
// assume list of array coming from API
const users = [
    {firstName :"Mounika" ,lastName:"Ede",age:24},
    {firstName :"jaya" ,lastName:"Ede",age:28},
    {firstName :"Bhanu" ,lastName:"Ede",age:24},
    {firstName :"priya" ,lastName:"Ede",age:22},
];

// list of full name all these array

const output = users.map((x) => x.firstName+ " "+x.lastName);

const output1 = users.filter((x) => x.age <30).map((x ) => x.lastName);

console.log(output);
console.log(output1);

// using reduce find out the age
// {24 : 1, 25 : 2, 26: 2}

const ageOutput = users.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age] 
        
    }else{
        acc[curr.age] = 1; 
    }
    return acc;
},{});

console.log(ageOutput);
