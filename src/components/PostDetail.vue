<template>
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { useStore } from '@/store';
  
  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  
  const post = store.getPost(route.params.id);
  
  const deletePost = async () => {
    await store.deletePost(post.id);
    router.push('/');
  };
  </script>
  