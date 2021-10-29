let sum=(a,b)=>a+b;

let r=sum(20,10);
console.log(r);

let diff=(a,b)=>a-b;
let s=diff(20,10);
console.log(s);

let mul=(a,b)=>a*b;
let t=mul(20,10);
console.log(t);

let div=(a,b)=>a/b;
let u=div(20,10);
console.log(u);


console.log("Welcome to Callback concept");

function loginUser(email,password,callback){
    setTimeout(()=>{
        console.log("Data from Login user");
        callback({userEmail:email});
    },50000);
    
}
function getUserVideos(email,callback){ // no data found
    setTimeout(()=>{
    console.log("Data from Login user");
    callback(["V1","V2","V3"]);
    },2000);
}
function getVideoDetails(video,callback){
    setTimeout(()=>{
    console.log("Data from Login user");
    callback(["Title","Author"]);
    },1000);
}

const user=loginUser("hathimanan@gmail.com",19040,user=>{
    console.log(user);
        getUserVideos(user.userEmail,videos=>{
            console.log(videos);
            getVideoDetails(videos[0],title=>{
                console.log(title);
            })
        });
       
});

let studentRecords = [ {name: 'Manan', id: 040, marks : 68 },
          {name: 'Bhavik', id: 41, marks : 42 },
          {name: 'Kinana', id: 42, marks : 94 },
          {name: 'Harshil', id: 43, marks : 65 },
          {name: 'Jaipal', id: 44, marks : 84 },
          {name: 'Sahil', id:  78,marks : 50 },
          {name: 'Ravi',  id: 45,marks  : 46 }] 
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
let namesFilter1 = studentRecords.filter(stu => stu.marks > 50 && stu.id >= 43)
console.log(namesFilter1); //[ { name: 'Mrugendra', id: 123, marks: 98 } ]

// Reduce get o/p in single form
let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks) // 306


let names11 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names11); 

let totalMarks11 = studentRecords.filter(stu => stu.id > 40).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks11); 

