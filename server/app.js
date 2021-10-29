import User, {printID as displayID,printName as displayUserName} from ".user";

const user = new User(40,"Manan")
console.log(user)
displayID(user)
displayUserName(user)