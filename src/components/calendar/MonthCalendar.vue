<template>
  <v-container>
    <v-sheet height="250">
      <v-calendar :show-month-on-first="false"></v-calendar>
    </v-sheet>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      :mobile-breakpoint="0"
    >
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import { TableHeader } from '@/types/vuetify/table';
import { ExpenseItem } from '@/components/detail/expense-item';
import { getExpenses } from '@/httpclient/expense/expense-client';

@Component
export default class MonthCalendar extends Vue {
  private headers: TableHeader[] = [
    {
      text: 'date',
      align: 'center',
      value: 'date'
    },
    {
      text: 'content',
      align: 'center',
      value: 'content'
    },
    {
      text: 'expense',
      align: 'center',
      value: 'expense'
    }
  ];
  private items: ExpenseItem[] = [];

  private async created() {
    const firstDay = moment()
      .startOf('month')
      .format('YYYY-MM-DD');
    const lastDay = moment()
      .endOf('month')
      .format('YYYY-MM-DD');
    const res = await getExpenses(firstDay, lastDay);
    this.items = res.expenses.map(exp => {
      const { date, content, amount } = exp;
      return {
        date,
        content,
        expense: amount
      };
    });
  }
}
</script>

<style scoped></style>
