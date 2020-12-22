<template>
    <div class="addProject Stability">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="样品类别：">
                            <el-select clearable class="input_right" placeholder="请选择样品类别" v-model="addForm.addFormData1">
                                <el-option label="原料" value="原料"></el-option>
                                <el-option label="辅料" value="辅料"></el-option>
                                <el-option label="包装材料" value="包装材料"></el-option>
                                <el-option label="试剂" value="试剂"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="样品名称：">
                            <el-input clearable class="input_right" placeholder="请输入样品名称" v-model="addForm.addFormData2"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData3" label="批次号：">
                            <el-input clearable class="input_right" placeholder="请输入批次号" v-model="addForm.addFormData3"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList"></el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="包装规格：">
                            <el-input clearable class="input_right" placeholder="请输入包装规格" v-model="addForm.addFormData4"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData5" label="批取样数：">
                            <el-input clearable class="input_right" placeholder="请输入包装规格" v-model="addForm.addFormData5"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData8" label="贮存位置：">
                            <el-input clearable class="input_right" placeholder="请输入贮存位置" v-model="addForm.addFormData8"></el-input>
                        </el-form-item>
                        <el-form-item class="formList isimg" prop="addFormData7" label="贮存条件：">
                            <img src="@/assets/img/wendu.png" class="img-s">
                            <el-input clearable class="input_right" placeholder="请输入温度" v-model="addForm.addFormData7"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList"></el-form-item>
                        <el-form-item class="formList isimg shidu" prop="addFormData10" label="">
                            <img src="@/assets/img/shidu.png" class="img-s">
                            <el-input clearable class="input_right" placeholder="请输入湿度" v-model="addForm.addFormData10"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="formList" prop="addFormData9" label="包装密封：">
                    <el-input clearable class="input_right" placeholder="请输入包装密封" v-model="addForm.addFormData9"></el-input>
                </el-form-item>
                <div class="tableList">
                    <span class="search_left">考察项目：</span>
                    <table border="1">
                        <tr>
                            <th width="50"></th><th>项目名称</th><th>质量标准</th><th>考察结果</th>
                        </tr>
                        <tr class="add_Table" v-for="(item, index) in tableData2"  :key="index">
                            <td width="50">
                                <span class="checkStyle" @click="checkList(index)">
                                    <i class="el-icon-check" v-show="item.list"></i>
                                    <i class="no-check" v-show="!item.list"></i>
                                </span>
                            </td>
                            <td><el-input clearable v-model="item.table1" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table2" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table3" placeholder=""></el-input></td>
                        </tr>
                    </table>
                </div>
                <div class="kaocha">
                    <span class="search_left">考察时间：</span>
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="CheckAll">全选</el-checkbox>
                    <el-checkbox-group v-model="addForm.addFormData13">
                        <el-checkbox v-for="(item, index) in addForm.addFormData12" :key="index" :label="item">
                            {{ item }}
                        </el-checkbox>
                    </el-checkbox-group>
                </div>                    
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isIndeterminate: true,
            checkAll: false,
            addForm: {
                addFormData1: '',
                addFormData2: '',
                addFormData3: '',
                addFormData4: '',
                addFormData5: '',
                addFormData7: '',
                addFormData8: '',
                addFormData9: '',
                addFormData10: '',
                addFormData12: ['1个月','2个月', '3个月','6个月', '12个月','18个月','24个月','36个月', ],
                addFormData13: []
            },
            tableData2: [
                { table1:'性状', table2: '', table3: '' },
                { table1:'溶出度', table2: '', table3: '' },
                { table1:'含量测定', table2: '', table3: '' },
                { table1:'黏度', table2: '', table3: '' },
            ],
            rules: {
                addFormData1:[
                    { required: true, message: '请选择样品类别', trigger: 'change' },
                ],
                addFormData2:[
                    { required: true, message: '请输入样品名称', trigger: 'blur' },
                ],
                addFormData3:[
                    { required: true, message: '请输入批次号', trigger: 'blur' },
                ],
                addFormData4:[
                    { required: true, message: '请输入包装规格', trigger: 'blur' },
                ],
                addFormData5:[
                    { required: true, message: '请输入包装规格', trigger: 'blur' },
                ],
                addFormData7:[
                    { required: true, message: '请输入温度', trigger: 'blur' },
                ],
                addFormData8:[
                    { required: true, message: '请输入贮存位置', trigger: 'blur' },
                ],
                addFormData9:[
                    { required: true, message: '请输入包装密封', trigger: 'blur' },
                ],
                addFormData10:[
                    { required: true, message: '请输入湿度', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        CheckAll(val) {
            this.addForm.addFormData13 = val ? this.addForm.addFormData12 : [];
            this.isIndeterminate = false;
        },
        setFormData(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('addForm',this.addForm)
                }else {
                    return false
                }
            })
        },
    },
    mounted(){
        
    },
    components: {
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/dialog.scss";
.Stability {
    .tableList {
        margin: 15px 0;
        padding: 0;
    }
    .isimg {
        .img-s {
            float: left;
            width: 30px;
        }
        .input_right {
            width: calc(100% - 30px);
        }
    }
}
</style>