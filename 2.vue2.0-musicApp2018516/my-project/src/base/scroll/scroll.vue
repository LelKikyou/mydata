<template>
    <div ref="wrapper" class="scroll">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        }
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return;
            }
            this.scorll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click:this.click
            });
        },
        enable() {
            this.scorll && this.scorll.enable();
        },
        disable() {
            this.scorll && this.scorll.disable();
        },
        refresh() {
            this.scorll && this.scorll.refresh();
        }
    },
    mounted() {
        this.$nextTick(function() {
            this._initScroll();
        });
    },
    watch: {
        data() {
            this.$nextTick(function() {
                this.refresh();
            });
        }
    }
};
</script>
<style scoped>
.scroll {
    width: 100%;
    height: 100%;
}
</style>