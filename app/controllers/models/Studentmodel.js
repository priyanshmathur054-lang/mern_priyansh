

// const  mongoose  = require("mongoose");

const { default: mongoose } = require("mongoose");

const StudentSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     fatherName: {
        type: String,
        required: true
    },
     email: {
        type: String,
    },
     phone: {
        type: String,
        required: true
    },
     CreatedAt: {
        type: Date,
        required: true
    },
});

const StudentModel = model("Student", StudentSchema);

module.exports = StudentModel