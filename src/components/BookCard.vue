<!-- The template is where you can define the structure of the component using html-->
<template>
    <!-- The v-card component is a Vuetify component that displays a card -->
     <v-card
     elevation="16"
     >
     <v-card-item>
            <v-card-title>
            {{ title }}
            </v-card-title>
            <v-card-subtitle>
            {{ author }}
            </v-card-subtitle>
            <v-card-text>
            {{ description }}
            </v-card-text>
        </v-card-item>

        <v-img
        height="25%"
        width="25%"
        :src="thumbnail"
        cover
        ></v-img>

        <v-card-actions>
          <v-btn @click="store.updateFavourite(key , !favourite)">
            favourite
          </v-btn>
        </v-card-actions>



    </v-card>



        
</template>

<!-- The script setup is where the logic goes.
 This is where you can define variables and functions that will be used in the template -->
<script setup>
    import { defineProps } from "vue";
    import { useAppStore } from '@/stores/app';

    const store = useAppStore();

    const onclick = () => {
        store.updateFavourite(key , favourite)
    }


    // Define the props that this component will accept
    //key is not defined?
    defineProps({
        title: String,
        description: String,
        thumbnail: String,
        author: String,
        key: Number,
        favourite: Boolean
    }); 
    
</script>

<!-- The style tag is where you can define styles that will only apply to this component -->
<style scoped>
</style>
