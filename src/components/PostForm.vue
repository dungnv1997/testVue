<template>
  <form @submit="handleSubmit">
    <label for="title">Title:</label>
    <input v-model="title" required />
    <label for="content">Content:</label>
    <textarea v-model="content" required />
    <button type="submit">{{ isEditing ? 'Update' : 'Create' }}</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref('');
const content = ref('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (isEditing) {
    store.updatePost({ id: post.id, title, content });
  } else {
    store.addPost({ title, content });
  }
  router.push('/');
};

const store = useStore();
const route = useRoute();
const router = useRouter();
const isEditing = route.name === 'edit';

let post = {};
if (isEditing) {
  post = store.getPost(route.params.id);
  title.value = post.title;
  content.value = post.content;
}
</script>
