<template>
    <div class="app-container WantChange">
        <div class="nav_tab">
            <div @click="getshow(1)" :class="{active:shows == 1}" class="MenuList left">全部申请</div>
            <div @click="getshow(2)" :class="{active:shows == 2}" class="MenuList middle">我的申请</div>
            <div @click="getshow(3)" :class="{active:shows == 3}" class="MenuList middle">审批</div>
            <div class="clearBoth"></div>
        </div>
        <div class="Examine-body">
            <all-apply v-if="shows == 1"></all-apply>
            <mine-apply v-if="shows == 2"></mine-apply>
            <approve v-if="shows == 3"></approve>
        </div>
    </div>
</template>

<script>
import AllApply from './AllApply/Index.vue';
import MineApply from './MineApply/Index.vue';
import Approve from './Approve/Index.vue';
export default {
    data() {
        return {
            shows: 1
        }
    },
    methods:{
        getshow(val) {
            this.shows = val
        },
    },
    components: {
       AllApply,
       MineApply,
       Approve
    }
};
</script>

<style lang="scss" scoped>
.WantChange {
    margin: 0 auto;
    width: 100%;margin-bottom: 15px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 0;
    .nav_tab {
        position: relative;
        &::after {
            content: ' ';
            width: calc(100% - 434px);
            height: 1px;
            background: #34BFC6;
            position: absolute;
            bottom: 0px;
            right: -15px;
        }
        &::before {
            content: ' ';
            width: 15px;
            height: 1px;
            background: #34BFC6;
            position: absolute;
            bottom: 0px;
            left: -15px;
        }
        .MenuList {
            height: 33px;
            line-height: 31px;
            float: left;
            text-align: center;
            width: 150px;
            color: #333;
            font-size: 14px;
            cursor: pointer;
            border: 1px solid #fff;
            border-bottom-color: #34BFC6;
            border-radius: 5px 5px 0 0;
            &:hover {
                transition: all .3s;
                color: #34BFC6;
                background: #fff;
            }
            &.active {
                color: #34BFC6;
                transition: all .3s;
                border-color: #34BFC6;
                border-bottom-color: #fff;
                box-shadow: 0px -5px 6px -5px #000;
            }
            
        }
    }
    .Examine-body {
        padding-top: 15px;
    }
}
</style>