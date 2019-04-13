<template>
  <v-container fluid>
    <v-layout justify-center>
      <h2 class="display-3">1月</h2>
    </v-layout>
    <v-data-table
        :items="items"
        hide-headers
        hide-actions
        class=""
    >
      <template v-slot:items="props">
        <tr>
          <th>sum</th>
          <td class="text-md-right">{{props.item.sum}}円</td>
        </tr>
        <tr>
          <th>goal</th>
          <td class="text-md-right">{{props.item.goal}}円</td>
        </tr>
        <tr>
          <th>result</th>
          <td class="text-md-right">{{props.item.result}}円</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MonthSpendResult extends Vue {
  private items = [
    {
      sum: 100,
      goal: 200,
      result: 300,
    },
  ];
}
</script>

<style scoped>

</style>
