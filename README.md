# vuetify-vuejs-loader

[![npm version](https://badge.fury.io/js/vuetify-vuejs-confirmDialog.svg)](https://www.npmjs.com/package/vuetify-vuejs-confirmDialog)

Vuetify VueJS confirmation dialog Component.

## Installation

```sh
npm install vuetify-vuejs-confirmDialog --save
```

## Usage

```vue
<template>
  <confirmDialog v-model="showConfirm" />
</template>

<script>
  import Vue from 'vue';
  import confirmDialog from 'vuetify-vuejs-confirmDialog';
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
