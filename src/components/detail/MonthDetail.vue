<template>
  <v-container>
    <v-data-table :headers="headers" :items="items" hide-actions>
      <template v-slot:items="props">
        <tr>
          <td class="text-md-right">
            <v-layout justify-center>
              {{ props.item.date }}
            </v-layout>
          </td>
          <td class="text-md-right">
            <v-layout justify-center>
              {{ props.item.content }}
            </v-layout>
          </td>
          <td class="text-md-right">
            <v-layout justify-center>
              {{ props.item.expense }}円
            </v-layout>
          </td>
        </tr>
      </template>
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
    this.items = res.expenses.map((exp) => new ExpenseItem(
      exp.date,
      exp.content,
      exp.amount
    ));
  }
}
</script>

<style scoped></style>
