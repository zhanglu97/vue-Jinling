<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <div class="mine-add" v-show="!isdisabled">
                <span class="el-icon-circle-plus" @click="addTable"></span>
                <span class="el-icon-remove-outline" @click.stop="deleteTable"></span>
            </div>
            <div class="tableList">
                <table border="1">
                    <tr>
                        <th width="50"></th><th >物料类别</th><th>物料编码</th><th>物料名称</th><th>等级</th>
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
                        <td><el-input clearable v-model="item.table1" placeholder=""></el-input></td>
                        <td><el-input clearable v-model="item.table2" placeholder=""></el-input></td>
                        <td><el-input clearable v-model="item.table3" placeholder=""></el-input></td>
                        <td><el-input clearable v-model="item.table4" placeholder=""></el-input></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isdisabled: false,
            tableData:[
                { list:false,table1: '',table2: '',table3: '',table4: '' },
            ],
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '',table3: '',table4: '' })
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
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('addForm',formdata)
                }else {
                    return false
                }
            })
        },
    },
    mounted() {
        
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/style/dialog.scss";
    .form_left {
        width: 72px;
        height: 32px;
        line-height: 32px;
        text-align: right;
        display: inline-block;
        color: #606266;
        margin-top: 10px
    }
    .tableList {
        margin-top: 0px !important;
    }
</style>
