<template>
  <v-container>
    <v-sheet height="250">
      <v-calendar :show-month-on-first="false"></v-calendar>
    </v-sheet>
    <v-data-table :headers="headers" :items="items" hide-actions>
      <template v-slot:items="props">
        <tr>
          <td class="text-md-right">
            <v-layout justify-center>
              {{ props.item.content }}
            </v-layout>
          </td>
          <td class="text-md-right">
            <v-layout justify-center> {{ props.item.expense }}円 </v-layout>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MonthCalendar extends Vue {
  private headers = [
    {
      text: "content",
      align: "center",
      value: "content"
    },
    {
      text: "expense",
      align: "center",
      value: "expense"
    }
  ];
  private items = [
    {
      content: "ティッシュ",
      expense: 100
    },
    {
      content: "チーズ",
      expense: 150
    }
  ];
}
</script>

<style scoped></style>
