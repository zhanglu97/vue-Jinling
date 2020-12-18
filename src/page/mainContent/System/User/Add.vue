<template>
    <div class="addProject UserAdd">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="部门：">
                            <el-select clearable v-model="addForm.addFormData2" placeholder="请选择部门">
                                <el-option label="质量部" value="质量部"></el-option>
                                <el-option label="生产部" value="生产部"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="组别：">
                            <el-input clearable class="input_right" placeholder="请输入组别" v-model="addForm.addFormData2"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData3" label="角色：">
                            <el-select clearable v-model="addForm.addFormData3" placeholder="请选择角色">
                                <el-option label="部长" value="部长"></el-option>
                                <el-option label="主任" value="主任"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="开户日期：">
                            <el-date-picker clearable type="date" placeholder="请选择开户日期" v-model="addForm.addFormData4"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData5" label="姓名：">
                            <el-input clearable class="input_right" placeholder="请输入姓名" v-model="addForm.addFormData5"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData6" label="用户名：">
                            <el-input clearable class="input_right" placeholder="请输入用户名" v-model="addForm.addFormData6"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData7" label="账号状态：">
                            <el-select clearable v-model="addForm.addFormData7" placeholder="请选择账号状态">
                                <el-option label="正常" value="正常"></el-option>
                                <el-option label="停用" value="停用"></el-option>
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
    data(){
        return {
            disabled: false,
            imgSrc: {},
            addForm:{
                addFormData1: '',//部门
                addFormData2: '',//组别
                addFormData3: '',//角色
                addFormData4: '',//开户日期
                addFormData5: '',//姓名
                addFormData6: '',//用户名
                addFormData7: '',//账号状态
            },
            rules: {
                addFormData1:[
                    { required: true,message: '请选择部门', trigger: 'change' },
                ],
                addFormData2:[
                    { required: true, message: '请输入组别', trigger: 'blur' },
                ],
                addFormData3:[
                    { required: true, message: '请选择角色', trigger: 'change' },
                ],
                addFormData4:[
                    { required: true, message: '请选择开户日期', trigger: 'change' },
                ],
                addFormData5:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                addFormData6:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                addFormData7:[
                    { required: true, message: '请选择账号状态', trigger: 'change' },
                ],
            },
        }
    },
    methods: {
        setFormData(formName){
            let addForm = {
                ...this.addForm,
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('addForm', addForm)
                }else {
                    return false
                }
            })
        },
    },
    mounted(){
        
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
    .UserAdd {
        .upLoad {
            margin-top: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .bottom {
            border-top: 1px solid #DCDFE6; 
            margin-top: 15px;
            .input_right {
                width: calc( 100% - 100px );
            }
        }
        .addNew {
            float: right;
            text-align: right;
            height: 26px;
            line-height: 26px;
            cursor: pointer;
            font-size: 12px;
            margin-top: 3px;
            span {
                background: #fd6b6b;
                color: #ffffff;
                border-radius: 14px;
                text-align: center;
                display: inline-block;
                padding: 0 10px;
                &:hover {
                    opacity: .8;
                    transition: all .3s;
                }
            }
        }
    }
</style>