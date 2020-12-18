<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" prop="addFormData1" label="试剂编码：">
                    <el-input clearable class="input_right" placeholder="请输入试剂编码" v-model="addForm.addFormData1"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData2" label="试剂名称：">
                    <el-input clearable class="input_right" placeholder="请输入试剂名称" v-model="addForm.addFormData2"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData3" label="规格：">
                    <el-select clearable class="input_right" placeholder="请选择规格" v-model="addForm.addFormData3">
                        <el-option label="基准" value="基准"></el-option>
                        <el-option label="实验" value="实验"></el-option>
                        <el-option label="指示" value="指示"></el-option>
                        <el-option label="生化" value="生化"></el-option>
                        <el-option label="生物染色" value="生物染色"></el-option>
                        <el-option label="光谱" value="光谱"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData4" label="纯度：">
                    <el-select clearable class="input_right" placeholder="请选择纯度" v-model="addForm.addFormData4">
                        <el-option label="优级纯GR" value="优级纯GR"></el-option>
                        <el-option label="分析纯AR" value="分析纯AR"></el-option>
                        <el-option label="化学纯CP" value="化学纯CP"></el-option>
                        <el-option label="实验试剂-LR" value="实验试剂-LR"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData5" label="等级：">
                    <el-select clearable class="input_right" placeholder="请选择等级" v-model="addForm.addFormData5">
                        <el-option label="一级" value="一级"></el-option>
                        <el-option label="二级" value="二级"></el-option>
                        <el-option label="三级" value="三级"></el-option>
                        <el-option label="四级" value="四级"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData6" label="功能：">
                    <el-select clearable class="input_right" placeholder="请选择功能" v-model="addForm.addFormData6">
                        <el-option label="乳化" value="乳化"></el-option>
                        <el-option label="添加剂" value="添加剂"></el-option>
                        <el-option label="消毒" value="消毒"></el-option>
                        <el-option label="营养" value="营养"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData7" label="计量单位：">
                    <el-select clearable class="input_right" placeholder="请选择计量单位" v-model="addForm.addFormData7">
                        <el-option label="ml" value="ml"></el-option>
                        <el-option label="g" value="g"></el-option>
                        <el-option label="kg" value="kg"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData8" label="整件待还：">
                    <el-checkbox class="input_right" v-model="addForm.addFormData8"></el-checkbox>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    props: ['titleTxt'],
    data () {
        return {
            addForm: {
                addFormData1: '',
                addFormData2: '',
                addFormData3: '',
                addFormData4: '',
                addFormData5: '',
                addFormData6: '',
                addFormData7: '',
                addFormData8: false,
            },
            rules: {
				addFormData1: [
					{ required: true, message: "请输入试剂编码", trigger: "blur", },
				],
				addFormData2: [
					{ required: true, message: "请输入试剂名称", trigger: "blur", },
				],
				addFormData3: [
					{ required: true, message: "请选择规格", trigger: "change", },
				],
				addFormData4: [
					{ required: true, message: "请选择纯度", trigger: "change", },
				],
				addFormData5: [
					{ required: true, message: "请选择等级", trigger: "change", },
				],
				addFormData6: [
					{ required: true, message: "请选择功能", trigger: "change", },
				],
				addFormData7: [
					{ required: true, message: "请选择计量单位", trigger: "change", },
				],
				addFormData8: [
					{ required: true, message: "是否整件待还", trigger: "change", },
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
    mounted() {
        
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/style/dialog.scss";
</style>
