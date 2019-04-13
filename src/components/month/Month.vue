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
      <MonthResult></MonthResult>
    </v-tab-item>
    <v-tab-item>
      <MonthCalendar></MonthCalendar>
    </v-tab-item>
    <v-tab-item>
      <MonthDetail></MonthDetail>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MonthResult from '@/components/month/result/MonthResult.vue';
import MonthDetail from '@/components/month/details/MonthDetail.vue';
import MonthCalendar from '@/components/month/calendar/MonthCalendar.vue';
@Component({
  components: {
    MonthDetail,
    MonthResult,
    MonthCalendar,
  },
})
export default class Month extends Vue {

}
</script>

<style scoped>

</style>
