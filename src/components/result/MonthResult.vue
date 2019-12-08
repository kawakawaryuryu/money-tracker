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
import { getResults } from '@/httpclient/result/result-client';
import { ResultSummary } from '@/components/result/result-summary';
import moment from 'moment';

@Component
export default class MonthResult extends Vue {
  private headers: TableHeader[] = [
    {
      text: 'name',
      align: 'center',
      value: 'name'
    },
    {
      text: 'value',
      align: 'center',
      value: 'value'
    }
  ];
  private items: ResultSummary[] = [];

  private async created() {
    const thisMonth = moment().format('YYYY-MM');
    const res = await getResults(thisMonth);
    const { totalExpense, expenseGoal, balance } = res.results[0];
    this.items = [
      {
        name: 'sum',
        value: totalExpense
      },
      {
        name: 'goal',
        value: expenseGoal
      },
      {
        name: 'result',
        value: balance
      }
    ];
  }
}
</script>

<style scoped></style>
