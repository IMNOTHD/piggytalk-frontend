import {Vue as _Vue} from "vue/types/vue";

const notifyPlugin = {
    install: (Vue: typeof _Vue, {store}: { store: any }) => {
        if (!store) {
            throw new Error("Please provide vuex store.");
        }
        Vue.prototype.$Vnotify = {
            showMessage: function ({content = "", color = "", timeout = 6000}) {
                store.commit(
                    "notify/showMessage",
                    {content, color, timeout},
                    {root: true}
                );
            },
            error: function (content: any, timeout: any) {
                store.commit(
                    "notify/showMessage",
                    {content, color: "error", timeout},
                    {root: true}
                );
            },
            warning: function (content: any, timeout: any) {
                store.commit(
                    "notify/showMessage",
                    {content, color: "warning", timeout},
                    {root: true}
                );
            },
            info: function (content: any, timeout: any) {
                store.commit(
                    "notify/showMessage",
                    {content, color: "info", timeout},
                    {root: true}
                );
            }
        };
    }
};
export default notifyPlugin;
