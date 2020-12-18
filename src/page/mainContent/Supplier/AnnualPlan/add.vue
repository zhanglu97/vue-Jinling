<template>
    <div class="addProject">
        <h1>2020年度 供应商审核计划
            <p>质量标准文件 SMP-QA-007-08</p>
        </h1>
        <div class="addForm zll-form">
            <div class="mine-add" v-show="!isdisabled">
                <span class="el-icon-circle-plus" @click="addTable"></span>
                <span class="el-icon-remove-outline" @click.stop="deleteTable"></span>
            </div>
            <div class="tableList">
                <table border="1">
                    <tr>
                        <th width="50"></th><th>物料类别</th><th>物料代码</th><th>物料名称</th><th>供应商</th><th>类别</th><th>物料规格</th><th>剂型</th><th width="80">现场审计</th><th width="80">电询、传真、邮件往来</th><th width="80">网上查询</th><th>其他</th>
                    </tr>
                    <tr class="add_Table" v-for="(item, index) in tableData"  :key="index">
                        <td width="50">
                            <span class="checkStyle" @click="checkList(index)" v-show="!isdisabled">
                                <i class="el-icon-check" v-show="item.list"></i>
                                <i class="no-check" v-show="!item.list"></i>
                            </span>
                            <span class="checkStyle" v-show="isdisabled">
                                <i class="no-check"></i>
                            </span>
                        </td>
                        <td>
                            <el-select clearable v-model="item.table1" placeholder="">
                                <el-option label="原料" value="原料"></el-option>
                                <el-option label="辅料" value="辅料"></el-option>
                                <el-option label="包装材料" value="包装材料"></el-option>
                                <el-option label="试剂" value="试剂"></el-option>
                            </el-select>
                        </td>
                        <td><el-input clearable v-model="item.table2" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table3" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table4" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table5" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table6" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table7" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td width="80"><el-checkbox v-model="item.table8" :disabled="isdisabled"></el-checkbox></td>
                        <td width="80"><el-checkbox v-model="item.table9" :disabled="isdisabled"></el-checkbox></td>
                        <td width="80"><el-checkbox v-model="item.table10" :disabled="isdisabled"></el-checkbox></td>
                        <td><el-input clearable v-model="item.table11" placeholder="" :disabled="isdisabled"></el-input></td>
                    </tr>
                </table>
            </div>
            <el-row>
                <el-col :span="12">
                    <div class="bottom_liet">
                        <span class="left">计划：</span>
                        <span>许好</span>
                        <span>2020-10-09  14:00</span>      
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="bottom_liet">
                        <span class="left">审核：</span>
                        <span>缪主任</span>
                        <span>2020-10-09  14:00</span>      
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props: ['titleTxt'],
    data () {
        return {
            isdisabled: false,
            tableData:[
                { list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '',table8: false,table9: false,table10: false,table11: '' },
            ],
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '',table8: false,table9: false,table10: false,table11: '' })
        },
        checkList(index){
            this.tableData[index].list = !this.tableData[index].list;
        },
        deleteTable(){//删除table
            if(this.tableData.length == 1){
                this.$message.warning('不能少于一列!');
                return false
            }else{
                this.tableData = this.tableData.filter(e => {
                    return !e.list
                })
            }
        },
        setFormData(formName){
            let formdata = {
                'tableData': [...this.tableData]
            }
            this.$emit('addForm',formdata)
        },
    },
    mounted() {
        if(this.titleTxt == '查看') {
            this.isdisabled = true
        }else {
            this.isdisabled = false
        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/dialog.scss";
.addProject {
    h1 {
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        margin: 10px auto;
        p {
            color: #e82626;
            font-size: 12px;
            margin-top: 10px;
        }
    }
    .bottom_liet {
        height: 40px;
        line-height: 40px;
        .left {
            float: left;
            width: 60px;
        }
    }
}
</style>
