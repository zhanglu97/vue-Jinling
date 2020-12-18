<template>
    <div class="addProject Stability">
        <div class="addForm zll-form">
            <el-form :model="addForm" :rules="rules" ref="addForm" class="demo-ruleForm">
                <el-form-item class="formList" prop="addFormData10" label="类别：">
                    <el-radio-group v-model="addForm.addFormData10">
                        <el-radio label="产品">产品</el-radio>
                        <el-radio label="原料">原料</el-radio>
                        <el-radio label="辅料">辅料</el-radio>
                        <el-radio label="包装材料">包装材料</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="产品名称：">
                            <el-input clearable class="input_right" placeholder="请输入产品名称" v-model="addForm.addFormData1"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData2" label="产品编码：">
                            <el-input clearable class="input_right" placeholder="请输入产品编码" v-model="addForm.addFormData2"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData11" label="原料名称：" v-if="addForm.addFormData10 == '原料'">
                            <el-input clearable class="input_right" placeholder="请输入原料名称" v-model="addForm.addFormData11"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData3" label="包装规格：">
                            <el-input clearable class="input_right" placeholder="请输入包装规格" v-model="addForm.addFormData3"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData4" label="批次号：">
                            <el-input clearable class="input_right" placeholder="请输入批次号" v-model="addForm.addFormData4"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData5" label="生产日期：">
                            <el-date-picker type="date" placeholder="请选择生产日期" value-format="yyyy-MM-dd" v-model="addForm.addFormData5"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData6" label="有效期：">
                            <el-date-picker type="date" placeholder="请选择有效期" value-format="yyyy-MM-dd" v-model="addForm.addFormData6"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData7" label="贮存条件：">
                            <el-input clearable class="input_right" placeholder="请输入贮存条件" v-model="addForm.addFormData7"></el-input>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData8" label="收样日期：">
                            <el-date-picker type="date" placeholder="请选择收样日期" value-format="yyyy-MM-dd" v-model="addForm.addFormData8"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="formList" prop="addFormData9" label="收样人：">
                            <el-input clearable class="input_right" placeholder="请输入收样人" v-model="addForm.addFormData9"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <p class="type-nav">阶段</p>
                        <div class="type-nav" v-for="(item, index) in addForm.addFormData12" :key="index">
                            <span>{{ item.stage }}</span>
                            <el-checkbox v-model="item.isCheck"></el-checkbox>
                        </div>
                        <p class="zll-botton allin" @click="allIn()">全选</p>
                    </el-col>
                    <el-col :span="6">
                        <p class="type-nav">考察日期</p>
                        <div class="type-nav" v-for="(item, index) in addForm.addFormData12" :key="index">
                            <span>{{ item.data }}</span>
                        </div>
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
            isAll: false,
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
                addFormData12: [
                    { stage: '1个月', isCheck: false, data: '2020-01-01', },
                    { stage: '2个月', isCheck: false, data: '2020-02-01', },
                    { stage: '3个月', isCheck: false, data: '2020-03-01', },
                    { stage: '6个月', isCheck: false, data: '2020-06-01', },
                    { stage: '12个月', isCheck: false, data: '2020-12-01', },
                    { stage: '18个月', isCheck: false, data: '2021-06-01', },
                    { stage: '24个月', isCheck: false, data: '2021-12-01', },
                    { stage: '36个月', isCheck: false, data: '2022-12-01', },
                ],
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
                    { required: true, message: '请输入贮存位置', trigger: 'blur' },
                ],
                addFormData8:[
                    { required: true, message: '请选择收样日期', trigger: 'change' },
                ],
                addFormData9:[
                    { required: true, message: '请输入收样人', trigger: 'blur' },
                ],
                addFormData10:[
                    { required: true, message: '请选择类别', trigger: 'change' },
                ],
                addFormData11:[
                    { required: true, message: '请输入原料名称', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        allIn() {
            this.isAll = !this.isAll
            for(var i = 0; i < this.addForm.addFormData12.length ;i++) {
                if( !this.isAll ) {
                    this.addForm.addFormData12[i].isCheck = false
                }else {
                    this.addForm.addFormData12[i].isCheck = true
                }
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
        
    },
    components: {
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/dialog.scss";
.type-nav {
    text-align: center;
    height: 35px;
    line-height: 35px;
    span {
        margin-right: 10px;
    }
}
</style>