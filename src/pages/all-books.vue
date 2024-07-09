<template>
    <div>
        <h1>All Books</h1>
        <!-- add the vuetify data table component here! -->

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
import { getBooks, getFavoriteBooks, updateBook } from '@/services/api.service';


let allBooks = ref([])
let favourited = ref([])

getFavoriteBooks().then((books) => {
    favourited.value = books
});

getBooks().then((res) => {
    allBooks.value = res
});

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
