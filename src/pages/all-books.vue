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
                >Add Book</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Book Creation">
                    <v-card-text>
                        Add new book:
                    </v-card-text>

                    <v-spacer></v-spacer>

                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12" md="12" sm="6">
                                <v-text-field
                                    v-model="newBookName"
                                    label="Book name*"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-col cols="12" md="12" sm="6">
                            <v-text-field
                                v-model="newAuthors"
                                label="Authors"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
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
                    >Close Dialog</v-btn>
                    <v-btn
                        text="Submit"
                        @click="submitBook"
                    >Submit</v-btn>
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
import { ref } from 'vue';
import { createBook, getBooks, getFavoriteBooks } from '@/services/api.service';

const newBookName = ref('');
const newAuthors = ref('');
const newPageCount = ref('');
const allBooks = ref([]);
const favourited = ref([]);

const fetchBooks = async () => {
    favourited.value = await getFavoriteBooks();
    allBooks.value = await getBooks();
};

fetchBooks();

const submitBook = () => {
    const newBook = {
        title: newBookName.value,
        authors: newAuthors.value,
        pageCount: newPageCount.value,
    };
    createBook(newBook);
    // Optionally clear the form fields
    newBookName.value = '';
    newAuthors.value = '';
    newPageCount.value = '';
};

const headers = [
    { text: 'Title', key: 'title' },
    { text: 'Author', key: 'authors' },
    { text: 'Page Count', key: 'pageCount' },
];
</script>

<script>
export default {
    data() {
        return {
            search: '',
        };
    },
};
</script>
