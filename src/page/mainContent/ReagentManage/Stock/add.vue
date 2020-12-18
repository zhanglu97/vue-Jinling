<template>
    <div class="addProject">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            {{ type == 'one' ? '单品' : '批量' }}入库
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item class="formList" prop="addFormData1" label="入库人：">
                            <el-input clearable class="input_right" placeholder="请输入入库人" v-model="addForm.addFormData1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item class="formList" prop="addFormData1" label="入库日期：">
                            <el-date-picker clearable type="date" placeholder="请选择入库日期" v-model="addForm.addFormData2"></el-date-picker>
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
                            <th width="50"></th><th width="150">试剂名称</th><th>规格</th><th>纯度</th><th>功能</th><th>单位</th><th>入库数量</th><th>批次号</th><th>备注</th>
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
                            <td width="150"><el-input clearable v-model="item.receiveList" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table2" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table3" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table4" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table5" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table6" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table7" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table8" placeholder=""></el-input></td>
                        </tr>
                    </table>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    props: ['type', 'receiveList'],
    data () {
        return {
            isdisabled: false,
            tableData:[
                { list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '',table8: '' },
            ],
            addForm: {
                addFormData1: '',
                addFormData2: '',
            },
            rules: {
				addFormData1: [
					{ required: true, message: "请输入入库人", trigger: "blur", },
				],
				addFormData2: [
					{ required: true, message: "请选择入库日期", trigger: "change", },
				],
            },
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '',table8: '' })
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
        if(this.type == 'one') {
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
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 140px;
        margin: 0 auto;
        padding-bottom: 10px;
        .line1 {
            width: 30px;
            height: 1px;
            position: absolute;
            left: -40px;
            top: 14px;
            background:  #34bfc6;
        }
        .line2 {
            width: 30px;
            height: 1px;
            position: absolute;
            right: -40px;
            top: 14px;
            background:  #34bfc6;
        }
    }
}
</style>
