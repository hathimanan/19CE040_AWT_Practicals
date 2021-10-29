let studentRecords = [ {name: 'Mrugendra', id: 123, marks : 98 },
          {name: 'Martin', id: 101, marks : 23 },
          {name: 'Vraj', id: 200, marks : 45 },
          {name: 'Bhautik', id: 115, marks : 75 },
          {name: 'Uddhav', id: 95, marks : 65 } ] 
console.log(studentRecords);

//1. Traditional for() loop 
let names = [];
for (let index = 0; index < studentRecords.length; index++){
     names.push(studentRecords[index].name.toUpperCase());
}
console.log(names); // logs: [ 'MRUGENDRA', 'MARTIN', 'VRAJ', 'BHAUTIK', 'UDDHAV' ]

//2. for(...of)=> ES6/7 for (..in)=> ES5/6
let names1 = [];
for (const student of studentRecords) {
    names1.push(student.name.toUpperCase());
}
console.log(names1); // logs: [ 'MRUGENDRA', 'MARTIN', 'VRAJ', 'BHAUTIK', 'UDDHAV' ]

//3. forEach()
let names2 = [];
studentRecords.forEach( student => {
     names2.push(student.name.toUpperCase());
})
console.log(names2); // logs: [ 'MRUGENDRA', 'MARTIN', 'VRAJ', 'BHAUTIK', 'UDDHAV' ]

//Solution using Map
let namesMap = studentRecords.map( stu => stu.name.toUpperCase());
console.log(namesMap); // logs: [ 'MRUGENDRA', 'MARTIN', 'VRAJ', 'BHAUTIK', 'UDDHAV' ]

//marks > 50
let namesFilter = studentRecords.filter(stu => stu.marks > 50);
console.log(namesFilter); 

//marks > 50 and id > 120
let namesFilter1 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(namesFilter1); //[ { name: 'Mrugendra', id: 123, marks: 98 } ]

// Reduce get o/p in single form
let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks) // 306


let names11 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names11); // logs: [ 'Mrugendra', 'Bhautik', 'Uddhav' ]

let totalMarks11 = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks11); 

// Exercise: This time we are required to print the total marks of the students with marks 
//greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.