const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "the email is already use"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }

    },
    phone: {
        type: Number,
        min:10,
        max:10,
        required: true,
        unique:true
    },
    address: {
        type: String,
        required: true
    }
});
const Student=mongoose.model("Student",studentSchema);   // now we can use this schme anywhere in codespace 
module.export=Student;
