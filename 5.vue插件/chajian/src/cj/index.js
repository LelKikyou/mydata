import xj from "@/cj/loading"
export default {
    install: function install(Vue) {
        var $vm = void 0;
        if (!$vm) {
            let a=xj;
            console.log(xj)
            debugger
            var LoadingPlugin = Vue.extend(xj);
            $vm = new LoadingPlugin().$mount();
            document.body.appendChild($vm.$el);
        }
        var loading = {
            show: function show(text) {
                $vm.show = true;
                $vm.text = text;
            },
            hide: function hide() {
                $vm.show = false;
            }
        };

        if (!Vue.$loading) {
            Vue.$loading = loading;
        }
        Vue.mixin({
            created: function created() {
                this.$loading = Vue.$loading;
            }
        });
    }
};