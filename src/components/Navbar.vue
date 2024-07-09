<template>
    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation
        v-model="value"
        color="primary"
        active
      >
        <v-btn to="/">
          <v-icon>mdi-heart</v-icon>
  
          Favourites
        </v-btn>
  
        <v-btn to="all-books">
          <v-icon>mdi-library</v-icon>
  
          All Books
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </template>