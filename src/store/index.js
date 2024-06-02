// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    profile: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    photos: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {
    fetchPhotos({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => {
          commit('setPhotos', response.data);
        });
    }
  },
  getters: {
    profile: state => state.profile,
    photos: state => state.photos,
  }
});
