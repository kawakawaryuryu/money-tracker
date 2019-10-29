<template>
  <v-app class="white">
    <InputSheet></InputSheet>
    <Sp></Sp>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Input from "@/components/input/Input.vue";
import Sp from "@/components/Sp.vue";

@Component({
  components: {
    Sp,
    InputSheet: Input
  }
})
export default class App extends Vue {}
</script>

<style></style>
