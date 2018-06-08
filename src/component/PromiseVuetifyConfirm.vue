<template>
    <confirmDialog
        :value="state.isOpen"
        :title="state.title"
        :text="state.text"
        :cancelText="state.cancelText"
        :confirmText="state.confirmText"
        v-on:cancelAction="() => this.emmitClose(false)"
        v-on:confirmAction="() => this.emmitClose(true)"
    />
</template>

<script>
  export default {
    name: 'PromiseVuetifyConfirm',
    data(){
      return {
        state: {
          isOpen: false,
          title: "",
          text: "",
          cancelText: "",
          confirmText: "",
          promiseResolver: undefined,
          promiseRejecter: undefined
        }
      }
    },
    methods: {
      commit: function(newState) {
        this.state = newState;
      },
      emmitClose: function(state){
        if(this.state.promiseResolver){
          this.state.promiseResolver(true);
          this.state.isOpen = false;
        }
      }
    }
  }
</script>