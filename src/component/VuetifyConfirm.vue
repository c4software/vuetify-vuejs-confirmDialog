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
        <v-btn color="red" @click="() => this.$emit('cancelAction')" flat>{{cancelText}}</v-btn>
        <v-btn color="green" @click="() => this.$emit('confirmAction')" flat>{{confirmText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ["title", "text", "cancelText", "confirmText", "value"]
  }
</script>
