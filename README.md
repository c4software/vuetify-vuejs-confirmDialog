# vuetify-vuejs-loader

[![npm version](https://badge.fury.io/js/vuetify-vuejs-confirmdialog.svg)](https://www.npmjs.com/package/vuetify-vuejs-confirmdialog)

Vuetify VueJS confirmation dialog Component.

## Installation

```sh
npm install vuetify-vuejs-confirmdialog --save
```

## Usage

```vue
<template>
  <confirmDialog
    v-model="showConfirm"
    title="Are you sure ?"
    text="Warning ! This action is irreversible
    cancelText="Nope"
    confirmText="Lets go"
    v-on:cancelAction="() => this.showConfirm = false"
    v-on:confirmAction="() => this.showConfirm = false"
  />
</template>

<script>
  import Vue from 'vue';
  import confirmDialog from 'vuetify-vuejs-confirmdialog';
  Vue.use(confirmDialog);

  export default {
    name: 'example'
    data(){
      return {
        "showConfirm": true
      }
    }
  }
</script>
```
