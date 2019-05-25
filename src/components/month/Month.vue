<template>
  <div>
    <v-toolbar
        color="white"
        tabs
    >
      <v-layout justify-center>
        <v-toolbar-title>1月</v-toolbar-title>
      </v-layout>
      <template v-slot:extension>
      <v-tabs
          centered
          slider-color="black"
          v-model="tabs"
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
      </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items
        v-model="tabs"
    >
      <v-tab-item>
        <MonthResult></MonthResult>
      </v-tab-item>
      <v-tab-item>
        <MonthCalendar></MonthCalendar>
      </v-tab-item>
      <v-tab-item>
        <MonthDetail></MonthDetail>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MonthResult from '@/components/month/result/MonthResult.vue';
import MonthDetail from '@/components/month/detail/MonthDetail.vue';
import MonthCalendar from '@/components/month/calendar/MonthCalendar.vue';

@Component({
  components: {
    MonthDetail,
    MonthResult,
    MonthCalendar,
  },
})
export default class Month extends Vue {
  private tabs = null;
}
</script>

<style scoped>

</style>
