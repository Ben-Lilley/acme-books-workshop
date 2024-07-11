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

            <template v-slot:default="{ isActive: isDialogOpen }">
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

                        <v-col cols="12" md="12" sm="6">
                            <v-text-field
                                v-model="newIsbn"
                                label="Book id*"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
                            <v-text-field
                                v-model="newPD"
                                label="Published Date*"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12" sm="6">
                            <v-text-field
                                v-model="newURL"
                                label="Thumbnail Url*"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-divider></v-divider>
                        <v-spacer></v-spacer>
                    </v-card-text>
                    <v-btn
                        text="Close Dialog"
                        @click="isDialogOpen.value = false"
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
import { useAppStore } from '@/stores/app';

const newBookName = ref('');
const newAuthors = ref('');
const newnewAuthors = ref([newAuthors]);
const newPageCount = ref();
const newIsbn = ref('');
const newPD = ref('')
const newURL = ref('')
// const allBooks = ref([]);
const favourited = ref([]);
const store = useAppStore();
const isDialogOpen = ref(false)

favourited.value = store.getFavourite
const allBooks = store.books



const submitBook = () => {
    isDialogOpen.value = false;
    const newBook = {
        title: newBookName.value,
        authors: newnewAuthors.value,
        pageCount: Number(newPageCount.value),
        isbn: newIsbn.value,
        publishedDate: newPD.value,
        thumbnailURL: newURL.value
    };
    console.log('add book')
    store.addBook(newBook);
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
