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
import { TableHeader } from '@/types/vuetify/table';
import { ExpenseItem } from '@/components/detail/expense-item';

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
  private items = [
    {
      content: 'ティッシュ',
      expense: 100
    },
    {
      content: 'チーズ',
      expense: 150
    }
  ];
}
</script>

<style scoped></style>
