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
export default class MonthDetail extends Vue {
  private headers = [
    {
      text: "date",
      align: "center",
      value: "date"
    },
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
      date: "2019/04/10",
      content: "ティッシュ",
      expense: 100
    },
    {
      date: "2019/04/11",
      content: "チーズ",
      expense: 150
    }
  ];
}
</script>

<style scoped></style>
