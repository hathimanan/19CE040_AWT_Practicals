
module.exports=(sequelize,DataTypes)=>{
    const student=sequelize.define("student",{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'hathimanan@gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
    },{
         //tableName:'studentInfo',
        timestamps:false,
        //createdAt:false, 
        //createdAt:'row_created_at',
        //updatedAt:'modified_at',
        engine:"MYISAM"
    })
     return student;
}