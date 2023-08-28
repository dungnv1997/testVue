<template>
  <div>
    <h2>Post List</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from '@/store';

const store = useStore();
const posts = store.posts;
</script>
