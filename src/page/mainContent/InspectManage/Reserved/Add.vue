<template>
    <div class="addProject UserAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="产品名称：">
                            <el-input clearable class="input_right" placeholder="请输入产品名称" v-model="addForm.addFormData1" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="产品编码：">
                            <el-input clearable class="input_right" placeholder="请输入产品编码" v-model="addForm.addFormData2" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData3" label="包装规格：">
                            <el-input clearable class="input_right" placeholder="请输入包装规格" v-model="addForm.addFormData3" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="批次号：">
                            <el-input clearable class="input_right" placeholder="请输入批次号" v-model="addForm.addFormData4" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData5" label="生产日期：">
                            <el-date-picker type="date" placeholder="请选择生产日期" value-format="yyyy-MM-dd" v-model="addForm.addFormData5" :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData6" label="有效期：">
                            <el-date-picker type="date" placeholder="请选择有效期" value-format="yyyy-MM-dd" v-model="addForm.addFormData6" :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData7" label="贮存条件：">
                            <el-input clearable class="input_right" placeholder="请输入贮存条件" v-model="addForm.addFormData7" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" label="留样日期：">
                            <el-date-picker type="date" placeholder="请选择留样日期" value-format="yyyy-MM-dd" v-model="addForm.addFormData8" :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData9" label="贮存位置：">
                            <el-input clearable class="input_right" placeholder="请输入贮存位置" v-model="addForm.addFormData9" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData10" label="收样人：">
                            <el-input clearable class="input_right" placeholder="请输入收样人" v-model="addForm.addFormData10" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList"></el-form-item>
                        <el-form-item class="formList" prop="addFormData11" label="留样截止日期：">
                            <el-date-picker type="date" placeholder="请选择留样截止日期" value-format="yyyy-MM-dd" v-model="addForm.addFormData11" :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data(){
        return {
            isdisabled: false,
            addForm: {
                addFormData1: '',
                addFormData2: '',
                addFormData3: '',
                addFormData4: '',
                addFormData5: '',
                addFormData6: '',
                addFormData7: '',
                addFormData8: '',
                addFormData9: '',
                addFormData10: '',
                addFormData11: '',
            },
            rules: {
                addFormData1:[
                    { required: true, message: '请输入产品名称', trigger: 'blur' },
                ],
                addFormData2:[
                    { required: true, message: '请输入产品编码', trigger: 'blur' },
                ],
                addFormData3:[
                    { required: true, message: '请输入包装规格', trigger: 'blur' },
                ],
                addFormData4:[
                    { required: true, message: '请输入批次号', trigger: 'blur' },
                ],
                addFormData5:[
                    { required: true, message: '请选择生产日期', trigger: 'change' },
                ],
                addFormData6:[
                    { required: true, message: '请选择有效期', trigger: 'change' },
                ],
                addFormData7:[
                    { required: true, message: '请输入贮存条件', trigger: 'blur' },
                ],
                addFormData8:[
                    { required: true, message: '请选择留样日期', trigger: 'change' },
                ],
                addFormData9:[
                    { required: true, message: '请输入贮存位置', trigger: 'blur' },
                ],
                addFormData10:[
                    { required: true, message: '请输入收样人', trigger: 'blur' },
                ],
                addFormData11:[
                    { required: true, message: '请选择留样截止日期', trigger: 'change' },
                ],
            },
        }
    },
    methods: {
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
        if( this.title == '查看') {
            this.isdisabled = true
        }
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
</style>