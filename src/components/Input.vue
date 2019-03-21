<template>
  <div>
    <div>
      <input type="number">円
    </div>
    <div>
      <input type="date">
    </div>
    <div>
      <input type="text">
    </div>
    <button>Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
}
</script>

<style scoped>

</style>
