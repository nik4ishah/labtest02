<template>
  <div>
    <div class="table-container">
      <table>
        <tr>
          <th style="font-weight: normal; font-size: 16px;">Name:</th>
          <td class="separator">:</td>
          <td style="color: orange; font-size: 20px; font-weight: bold; font-family: 'Times New Roman', Times, serif;">{{ profile.name }}</td>
        </tr>
        <tr>
          <th style="font-weight: normal; font-size: 16px;">Course Year:</th>
          <td class="separator">:</td>
          <td style="color: orange; font-size: 20px; font-weight: bold; font-family: 'Times New Roman', Times, serif;">{{ profile.cyear }}</td>
        </tr>
        <tr>
          <th style="font-weight: normal; font-size: 16px;">Matrix No</th>
          <td class="separator">:</td>
          <td style="color: orange; font-size: 20px; font-weight: bold; font-family: 'Times New Roman', Times, serif;">{{ profile.matno }}</td>
        </tr>
        <tr>
          <th style="font-weight: normal; font-size: 16px;">Address</th>
          <td class="separator">:</td>
          <td style="color: orange; font-size: 20px; font-weight: bold; font-family: 'Times New Roman', Times, serif;">{{ profile.addr }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyAbout',
  computed: {
    ...mapGetters(['profile'])
  }
}
</script>
