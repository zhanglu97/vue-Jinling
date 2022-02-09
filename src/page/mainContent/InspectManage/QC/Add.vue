<template>
    <div class="addProject UserAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="请检部门：">
                            <el-input clearable class="input_right" placeholder="请输入请检部门" v-model="addForm.addFormData1" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="请检人：">
                            <el-input clearable class="input_right" placeholder="请输入请检人" v-model="addForm.addFormData2" :disabled="isdisabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData3" label="检验号：">
                            <el-input clearable class="input_right" placeholder="请输入检验号" v-model="addForm.addFormData3" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="请检日期：">
                            <el-date-picker type="date" placeholder="请选择请检日期" value-format="yyyy-MM-dd" v-model="addForm.addFormData4" :disabled="isdisabled"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="formList" prop="addFormData5" label="检验目的：">
                    <el-input clearable class="input_right" placeholder="请输入检验目的" v-model="addForm.addFormData5" :disabled="isdisabled"></el-input>
                </el-form-item>
                <el-form-item class="formList" prop="addFormData6" label="检验依据：">
                    <el-input clearable class="input_right" placeholder="请输入检验依据" v-model="addForm.addFormData6" :disabled="isdisabled"></el-input>
                </el-form-item>
                <el-row :gutter="20" style="margin-top: 40px">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData7" label="检验类别：">
                            <el-select clearable class="input_right" placeholder="请选择检验类别" v-model="addForm.addFormData7" :disabled="isdisabled" @change="typeChange">
                                <el-option label="入库批检" value="入库批检"></el-option>
                                <el-option label="准入样检" value="准入样检"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" :label="istype ? '入库批号：' : '申请号：'">
                            <el-input clearable class="input_right" :placeholder="istype ? '请输入入库批号' : '请输入申请号'" v-model="addForm.addFormData8" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData9" label="包装规格：">
                            <el-input clearable class="input_right" placeholder="请输入包装规格" v-model="addForm.addFormData9" :disabled="isdisabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList"></el-form-item>
                        <el-form-item class="formList" prop="addFormData10" label="批量：" v-if="istype">
                            <el-input clearable class="input_right" placeholder="请输入批量" v-model="addForm.addFormData10" :disabled="isdisabled"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" v-else></el-form-item>
                        <el-form-item class="formList" prop="addFormData11" label="抽检数量：">
                            <el-input clearable class="input_right" placeholder="请输入抽检数量" v-model="addForm.addFormData11" :disabled="isdisabled"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="formList"> 
                    <span class="search_left">检项：</span>
                    <el-checkbox-group  class="input_right jianxiang" v-model="addForm.addFormData13" :disabled="isdisabled">
                        <el-checkbox v-for="(item, index) in addForm.addFormData12" :key="index" :label="item.label">
                            <span class="label">{{ item.label }}</span>
                            <span>{{ item.txt }}</span>
                        </el-checkbox>
                    </el-checkbox-group>
                </div>
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
            istype: true,
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
                addFormData13: [],
                addFormData12: [
                    { label:'性状', txt: '本品为白色' },
                    { label:'溶出度', txt: '1小时，多组%/平均%' },
                    { label:'含量测定', txt: '00.0%' },
                    { label:'黏度', txt: '00.0%' },
                ]
            },
            rules: {
                addFormData1:[
                    { required: true, message: '请输入请检部门', trigger: 'blur' },
                ],
                addFormData2:[
                    { required: true, message: '请输入请检人', trigger: 'blur' },
                ],
                addFormData3:[
                    { required: true, message: '请输入检验号', trigger: 'blur' },
                ],
                addFormData4:[
                    { required: true, message: '请选择请检日期', trigger: 'change' },
                ],
                addFormData5:[
                    { required: true, message: '请输入检验目的', trigger: 'blur' },
                ],
                addFormData6:[
                    { required: true, message: '请输入检验依据', trigger: 'blur' },
                ],
                addFormData7:[
                    { required: true, message: '请选择检验类别', trigger: 'change' },
                ],
                addFormData8:[
                    { required: true, message: '请输入入库批号', trigger: 'blur' },
                ],
                addFormData9:[
                    { required: true, message: '请输入包装规格', trigger: 'blur' },
                ],
                addFormData10:[
                    { required: true, message: '请输入批量', trigger: 'blur' },
                ],
                addFormData11:[
                    { required: true, message: '请输入抽检数量', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        typeChange(val) {
            if( val == '入库批检' ) {
                this.istype = true
            } else {
                this.istype = false
            }
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