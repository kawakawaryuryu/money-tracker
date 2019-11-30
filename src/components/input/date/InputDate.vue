<template>
  <v-row justify="center">
    <v-col :xs="12" :sm="8" :md="6">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        min-width="290"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Date"
            prepend-inner-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          no-title
          v-model="date"
          @input="menu = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class InputDate extends Vue {
  private date: string = moment().format('YYYY-MM-DD');
  private menu: boolean = false;
}
</script>

<style scoped></style>
