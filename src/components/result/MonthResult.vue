<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-header
      hide-default-footer
      :mobile-breakpoint="0"
    >
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableHeader } from '@/types/vuetify/table';

@Component
export default class MonthResult extends Vue {
  private headers: TableHeader[] = [
    {
      text: 'resultName',
      align: 'center',
      value: 'resultName'
    },
    {
      text: 'result',
      align: 'center',
      value: 'result'
    }
  ];
  private items = [
    {
      resultName: 'sum',
      result: 100
    },
    {
      resultName: 'goal',
      result: 200
    },
    {
      resultName: 'result',
      result: 300
    }
  ];
}
</script>

<style scoped></style>
