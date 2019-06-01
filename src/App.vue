<template>
  <v-app class="white">
    <Input></Input>
    <Sp></Sp>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/input/Input.vue';
import Sp from '@/components/Sp.vue';

@Component({
  components: {
    Sp,
    Input,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
