import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    country: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    img: {
        type: String,

    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }    
},
{
    timestamps:true
}
)

export default mongoose.model("Users", userSchema)