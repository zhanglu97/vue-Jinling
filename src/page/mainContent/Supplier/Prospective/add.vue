<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
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
                        <el-form-item class="formList" prop="addFormData4" label="物料编码：">
                            <el-input clearable class="input_right" placeholder="请输入物料编码" v-model="addForm.addFormData4" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData5" label="等级：">
                            <el-select clearabl class="input_right" placeholder="请选择等级" v-model="addForm.addFormData5" :disabled="isdisabled">
                                <el-option label="A" value="A"></el-option>
                                <el-option label="B" value="B"></el-option>
                                <el-option label="C" value="C"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData6" label="规格：">
                            <el-input clearable class="input_right" placeholder="请输入规格" v-model="addForm.addFormData6" :disabled="isdisabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="供应商：">
                            <el-input clearable class="input_right" placeholder="请输入供应商名称" v-model="addForm.addFormData1" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData7" label="类别：">
                            <el-select clearabl class="input_right" placeholder="请选择类别" v-model="addForm.addFormData7" :disabled="isdisabled">
                                <el-option label="生产商" value="生产商"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" label="状态：">
                            <el-select clearabl class="input_right" placeholder="请选择状态" v-model="addForm.addFormData8" :disabled="isdisabled">
                                <el-option label="不合格" value="不合格"></el-option>
                                <el-option label="合格" value="合格"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" label="状态：">
                            <el-select clearabl class="input_right" placeholder="请选择状态" v-model="addForm.addFormData8" :disabled="isdisabled">
                                <el-option label="不合格" value="不合格"></el-option>
                                <el-option label="合格" value="合格"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData9" label="资质时效：">
                            <el-select clearabl class="input_right" placeholder="请选择资质时效" v-model="addForm.addFormData9" :disabled="false">
                                <el-option label="有效" value="有效"></el-option>
                                <el-option label="已过期" value="已过期"></el-option>
                                <el-option label="即将过期" value="即将过期"></el-option>
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
            },
            rules: {

            }
        }
    },
    methods: {
        
    },
    mounted() {
        this.isdisabled = false
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/style/dialog.scss";
    
</style>
