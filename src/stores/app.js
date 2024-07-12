// Utilities
import { deleteBook } from '@/services/api.service';
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
  },

    deleteBook(isbn){
      this.books.splice(this.books.find((book)=> book.isbn == isbn), 1)
    },

    editBook(isbn, title, authors, pageCount){
      console.log(isbn, title, authors, pageCount)
      this.books.find((book)=> book.isbn == isbn).title = title
      this.books.find((book)=> book.isbn == isbn).authors = authors
      this.books.find((book)=> book.isbn == isbn).pageCount = pageCount
    }
}
})
