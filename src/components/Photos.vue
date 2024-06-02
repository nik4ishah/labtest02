<template>
  <div>
    <h1 style="margin-left: 5cm;">List of Photos</h1>
    <hr style="border-color: #ccc; margin-top: 10px; margin-left: 5cm; margin-right: 10cm;">
    <div v-for="(photo, index) in photos" :key="photo.id" class="photo-item" style="margin-left: 5cm;">
      <p style="margin-bottom: 0;">{{ index + 1 }}. {{ photo.title }}</p>
      <img :src="photo.thumbnailUrl" :alt="photo.title" style="margin-top: 5px;">
    </div>
  </div>
</template>
 
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'MyPhotos',
    computed: {
      ...mapGetters(['photos'])
    },
    created() {
      this.fetchPhotos();
    },
    methods: {
      ...mapActions(['fetchPhotos'])
    }
  }
  </script>
  
  <style>
  .photo-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
  }
  
  .photo-item img {
    max-width: 150px;
    border: 1px solid #ccc;
  }
  </style>
  