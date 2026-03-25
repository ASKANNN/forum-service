import Post from "../models/post.model.js";

class PostRepository {
    async create(data) {
        return await Post.create(data);
    }

    async findById(id) {
        return await Post.findById(id).exec();
    }
}

export default new PostRepository();
