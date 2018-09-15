<template>
    <div class="headTab">
        <Tag @click.native="linkUrl('shzxjzpt',-2)" :class="{'active':-2===active}">上海执行矫治平台</Tag>
        <Tag @click.native="linkUrl('znss',-1)" :class="{'active':-1===active}">智能搜索</Tag>
        <Tag v-for="(item,index) in tabData" :class="{'active':index===active}" @click.native="linkUrl(item.url,index)"
             closable @on-close="handleClose(index)">
            {{item.name}}
        </Tag>
    </div>
</template>

<script>
    export default {
        name: "headTab",
        props: {
            tabData: Array
        },
        data() {
            return {
                active: -2
            }
        },
        methods: {
            handleClose(index) {
                this.tabData.splice(index, 1);
                if (index === this.active) {
                    this.active--;
                    this.$router.push({
                        name: index === 0 ? 'znss' : this.tabData[index - 1].url
                    });
                } else if (index < this.active) {
                    this.active--;
                }
            },
            linkUrl(name, index) {
                this.$router.push({
                    name: name,
                });
                this.active = index;
            }
        }
    }
</script>

<style>
    .headTab {
        width: 100%;
        height: 70px;
        background-color: #111516;
    }

    .headTab > .ivu-tag {
        height: 100%;
        margin: 0;
        line-height: 70px;
        padding: 0 30px;
        background-color: #111516;
        border: 1px solid #666;
        border-bottom: none;
        border-radius: 0;
    }

    .headTab > .ivu-tag.active {
        background-color: #2d8562;
    }

    .headTab > .ivu-tag:hover {
        opacity: initial;
    }

    .headTab > .ivu-tag > .ivu-tag-text {
        color: #fff;
        font-size: 18px;
    }

    .headTab > .ivu-tag > .ivu-icon {
        color: #fff;
        font-size: 20px !important;
        margin-right: -16px;
    }
</style>