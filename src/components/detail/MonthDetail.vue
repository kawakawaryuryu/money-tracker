<template>
  <v-container>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
        mobile-breakpoint="0"> <!-- tableのヘッダー表示をスマホでも崩さないようにしている -->
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableHeader } from '@/types/vuetify/table';
import { getExpenses } from '@/httpclient/expense/expense-client';
import { ExpenseItem } from '@/components/detail/expense-item';

@Component
export default class MonthDetail extends Vue {
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
    const res = await getExpenses();
    this.items = res.expenses.map(exp => {
      const { date, content, amount } = exp;
      return {
        date,
        content,
        expense: amount
      };
    });
    console.log(this.items)
  }
}
</script>

<style scoped></style>
