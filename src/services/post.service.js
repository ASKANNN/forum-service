import postRepository from "../repositories/post.repository.js";

class PostService {
    async createPost(author, data) {
        const postData = { author, ...data };
        if (Array.isArray(data?.tags)) {
            postData.tags = [...new Set(data.tags)];
        }

        return await postRepository.create(postData);
    }

    async getPostById(id) {
        const post = await postRepository.findById(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }

        return post;
    }
}

export default new PostService();
