<template>
  <v-container fluid>
    <v-data-table :items="items" hide-headers hide-actions class="">
      <template v-slot:items="props">
        <tr>
          <th>sum</th>
          <td class="text-md-right">
            <v-layout justify-center> {{ props.item.sum }}円 </v-layout>
          </td>
        </tr>
        <tr>
          <th>goal</th>
          <td class="text-md-right">
            <v-layout justify-center> {{ props.item.goal }}円 </v-layout>
          </td>
        </tr>
        <tr>
          <th>result</th>
          <td class="text-md-right">
            <v-layout justify-center> {{ props.item.result }}円 </v-layout>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MonthResult extends Vue {
  private items = [
    {
      sum: 100,
      goal: 200,
      result: 300
    }
  ];
}
</script>

<style scoped></style>
