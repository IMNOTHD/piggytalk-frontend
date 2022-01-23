const notifyPlugin = {
    install: (Vue, { store }) => {
        if (!store) {
            throw new Error("Please provide vuex store.");
        }
        Vue.prototype.$notify = {
            showMessage: function({ content = "", color = "", timeout = 6000 }) {
                store.commit(
                    "notify/showMessage",
                    { content, color, timeout },
                    { root: true }
                );
            },
            error: function(content, timeout) {
                store.commit(
                    "notify/showMessage",
                    { content, color: "error", timeout },
                    { root: true }
                );
            },
            warning: function(content, timeout) {
                store.commit(
                    "notify/showMessage",
                    { content, color: "warning", timeout },
                    { root: true }
                );
            },
            info: function(content, timeout) {
                store.commit(
                    "notify/showMessage",
                    { content, color: "info", timeout },
                    { root: true }
                );
            }
        };
    }
};
export default notifyPlugin;
