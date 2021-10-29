const db=require("../model")
const Students=db.student

const addStudent=async(req,res)=>{
    // let data=await Students.build({name:"Nikunj", email:"n@gmail.com",gender:"male"})
    // await data.save()
    let data=await Students.create({name:"Manan", email:"hathimanan@gmail.com",gender:"male"})

    let response={
        data:"ok"
    }
    res.status(200).json(response)
}

// const findStudent=async(req,res)=>{
//     // let data=await Students.build({name:"Nikunj", email:"n@gmail.com",gender:"male"})
//     // await data.save()
//     let std=await Students.findAll()

//     let response={
//         data:"ok"
//     }
//     res.status(200).json(response)
// }

module.exports={ addStudent}