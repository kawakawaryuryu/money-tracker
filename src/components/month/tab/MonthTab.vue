<template>
  <v-tabs
      centered
      slider-color="black"
  >
    <v-tab>
      Result
    </v-tab>
    <v-tab>
      Calendar
    </v-tab>
    <v-tab>
      Details
    </v-tab>
    <v-tab-item>
      <MonthSpendResult></MonthSpendResult>
    </v-tab-item>
    <v-tab-item>
    </v-tab-item>
    <v-tab-item>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MonthSpendResult from '@/components/month/result/MonthSpendResult.vue';
@Component({
  components: {
    MonthSpendResult,
  },
})
export default class MonthTab extends Vue {

}
</script>

<style scoped>

</style>
