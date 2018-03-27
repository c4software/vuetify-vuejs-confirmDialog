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
        <v-btn color="red" @click="cancelAction" flat :loading="this.loading">{{cancelText}}</v-btn>
        <v-btn color="green" @click="confirmAction" flat :loading="this.loading">{{confirmText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ["title", "text", "cancelText", "confirmText", "value"],
    data(){
      return {
        loading: false,
      }
    },
    watch:{
      value: function(){
        this.resetState();
      }
    },
    methods: {
      resetState(){
        this.loading = false;
      },
      confirmAction(){
        this.loading = true;
        this.$emit('confirmAction')
      },
      cancelAction(){
        this.loading = true;
        this.$emit('cancelAction');
      }
    }
  }
</script>
