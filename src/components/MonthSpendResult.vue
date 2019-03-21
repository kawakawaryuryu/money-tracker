<template>
  <div>
    <div>
      <label>sum: </label>
      <span>円</span>
    </div>
    <div>
      <label>goal: </label>
      <span>円</span>
    </div>
    <div>
      <label>result: </label>
      <span>円</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MonthSpendResult extends Vue {
}
</script>

<style scoped>

</style>
