<template>
  <v-container class="pa-0" fluid>
    <v-card>
      <v-card-title>Add Testcases</v-card-title>

      <v-card-text>
        <v-textarea outlined v-model="inputData" no-resize label="sample input"></v-textarea>

        <v-textarea outlined v-model="expectedData" no-resize label="expected output"></v-textarea>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="mr-2 mb-2" @click="add">add</v-btn>
        <v-btn class="mr-2 mb-2" @click="close">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    add: function() {

      this.$store.state.activeCodeFile.addTestCase(
        this.inputData.trim(),
        this.expectedData.trim()
      );

      this.inputData = "";
      this.expectedData = "";
    },

    close: function() {
      this.$store.commit("changeAddTestCaseDialogState");
    }
  },

  data() {
    return {
      inputData: "",
      expectedData: ""
    };
  }
};
</script>