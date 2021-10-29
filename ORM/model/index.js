const {Sequelize, DataTypes}=require('sequelize');
const sequelize = new Sequelize(
    'dbUniversity',
    'root',
    'shreeM@N2',
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

module.exports = sequelize

const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.student=require('./student.js')(sequelize, DataTypes);

db.sequelize.sync({force:true}) // {force:true}

.then(()=>{
    console.log("Database is Sync")
})
module.exports=db;

sequelize.authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
 })