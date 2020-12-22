<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="物料名称：">
                            <el-input clearable class="input_right" placeholder="请输入物料名称" v-model="addForm.addFormData1" :disabled="isdisabled"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="mine-add" v-show="!isdisabled">
                    <span class="el-icon-circle-plus" @click="addTable"></span>
                    <span class="el-icon-remove-outline" @click.stop="deleteTable"></span>
                </div>
                <div class="tableList">
                    <table border="1">
                        <tr>
                            <th width="50"></th><th width="200">检项名称</th><th>标准内容</th>
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
                            <td width="200"><el-input clearable v-model="item.table1" placeholder="" :disabled="isdisabled"></el-input></td>
                            <td><el-input clearable v-model="item.table2" placeholder="" :disabled="isdisabled"></el-input></td>
                        </tr>
                    </table>
                </div>
            </el-form>
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
                { list:false,table1: '',table2: '' },
            ],
            addForm: {
                addFormData1: '',
            },
            rules: {
				addFormData1: [
					{ required: true, message: "请输入物料名称", trigger: "blur", },
				],
            },
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '' })
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
                ...this.addForm,
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
