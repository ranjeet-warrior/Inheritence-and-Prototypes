// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent = {
Name:'Kumar Shyam Kishore Ranjan'
age:'56';
profession:'Assistant Professor(Physics)';
}

const child = {
 Name:'Ranjeet Kumar'
 age:'25';
 profession:'Mechanical Engineer'  
}
child.__proto__ =parent ;

// Write code to explain prototype chaining

const F = function () {
    this.a = 1;
    this.b = 2;
 };
 const o = new F(); // { a: 1, b: 2 }
F.prototype.b = 3;
F.prototype.c = 4;

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const array=[10,20,30,40,50]
const arra1 = {
    getName:function(){
        const result = array.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(result);
    }
}
arr.getName();

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Ranjeet")));
