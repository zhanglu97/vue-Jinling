<template>
    <div class="addProject">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            试剂{{ type == 'one' ? '单品' : '批量' }}发放
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item class="formList" prop="addFormData1" label="领用人：">
                            <el-input clearable class="input_right" placeholder="请输入领用人" v-model="addForm.addFormData1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item class="formList" prop="addFormData1" label="领用日期：">
                            <el-date-picker clearable type="date" placeholder="请选择领用日期" v-model="addForm.addFormData2"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item class="formList" prop="addFormData1" label="状态：">
                            <el-select clearable v-model="addForm.addFormData3" placeholder="请选择状态">
                                <el-option label="已领" value="已领"></el-option>
                                <el-option label="待还" value="待还"></el-option>
                            </el-select>
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
                            <th width="50"></th><th width="150">试剂名称</th><th>规格</th><th>纯度</th><th>功能</th><th>库存余量</th><th>批号</th><th>领用量</th><th>领用码</th><th>整件待还</th><th>备注</th>
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
                            <td><el-input clearable v-model="item.table9" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table10" placeholder=""></el-input></td>
                        </tr>
                    </table>
                </div>
                <p class="-manage">
                    管理：<span>许好</span><span>2020-10-09  14:00</span>      
                </p>
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
                { list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '',table8: '',table9: '',table10: '' },
            ],
            addForm: {
                addFormData1: '',
                addFormData2: '',
                addFormData3: '',
            },
            rules: {
				addFormData1: [
					{ required: true, message: "请输入物料名称", trigger: "blur", },
				],
				addFormData2: [
					{ required: true, message: "请选择领用日期", trigger: "change", },
				],
				addFormData3: [
					{ required: true, message: "请选择状态", trigger: "change", },
				],
            },
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '',table8: '',table9: '',table10: '' })
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
    
    .-manage {
        color: #606266;
        height: 40px;
        line-height: 40px;
        span {
            margin-right: 30px;
        }
    }
}
</style>
