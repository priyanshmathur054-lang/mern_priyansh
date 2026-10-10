const{schema, default: mongoose, model}=require("mongoose");
const teacherSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

     

     email:{
        type:String,
        
    },

     phone:{
        type:String,
        require:true,
        Unique:true
    },

     Dob:{
        type:String,
        require:true
    },

    

});

const TeacherModel = model("teacher",teacherSchema);

module.exports = TeacherModel;