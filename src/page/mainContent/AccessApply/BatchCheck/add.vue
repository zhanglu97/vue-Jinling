<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="供应商：">
                            <el-input clearable class="input_right" placeholder="请输入供应商名称" v-model="addForm.addFormData1" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="物料类别：">
                            <el-select clearabl class="input_right" placeholder="请选择物料类别" v-model="addForm.addFormData2" :disabled="isdisabled">
                                <el-option label="原料" value="原料"></el-option>
                                <el-option label="辅料" value="辅料"></el-option>
                                <el-option label="包装材料" value="包装材料"></el-option>
                                <el-option label="试剂" value="试剂"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData3" label="物料名称：">
                            <el-input clearable class="input_right" placeholder="请输入物料名称" v-model="addForm.addFormData3" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="等级：">
                            <el-select clearabl class="input_right" placeholder="请选择等级" v-model="addForm.addFormData4" :disabled="isdisabled">
                                <el-option label="A" value="A"></el-option>
                                <el-option label="B" value="B"></el-option>
                                <el-option label="C" value="C"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData5" label="批次号：">
                            <el-input clearable class="input_right" placeholder="请输入批次号" v-model="addForm.addFormData5" :disabled="isdisabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData6" label="申请人：">
                            <el-input clearable class="input_right" placeholder="请输入申请人" v-model="addForm.addFormData6" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData7" label="申请日期：">
                            <el-date-picker type="date" clearable class="input_right" placeholder="请选择申请日期" v-model="addForm.addFormData7"  :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" label="检验人：">
                            <el-input clearable class="input_right" placeholder="请输入检验人" v-model="addForm.addFormData8" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData9" label="检验日期：">
                            <el-date-picker type="date" clearable class="input_right" placeholder="请选择检验日期" v-model="addForm.addFormData9"  :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData10" label="状态：">
                            <el-select clearabl class="input_right" placeholder="请选择状态" v-model="addForm.addFormData10" :disabled="isdisabled">
                                <el-option label="未提交" value="未提交"></el-option>
                                <el-option label="审计中" value="审计中"></el-option>
                                <el-option label="现场审计" value="现场审计"></el-option>
                                <el-option label="驳回" value="驳回"></el-option>
                                <el-option label="合格" value="合格"></el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                </el-row>
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
            },
            rules: {
                addFormData1: [
					{ required: true, message: "请输入供应商名称", trigger: "blur", },
				],
                addFormData2: [
					{ required: true, message: "请选择物料类别", trigger: "change", },
				],
                addFormData3: [
					{ required: true, message: "请输入物料名称", trigger: "blur", },
				],
                addFormData4: [
					{ required: true, message: "请选择等级", trigger: "change", },
				],
                addFormData5: [
					{ required: true, message: "请输入批次号", trigger: "blur", },
				],
                addFormData6: [
					{ required: true, message: "请输入申请人", trigger: "blur", },
				],
                addFormData7: [
					{ required: true, message: "请选择申请日期", trigger: "blur", },
				],
                addFormData8: [
					{ required: true, message: "请输入检验人", trigger: "change", },
				],
                addFormData9: [
					{ required: true, message: "请选择检验日期", trigger: "change", },
				],
                addFormData10: [
					{ required: true, message: "请选择状态", trigger: "change", },
				],
            }
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

</style>
