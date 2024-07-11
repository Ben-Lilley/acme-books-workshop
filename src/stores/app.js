// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    books: []
  }),
  getters: {
    getFavourite: (state) => state.books.filter((book) => book.favorite),
  },
  actions: {
    setBooks(books) {
      this.books = books;
    },
    updateFavourite(isbn, favorite) {
      this.books.find((book)=> book.isbn == isbn).favorite = favorite;
    },

    addBook(book){
    this.books.push(book)
    console.log('new book', book);
    console.log('find', this.books.find((b) => b.isbn === book.isbn))
  }
}
})
