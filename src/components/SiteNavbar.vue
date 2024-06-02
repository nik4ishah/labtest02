<template>
  <div class="navbar">
    <div class="icon">
      <h2 class="logo">W.Tech.</h2>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/" class="nav-link">HOME</router-link></li>
        <li><router-link to="/about" class="nav-link">ABOUT</router-link></li>
        <li><router-link to="/profile" class="nav-link">PROFILE</router-link></li>
        <li><router-link to="/photos" class="nav-link">PHOTOS</router-link></li>
      </ul>
    </div>
    <div class="search">
      <input class="srch" v-model="searchQuery" type="search" placeholder="Type To Find" @input="filterPhotos" />
    </div>
  </div>
</template>

<style>
.nav-link {
  font-weight: bold;
  color: white;
  text-decoration: none; 
}

.nav-link:hover {
  text-decoration: none; 
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SiteNavbar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    filterPhotos() {
      if (this.searchQuery.trim() === '') {
        this.fetchPhotos();
      } else {
        this.$store.commit('setPhotos', this.$store.getters.photos.filter(photo =>
          photo.title.includes(this.searchQuery)
        ));
      }
    }
  }
}
</script>
