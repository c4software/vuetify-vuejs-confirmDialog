# vuetify-vuejs-confirmdialog

[![npm version](https://badge.fury.io/js/vuetify-vuejs-confirmdialog.svg)](https://www.npmjs.com/package/vuetify-vuejs-confirmdialog)

Vuetify VueJS confirmation dialog Component with Promise support.

## Installation

```sh
npm install vuetify-vuejs-confirmdialog --save
```

## Usage with Vuetify-Loader (aka a-la-carte)

Recently the Vuetify plugin for vue-cli enable A-la-carte by default.

### Importing every components

Since Vuetify-Loader didn't « scan » correctly usage in external dependencies you have to manually import components needed…

```javascript
import Vue from "vue";
import vuetifyLoader from "vuetify-vuejs-loader";
import Vuetify;
import {VDialog,VCard,VCardText,VBtn,VSpacer,VCardTitle,VCardActions} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {VDialog,VCard,VCardText,VBtn,VSpacer,VCardTitle,VCardActions},
});
Vue.use(vuetifyLoader);
```

## Quick Promise Usage

```javascript
this.$vuetifyConfirmDialog
  .open("Example Title", "Are you sure ?", "Cancel", "Confirm")
  .then(state => {
    console.log(state);
  });
```

## Detailed Promise Usage

Enable the plugin in your Project

```javascript
import Vue from "vue";
import confirmDialog from "vuetify-vuejs-confirmdialog";
Vue.use(confirmDialog, {
  // assuming `vuetify` is a Vuetify instance created before
  context: { vuetify },
});

// …
```

Use the plugin in any Vue file :

```vue
<template>
…
</template>

<script>
export default {
  name: "…",
  // …
  methods: {
    sample: function() {
      this.$vuetifyConfirmDialog
        .open("Example Title", "Are you sure ?", "Cancel", "Confirm", "red", "green")
        .then(state => {
          console.log(state);
        });
    }
  }
};
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
    cancelColor="red"
    confirmColor="green"
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

### Optional props:

**cancelColor**: String

**confirmColor**: String
