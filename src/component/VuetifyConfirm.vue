<template>
  <v-dialog v-model="value" max-width="500px" persistent @keydown.esc="cancelAction()">
    <v-card>
      <v-card-title class="headline">
        {{title}}
      </v-card-title>
      <v-card-text>
        {{text}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" v-if="!this.loading" @click="cancelAction" text :loading="this.loading">{{cancelText}}</v-btn>
        <v-btn color="green" @click="confirmAction" text :loading="this.loading">{{confirmText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["title", "text", "cancelText", "confirmText", "value"],
  data() {
    return {
      loading: false
    };
  },
  watch: {
    value: function() {
      this.resetState();
    }
  },
  methods: {
    resetState() {
      this.loading = false;
    },
    confirmAction() {
      this.loading = true;
      this.$emit("confirmAction");
    },
    cancelAction() {
      this.loading = true;
      this.$emit("cancelAction");
    }
  }
};
</script>
