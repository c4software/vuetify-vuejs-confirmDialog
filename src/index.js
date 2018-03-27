import VuetifyConfirmDialog from './component/VuetifyConfirm';

export default {
    install(Vue) {
        Vue.component('confirmDialog', VuetifyConfirmDialog);
    },
};

export { VuetifyConfirmDialog };