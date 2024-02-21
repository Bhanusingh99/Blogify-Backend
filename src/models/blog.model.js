import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    slug: {
        type: String,
        required: [true, "slug is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    content: {
        type: String,
        required: [true, "content is required"]
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    published: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        enum: ["Dev", "Tricks", "Startup's", "Tech", "Idea's"],
        required: [true, "Tag is required"]
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    comments: [ 
        {
            text: { type: String, required: true },
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        }
    ]
});

export const BlogModel = mongoose.models.BlogModel || mongoose.model("BlogModel", blogSchema);
