import { defineStore } from 'pinia';
import api from '@/api';

export const useStore = defineStore('store', {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      const response = await api.get('/posts');
      this.posts = response.data;
    },
    async getPost(id) {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    },
    async addPost(post) {
      await api.post('/posts', post);
      await this.fetchPosts();
    },
    async updatePost(post) {
      await api.put(`/posts/${post.id}`, post);
      await this.fetchPosts();
    },
    async deletePost(id) {
      await api.delete(`/posts/${id}`);
      await this.fetchPosts();
    },
  },
});
