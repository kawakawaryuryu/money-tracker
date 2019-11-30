<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    transition="dialog-bottom-transition"
    hide-overlay
  >
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-card-title>
            <span class="headline">Input expense</span>
          </v-card-title>
        </v-row>
        <InputAmount></InputAmount>
        <InputDate></InputDate>
        <InputContent></InputContent>
        <v-row row>
          <v-row justify="center">
            <v-btn text @click="cancel()">Cancel</v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn text @click="save()">Save</v-btn>
          </v-row>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CLOSE_INPUT_DIALOG } from '@/mutation-types';
import InputAmount from '@/components/input/amount/InputAmount.vue';
import InputDate from '@/components/input/date/InputDate.vue';
import InputContent from '@/components/input/content/InputContent.vue';

@Component({
  components: {
    InputAmount,
    InputDate,
    InputContent
  }
})
export default class Input extends Vue {
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

<style scoped></style>
