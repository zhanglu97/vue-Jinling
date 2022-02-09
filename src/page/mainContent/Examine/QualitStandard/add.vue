<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" ref="addForm" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <div>
                            <div class="text-formList">
                                <span class="search_left">申请号：</span>
                                <div clearable class="text_right">{{ addForm.addFormData7 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">审批人：</span>
                                <div clearable class="text_right">{{ addForm.addFormData8 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">审批时间：</span>
                                <div clearable class="text_right">{{ addForm.addFormData9 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">标准编码：</span>
                                <div clearable class="text_right">{{ addForm.addFormData10 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">版本：</span>
                                <div clearable class="text_right">{{ addForm.addFormData11 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">补充说明：</span>
                                <div clearable class="text_right">{{ addForm.addFormData12 }}</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="border">
                            <span class="float_t">物料信息</span>
                            <div class="text-formList">
                                <span class="search_left">物料名称：</span>
                                <div clearable class="text_right">{{ addForm.addFormData1 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">物料编码：</span>
                                <div clearable class="text_right">{{ addForm.addFormData2 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">物料规格：</span>
                                <div clearable class="text_right">{{ addForm.addFormData3 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">物料等级：</span>
                                <div clearable class="text_right">{{ addForm.addFormData4 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">申请人：</span>
                                <div clearable class="text_right">{{ addForm.addFormData5 }}</div>
                            </div>
                            <div class="text-formList">
                                <span class="search_left">申请时间：</span>
                                <div clearable class="text_right">{{ addForm.addFormData6 }}</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <div class="tableList">
                    <span class="search_left">申请时间：</span>
                    <table border="1">
                        <tr>
                            <th>检测项目</th><th>质量标准</th><th>方法名称</th><th>方法编号</th><th>方法属性</th>
                        </tr>
                        <tr class="add_Table" v-for="(item, index) in tableData"  :key="index">
                            <td><p :title="item.table1">{{item.table1}}</p></td>
                            <td><p :title="item.table2">{{item.table2}}</p></td>
                            <td><p :title="item.table3">{{item.table3}}</p></td>
                            <td><p :title="item.table4">{{item.table4}}</p></td>
                            <td><p :title="item.table5">{{item.table5}}</p></td>
                        </tr>
                    </table>
                </div>
                <div style="margin-top:10px">
                    <span class="search_left">审批意见：</span>
                    <el-input clearable class="input_right" type="textarea" rows="3" placeholder="请输入审批意见" v-model="addForm.addFormData13" :disabled="isdisabled"></el-input>
                </div>
                <div class="bottom_bt">
                    <p class="zll-botton Info" v-if="titleTxt !== '查看'" @click="submitFun('fail')">驳 回</p>
                    <p class="zll-botton goback" v-if="titleTxt !== '查看'" @click="submitFun('success')">通 过</p>
                    <p class="zll-botton" v-else @click="submitFun('close')">确 定</p>
                </div>
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
                addFormData1: '聚氧乙烯（40）氢化蓖麻油',
                addFormData2: 'P02084',
                addFormData3: '',
                addFormData4: '',
                addFormData5: '',
                addFormData6: '',
                addFormData7: 'MQS21-02404',
                addFormData8: '',
                addFormData9: '',
                addFormData10: 'STP--RD-1528A',
                addFormData11: 'A3',
                addFormData12: '',
                addFormData13: '',
            },
            tableData:[
                { table1: '外观',table2: '白色或淡黄色膏状半固体',table3: '外观',table4: '',table5: '' },
                { table1: '外观',table2: '白色或淡黄色膏状半固体',table3: '外观',table4: '',table5: '' },
                { table1: '外观',table2: '白色或淡黄色膏状半固体',table3: '外观',table4: '',table5: '' },
            ],
        }
    },
    methods: {
        submitFun(type) {
            this.$emit('addForm',false)
        }
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
    .border {
        border: 1px solid #dcdfe6;
        position: relative;
        padding: 0 10px;
        .float_t {
            background: #fff;
            position: absolute;
            top: calc(50% - 35px);
            left: -19px;
            z-index: 1111;
            color: #878989;
            padding: 10px;    
            writing-mode: tb-rl;
        }
    }
    .tableList {
        margin-top: 0 !important;
        table {
            table-layout: fixed;
            td {
                p {
                    padding: 0 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            tr {
                background: #F2F2F2;
                &:nth-of-type(2n) {
                    background: #fff;
                }
            }
        }
    }
    .bottom_bt {
        display: flex;
        margin-top: 15px;
        .zll-botton {
            width: 80px;
        }
    }
</style>
