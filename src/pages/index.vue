<!-- The template is where you can define the structure of the component using html-->
 <!--TODO: Make search work, make selected items favourite, remove brackets from authors-->
<template>
  <div class="home">
      <v-img
        height="150"
        width="250"
        src="@/assets/logo.png"
      />

      <h1>Welcome to Bens's Books</h1>

      <div class="cards-container">
        <!-- Step 2: use the book-card component here -->
        <book-card
          v-for="book in favoriteBooks"
          :key="book.isbn"
          :title="book.title"
          :description="book.shortDescription"
          :thumbnail="book.thumbnailUrl"
          :author="book.authors.join(', ')"
          :favourite="book.favourite"
        /></div>
  </div>
</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
import { getFavoriteBooks } from '@/services/api.service';
import { ref } from 'vue';

let f
const favoriteBooks = ref([]);

getFavoriteBooks().then((books) => {
  favoriteBooks.value = books;
});
</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 64px;
}

.cards-container {
  font-size: large;
}
</style>
