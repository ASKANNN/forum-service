import Post from "../models/post.model.js";

class PostRepository {
    async create(data) {
        return Post.create(data);
    }

    async findById(id) {
        return Post.findById(id).exec();
    }
}

export default new PostRepository();
