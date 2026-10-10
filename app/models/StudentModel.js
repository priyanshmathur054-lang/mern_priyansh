const{schema, default: mongoose, model}=require("mongoose");
const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

     fatherName:{
        type:String,
        require:true
    },

     email:{
        type:String,
        
    },

     phone:{
        type:String,
        require:true
    },

     Dob:{
        type:String,
        require:true
    },

    

});

const StudentModel = model("Student",studentSchema);

module.exports = StudentModel;