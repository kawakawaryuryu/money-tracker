<template>
  <v-dialog
      v-model="dialog"
  >
    <v-card>
      <v-container>
        <v-layout justify-center>
          <v-card-title>
            <span class="headline">Input expense</span>
          </v-card-title>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6>
            <v-text-field
                label="Amount"
                type="number"
                prefix="¥"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6>
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
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
              <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6>
            <v-text-field
                label="Content"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row justify-center>
          <v-flex xs6 sm4 md2>
            <v-btn flat @click="cancel()">Cancel</v-btn>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <v-btn flat @click="save()">Save</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CLOSE_INPUT_DIALOG } from '@/mutation-types';

@Component
export default class Input extends Vue {
  private date = new Date().toISOString().substr(0, 10);
  private menu: boolean = false;

  public get dialog(): boolean {
    return this.$store.state.inputDialog;
  }

  public cancel() {
    this.closeDialog();
  }

  public save() {
    this.closeDialog();
  }

  private closeDialog() {
    this.$store.commit(CLOSE_INPUT_DIALOG);
  }
}
</script>

<style scoped>

</style>
