import mongoose,{Schema} from "mongoose";

const profileSchema = new Schema({
    bio:{
        type:String
    },
    avatar:{
        type:String,
        required:[true,"Avatar is required"]
    },
    blogs:[
        {
            type:Schema.Types.ObjectId,
            ref:"BlogModel"
        }
    ]
});

export const profile = mongoose.models.profile || mongoose.model("profile",profileSchema)