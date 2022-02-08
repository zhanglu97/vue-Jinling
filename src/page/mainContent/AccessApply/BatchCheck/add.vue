<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row>
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
