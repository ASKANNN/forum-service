import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        user: {type: String, required: true},
        message: {type: String, required: true},
        dateCreated: {type: Date, default: Date.now},
        likes: {type: Number, default: 0}
    }
);

const PostSchema = new mongoose.Schema(
    {
        author: {type: String, required: true},
        title: {type: String, required: true},
        content: {type: String, required: true},
        dateCreated: {type: Date, default: Date.now},
        tags: {type: [String], default: []},
        likes: {type: Number, default: 0},
        comments: {type: [CommentSchema], default: []}
    },
    {
        versionKey: false,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
            }
        },
        toObject: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
            }
        }
    }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
