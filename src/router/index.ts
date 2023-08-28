import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PostList from '@/components/PostList.vue';
import PostDetail from '@/components/PostDetail.vue';
import PostForm from '@/components/PostForm.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: PostList },
  { path: '/post/:id', component: PostDetail },
  { path: '/create', component: PostForm },
  { path: '/edit/:id', component: PostForm, name: 'edit' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
