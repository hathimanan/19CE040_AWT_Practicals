var func=[];

for(let i=0;i<3;i++){
    func[i]=function(){
        console.log("Value of i:"+i);
    };
}

for(let j=0;j<3;j++){
    func[j]();
}


// func[0]=function(){
//     let i
//     console.log("Value of i:"+i); //0
// };
// func[1]=function(){
//     let i
//     console.log("Value of i:"+i);//1
// };
// func[2]=function(){
//     let i
//     console.log("Value of i:"+i);//2
// };

//  func[0]();
//  func[1]();
//  func[2]();