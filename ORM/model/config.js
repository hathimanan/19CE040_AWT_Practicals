const mysql = require('mysql');
const {Sequelize, DataTypes}=require('sequelize');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbUniversity',
  socketPath : ''
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
module.exports = connection;

const sequelize = new Sequelize(
    'dbUniversity',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost',
    }
);

sequelize.query(`CREATE TABLE tblRegistration `);


// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const User = sequelize.define('user', {

	// Column-1, user_id is an object with
	// properties like type, keys,
	// validation of column.
	user_id:{

		// Sequelize module has INTEGER Data_Type.
		type:Sequelize.INTEGER,

		// To increment user_id automatically.
		autoIncrement:true,

		// user_id can not be null.
		allowNull:false,

		// For uniquely identify user.
		primaryKey:true
	},

	// Column-2, name
	name: { type: Sequelize.STRING, allowNull:false },

	// Column-3, email
	email: { type: Sequelize.STRING, allowNull:false },

	// Column-4, default values for
	// dates => current time
	myDate: { type: Sequelize.DATE,
			defaultValue: Sequelize.NOW },

	// Timestamps
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
})

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = User



sequelize.authenticate()
.then(()=>{
    console.log("Connected successfully with Database")
})
.catch(err=>{
    console.log("Issue with DB"+err)
})

module.exports = sequelize;

