<template>
    <div>
        <h1>All Books</h1>
        <!-- add the vuetify data table component here! -->

        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                v-bind="activatorProps"
                color="surface-variant"
                text="Add Book"
                variant="flat"
                ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Book Creation">
                <v-card-text>
                    Add new book:
                </v-card-text>

                    <v-spacer></v-spacer>

                <v-card-text>
                    <v-row dense>
                        <v-col
                        cols="12"
                        md="12"
                        sm="6"
                    >
                    <v-text-field
                    v-model="newBookName"
                    label="Book name*"
                    required>
                    </v-text-field>
                    </v-col>
                    </v-row>

                    <v-col
                        cols="12"
                        md="12"
                        sm="6"
                        >
              <v-text-field
                v-model="newAuthors"
                label="authors"
              ></v-text-field>
            </v-col>


            <v-col
                cols="12"
                md="12"
                sm="6"
              >
              <v-text-field
                v-model="newPageCount"
                label="Page Count*"
                required
              ></v-text-field>
            </v-col>

            <v-divider></v-divider>
                    <v-spacer></v-spacer>
                </v-card-text>
                    <v-btn
                    text="Close Dialog"
                    @click="isActive.value = false"
                    ></v-btn>
                    <v-btn
                    text="Submit"
                    @click="isActive.value = false; createBook(newBook)"
                    ></v-btn>
                </v-card>
            </template>
        </v-dialog>

        <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>


        <v-data-table
           v-model="favourited"
            :item-value="item => `${item.title}`"
            :headers="headers"
            :items="allBooks"
            :search="search"
            return-object
            show-select
        ></v-data-table>
    </div>

    <!--<pre> {{ favourited }}</pre> -->

</template>
<script setup>

// import the getBooks function here, and define your table data, and table headers.
import {ref} from 'vue'
import { createBook, getBooks, getFavoriteBooks, updateBook } from '@/services/api.service';

let newBookName
let newAuthors
let newPageCount
let allBooks = ref([])
let favourited = ref([])

getFavoriteBooks().then((books) => {
    favourited.value = books
});

getBooks().then((res) => {
    allBooks.value = res
});

let newBook = {
    title: newBookName,
    authors: newAuthors,
    isbn: newPageCount,
}

const headers = [
    {
        text: 'Title',
        key: 'title'
    },
    {
        text: 'Author',
        key: 'authors'
    },
    {
        text: 'Page Count',
        key: 'pageCount'
    }
]
</script>


<!-- this script messes with the create new book text boxes for some reason -->
<script>
    export default{
        data(){
            return {
                search: ''
            }
        }
    }
</script>