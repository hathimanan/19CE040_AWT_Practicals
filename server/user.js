export default class User{
    constructor(id,name){
        this.id = id
        this.name = name
    }
}

export function printID(user){
    console.log(`User is ${user.id} is old`)
}

export function printName(user){
    console.log(`User's name is ${user.name} `)
}