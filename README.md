# vuetify-vuejs-confirmdialog

[![npm version](https://badge.fury.io/js/vuetify-vuejs-confirmdialog.svg)](https://www.npmjs.com/package/vuetify-vuejs-confirmdialog)

Vuetify VueJS confirmation dialog Component with Promise support.

## Installation

```sh
npm install vuetify-vuejs-confirmdialog --save
```

## Quick Promise Usage

```javascript
this.$vuetifyConfirmDialog.open("Example Title", "Are you sure ?", "Cancel", "Confirm").then(state => {
  console.log(state);
});
```

## Detailed Promise Usage

Enable the plugin in your Project

```javascript
<script>
  import Vue from 'vue';
  import confirmDialog from 'vuetify-vuejs-confirmdialog';
  Vue.use(confirmDialog);

  // …
</script>
```

Use the plugin in any Vue file :

```vue
<template>
…
</template>

<script>
export default{
  name: "…",
  // …
  methods: {
    sample: function(){
      this.$vuetifyConfirmDialog.open("Example Title", "Are you sure ?", "Cancel", "Confirm").then(state => {
        console.log(state);
      });
    }
  }
}
</script>

```

## Component Usage

```vue
<template>
  <confirmDialog
    v-model="showConfirm"
    title="Are you sure ?"
    text="Warning ! This action is irreversible"
    cancelText="Cancel"
    confirmText="Confirm"
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
