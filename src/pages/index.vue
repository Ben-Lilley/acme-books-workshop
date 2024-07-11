<!-- The template is where you can define the structure of the component using html-->
 <!--TODO: menu in home page to favourite new books, make data table headings visible -->
<template>
  <div class="home">
      <v-img
        height="150"
        width="250"
        src="@/assets/logo.png"
      />

      <h1>Welcome to Bens's Books</h1>


      <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                    v-bind="activatorProps"
                    color="surface-variant"
                    text="Favourite books"
                    variant="flat"
                >Favourite books</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Favourite book">
                    <v-card-text>
                        Favourite a Book:
                    </v-card-text>

                    <v-container>
                      <v-form>
                        <v-radio-group v-model="selected" column>
                          <v-radio
                            v-for="book in books"
                            label={{ title }}
                          ></v-radio>
                        </v-radio-group>
                      </v-form>
                    </v-container>

                    <v-spacer></v-spacer>

                        <v-divider></v-divider>
                        <v-spacer></v-spacer>
                    <v-btn
                        text="Close Dialog"
                        @click="isActive.value = false"
                    >Close Dialog</v-btn>
                </v-card>
            </template>
        </v-dialog>
      
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
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const store = useAppStore();
let f
const favoriteBooks = ref([]);
const books = ref([]);

favoriteBooks.value = store.getFavourite;
books.value = store.setBooks;

</script>

<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
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