<template>
  <v-dialog v-model="value" max-width="500px">
    <v-card>
      <v-card-title class="headline">
        {{title}}
      </v-card-title>
      <v-card-text>
        {{text}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="cancelAction" flat :loading="this.cancelation">{{cancelText}}</v-btn>
        <v-btn color="green" @click="confirmAction" flat :loading="this.confirmation">{{confirmText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ["title", "text", "cancelText", "confirmText", "value"],
    data(){
      return {
        confirmation: false,
        cancelation: false,
      }
    },
    methods: {
      confirmAction(){
        this.confirmation = true;
        this.$emit('confirmAction')
      },
      cancelAction(){
        this.cancelation = true;
        this.$emit('cancelAction');
      }
    }
  }
</script>
