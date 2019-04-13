<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <!--<Input></Input>-->
    <MonthTab></MonthTab>
    <!--<MonthSpendResult></MonthSpendResult>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Input from './components/Input.vue';
import MonthSpendResult from '@/components/month/result/MonthSpendResult.vue';
import MonthTab from '@/components/month/tab/MonthTab.vue';

@Component({
  components: {
    HelloWorld,
    Input,
    MonthSpendResult,
    MonthTab,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
