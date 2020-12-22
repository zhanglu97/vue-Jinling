<template>
    <div class="Examine">
        <div>
            <el-col :span="5"><div @click="getshow(1)" :class="{active:shows == 1}" class="MenuList left">准入审批</div></el-col>
            <el-col :span="5"><div @click="getshow(2)" :class="{active:shows == 2}" class="MenuList middle">动态审批</div></el-col>
            <el-col :span="5"><div @click="getshow(3)" :class="{active:shows == 3}" class="MenuList right">定期审批</div></el-col>
            <el-col :span="5"><div @click="getshow(4)" :class="{active:shows == 4}" class="MenuList right">质量标准</div></el-col>
            <el-col :span="4"><div @click="getshow(5)" :class="{active:shows == 5}" class="MenuList right">物料</div></el-col>
            <div class="clearBoth"></div>
        </div>
        <div class="Examine-body">
            <Admit v-if="shows == 1"></Admit>
            <Dynamic v-if="shows == 2"></Dynamic>
            <Regular v-if="shows == 3"></Regular>
            <QualitStandard v-if="shows == 4"></QualitStandard>
            <MaterialManage v-if="shows == 5"></MaterialManage>
        </div>
    </div>
</template>

<script>
import Admit from './Admit/Index'
import Dynamic from './Dynamic/Index'
import Regular from './Regular/Index'
import QualitStandard from './QualitStandard/Index'
import MaterialManage from './MaterialManage/Index'
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
        MaterialManage,
        Admit,
        Dynamic,
        Regular,
        QualitStandard,
    }
};
</script>

<style lang="scss" scoped>
.Examine {
    margin: 0 auto;
    width: 100%;margin-bottom: 15px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 0;
    .MenuList {
        height: 35px;
        line-height: 33px;
        float: left;
        text-align: center;
        width: 100%;
        background: #f7f7f7;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        border-top: 2px solid #f7f7f7;
        border-bottom: 1px solid #e6e6e6;
        &:hover {
            transition: all .3s;
            color: #34BFC6;
            background: #fff;
            border-top: 2px solid #fff;
        }
        &.active {
            color: #34BFC6;
            transition: all .3s;
            background: #fff;
            border-top: 2px solid #34BFC6;
            border-bottom: 1px solid #fff;
        }
        &.middle {
            border-left: 1px solid #e6e6e6;
            border-right: 1px solid #e6e6e6;
        }
    }
    .Examine-body {
        padding-top: 15px;
    }
}
</style>