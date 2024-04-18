// higher order functions
console.log("******higher order functions*******");


function task(mathOperations){
    mathOperations(); //function calling

}
  task(function(){
    let num1 = 200;
    let num2 = 400;
    let total =` The sum of ${num1} + ${num2} = ${num1 + num2}`;
    console.log(total);

  });
  task(function(){

    let string = 'priya Dema';
    let piece = string.slice(0 , 5);
    console.log(piece);

  });
   
  task(function(){
     let num3 = 5678;
     let num4 = 976;
     let minus =` The minus of two nums is  ${num3} + ${num4} = ${num3 - num4}`;
     console.log(minus);
     
  });
  task(function(){
console.log("Hey, This is priya .I'm from Andhra Pradesh. i'm prusuing degree BS.c (Data Science)");

  });
task(function(){
    let number1 = 279.51;
    let number2 = 17;
    let divide=` The division of two numbers is  ${number1} / ${number2} = ${number1 / number2}`;
    console.log(divide);


});
//arrays by using loops ( for of and for)
console.log("^^^^^^^Second Task^^^^^^^");

let array =  ['Priya','Rajesh','Navitha','Deepu','Rajeshwari','Chintu','Harshini',890,97,4,143, true,false, ];
for(let x=0; x<array.length; x++){     //for loop
    console.log(array[x]);
}

for(let max of array){     // for of loop
    console.log(max);
}
// object creation by using for in  loop
console.log("***** Third Task *****");
let profileInfo = {
    fullName : 'jashime Mohara',
    lastName : 'Ghonasala',
    age : 36,
    education : 'MBA',
    job : 'SoftWare',  
}
 for( let data in profileInfo){
 console.log( profileInfo[data]);
 }

//array by using for each method
console.log("^^^^ Forth Task ^^^^");
let array2 = ['Giddalur','Nandyal','Markapuram','Podali','Darsi', 90,160,70,300,null];
array2.forEach((familyMem,position)=> {
    console.log(position,familyMem);
});

// array by using map
console.log("****Fifth Task****");
let stringArray = array2.map((ing)=>{
    if(typeof(ing) ==='string'){
        return ing;
    }

});
console.log(stringArray);

// array by using filter
let onlyNums = array2.filter((n)=> typeof(n) === 'number');
console.log(onlyNums);

let names = array2.filter((name)=> typeof(name) === 'string');
console.log(names);



 
