<template>
  <div>
    <button @click="redirectToPostList">Go to Post List</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToPostList = () => {
  router.push('/');
};
</script>