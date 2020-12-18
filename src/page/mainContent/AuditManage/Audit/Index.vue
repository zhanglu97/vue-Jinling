<template>
    <div class="Audit">
        <el-tabs v-model="activeName">
            <el-tab-pane name="1">
                <span slot="label"> 准入审计 <span class="label_num">2</span></span>
                <Admit></Admit>
            </el-tab-pane>
            <el-tab-pane name="2">
                <span slot="label"> 动态审计 </span>
                <Dynamic></Dynamic>
            </el-tab-pane>
            <el-tab-pane name="3">
                <span slot="label"> 定时审计 </span>
                <Time></Time>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Admit from './admit/admit'
import Dynamic from './dynamic/dynamic'
import Time from './time/time'
export default {
    data() {
        return {
            activeName: '1',
        }
    },
    methods: {
        
    },
    components: {
        Admit,
        Dynamic,
        Time,
    }
}
</script>

<style lang="scss" scoped>
.Audit {
    .label_num {
        color: #ffffff;
        background: #e82626;
        display: table-cell;
        width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 9px;
    }
}
</style>