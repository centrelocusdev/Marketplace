import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Enter the first name!"]
    },
    lastName: {
        type: String,
        required: [true, "Enter the last name!"]
    },
    email: {
      type: String,
      required: [true, 'Enter your email!']  
    },
    password: {
        type: String,
        required: [true, 'Enter your password!']  
    },
    serviceType: {
        type: String,
        required: [true, 'Choose the service type!']
    },
    userType: {
        type: String,
        required: [true, 'Choose the user type!']
    }
})

export const User = mongoose.models.users || mongoose.model("users", UserSchema);
