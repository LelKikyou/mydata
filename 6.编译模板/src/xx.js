export default {
    install: function install(Vue) {
        var h = this.$createElement;

        var $vm = void 0;
        if (!$vm) {
            var LoadingPlugin = Vue.extend({
                name: "loading",
                data: function data() {
                    return {
                        text: "loading",
                        show: false
                    };
                },
                render(){
                    return     <div class="loading" v-if="show" v-text="text">
                    </div>
                }

            });
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
}
