// Primitive and non premitive 

// 1.Premitive:-string number boolen null undefine 

//numnber//
let a =10;
console.log(typeof a);
console.log(typeof(a));

//string//
let b ="Gangu";
let c ='gangu';
let d =`gangu`;

console.log(typeof b);
console.log(typeof(b));

console.log(typeof c);
console.log(typeof(c));

console.log(typeof d);
console.log(typeof(d));

//boolen//
let e = true;
console.log(typeof e);

let f = false;
console.log(typeof false);

//null it is a stand alone value//
let g = null;
console.log(typeof g);

// undefined//

let h;
console.log(typeof h);




//NON - PREMITIVE  array object function

// 1.array

let array=[1123,"gangu",120.67];
console.log(array);


//2.object

let emp ={
    name:"Gangu",
    age:20,
    job:"web-developer",
    salary:30000
};

console.log(emp, typeof emp);


//3.functions

let variable = function(){
    console.log("hello javascript");
}

variable();



////++++++++++++++++++++++ memory location of data type ++++++++++++++++++++++///////


// 1.stack = Primitive datatypes

let nameone ="Gangu";

let nametwo =nameone;

nametwo ="manju";

console.log(nameone);
console.log(nametwo);


//the output will "gangu" because in stack only it gives copy of data to euqal or edit it will not edit original//


//2.heap = non primitive //


let empone={
    name :"gangu",
    age:20
}

let emptwo=empone;

emptwo.age=25;

console.log(empone);


// the output will age=25 because it will give original data to changr in heap //










