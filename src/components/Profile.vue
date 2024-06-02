<template>
  <div>
    <div class="table-container">
      <table>
        <tr>
          <th>Name</th>
          <td class="separator">:</td>
          <td><input v-model="profile.name" /></td>
        </tr>
        <tr>
          <th>Course Year</th>
          <td class="separator">:</td>
          <td><input v-model="profile.cyear" /></td>
        </tr>
        <tr>
          <th>Matrix No</th>
          <td class="separator">:</td>
          <td><input v-model="profile.matno" /></td>
        </tr>
        <tr>
          <th>Address</th>
          <td class="separator">:</td>
          <td><textarea v-model="profile.addr" style="width: 100%; height: 100px;"></textarea></td>
        </tr>
        <tr>
          <td colspan="3" class="button-row">
            <button @click="saveProfile">Save</button>
            <button @click="resetForm">Reset</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MyProfile',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapMutations(['setProfile']),
    saveProfile() {
      this.$store.dispatch('setProfile', this.profile);
    },
    resetForm() {
      this.$store.dispatch('setProfile', {
        name: '',
        cyear: '',
        matno: '',
        addr: ''
      });

      this.profile.name = '';
      this.profile.cyear = '';
      this.profile.matno = '';
      this.profile.addr = '';
    }
  }
}
</script>