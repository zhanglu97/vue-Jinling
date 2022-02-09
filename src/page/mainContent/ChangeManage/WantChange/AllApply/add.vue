<template>
    <div class="addProject">
        <div class="nav_part">
            <span class="sub">金陵药业标准控制文件·变更申请计划表（SMP-QA-032-01）</span>
            <div class="text-formList">
                <span class="search_left">申请号：</span>
                <div clearable class="text_right">BS2103005</div>
            </div>
        </div>
        <div class="change_table">
            <table border="1">
                <tr>
                    <td class="name">变更项目名称</td><td>{{ tableData1 }}</td>
                    <td class="name">申请状态</td><td>{{ tableData2 }}</td>
                </tr>
                <tr>
                    <td class="name">申请部门</td><td>{{ tableData3 }}</td>
                    <td class="name">申请人</td><td>{{ tableData4 }}</td>
                </tr>
                <tr>
                    <td class="name">产品名称/规格</td><td>{{ tableData5 }}</td>
                    <td class="name">申请日期</td><td>{{ tableData6 }}</td>
                </tr>
                <tr>
                    <td class="name">变更类型</td>
                    <td colspan="3">
                        <div class="text-formList" v-for="(item,index) in tableData7.checkboxList" :key="index">
                            <span class="search_left">{{item.name}}</span><span class="mao">：</span>
                            <div clearable class="text_right">
                                <el-checkbox-group v-model="item.data">
                                    <el-checkbox  v-for="(item2,index2) in item.group" :key="index2" :label="item2"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="name">变更性质</td>
                    <td colspan="3">
                        <div class="text-formList">
                            <span class="search_left"></span><span class="mao"></span>
                            <div clearable class="text_right">
                                <el-checkbox-group v-model="tableData8">
                                    <el-checkbox label="永久性变更"></el-checkbox>
                                    <el-checkbox label="临时性变更"></el-checkbox>
                                </el-checkbox-group>
                                <div class="date">
                                    （预计起止日期
                                    <el-date-picker class="checkbox_date" v-model="tableData9" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                                    ）
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="name">变更内容</td>
                    <td colspan="3">
                        
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: ['titleTxt'],
    data () {
        return {
            tableData1: '海绵外包装材料增加UDI码产线',
            tableData2: '待提交',
            tableData3: '海绵车间',
            tableData4: '张荣山',
            tableData5: '吸收性明胶海绵，6×2×0.5cm',
            tableData6: '',
            tableData7: {
                checkboxList: [
                    {name: '人员',data: [],group: ['法定代表人','企业负责人','生产负责人','质量负责人','管理者代表']},
                    {name: '标准',data: [],group: ['注册标准','质量标准','内控标准']},
                    {name: '产品',data: [],group: ['变更规格','增加规格','有效期和贮藏条件']},
                    {name: '检验',data: [],group: ['检验方法','检验仪器']},
                    {name: '物料',data: [],group: ['原料','辅料']},
                    {name: '包装',data: [],group: ['变更包装规格','增加包装规格','说明书及标签','包装材料和容器']},
                    {name: '供应商',data: [],group: ['原料供应商','辅料供应商','包材供应商']},
                    {name: '设备',data: [],group: ['新增设备','更换设备','改造设备','转移设备用途']},
                    {name: '生产',data: [],group: ['生产场地','生产工艺','生产批量']},
                    {name: '厂房布局',data: [],group: ['原设计功能','内部间隔','洁净区内地漏','洁净装修材料或形式']},
                    {name: '公用系统',data: [],group: ['水系统','空调系统','压缩空气系统']},
                    {name: '其他',data: [],group: ['电子秤','模具','计算机系统','清洁方法','仓储']},
                ],
            },
            tableData8: [],
            tableData9: '',
            tableData10: [
                {name: '变更原因（如果有技术支持资料请附入）', txt: '医疗器械号吸收性明胶海绵在外包用包装材料“铝塑袋”,“中盒”及“箱贴”上增加 UDI 码。为了生产需要购买了 UDI 码产线。'},
                {name: '现状描述（变更前）', txt: '医疗器械号吸收性明胶海绵在外包用包装材料“铝塑袋”,“中盒”及“箱贴”上增加 UDI 码。为了生产需要购买了 UDI 码产线。'},
                {name: '变更方案（变更后）（必要时附详细的变更方案）', txt: '为适合生产需要,经有关部门调研,选购了安徽信诺标识科技有限公司生产的 UDI 码产线。同时,对于设备进行确认, UDI 码产线主要操作过程:打开模板文件,设置 GTIN 、生产日期、产品批号、有效期至、 UDI 码等信息并确认,保存并发送任务至喷头组;启动剔除程序,打开相对应的剔除方案并确认;启动分页喷码检测剔除收料系统,按启动按钮,开始喷码操作。生产能力的确认。'},
                {name: '风险分析及预期影响', txt: '新设备调试期间可能会影响生产效率。设备性能确认,外观,打印质量是否达到要求。生产能力的确认,是否符合规定。'},
            ]
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
.nav_part {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sub {
        color: #878989;
    }
    .text-formList {
        .text_right {
            color: #34bfc6;
        }
    }
}
.change_table {
    width: 100%;
    table {
        width: 100%;
        border: 1px solid #ddd;
        border-collapse: collapse;
        tr {
            td {
                text-align: center;
                height: 35px;
                line-height: 35px;
                .text-formList {
                    display: flex;
                    height: 25px;
                    line-height: 25px;
                    .search_left {
                        text-align-last: justify;
                        padding-left: 20px;
                        display: inline-block;
                    }
                    .mao {
                        display: inline-block;
                        width: 10px;color: #878989;
                    }
                    .text_right {
                        text-align: left;
                        padding-left: 10px;
                        display: flex;
                        .el-checkbox {
                            width: 80px;
                        }
                        .date {
                            display: flex;
                            align-items: center;
                            padding-left: 10px;
                        }
                        .checkbox_date {
                            width: 200px !important;
                            margin-left: 5px;
                        }
                    }
                }
            }
            .name {
                background: #f2f2f2;
                width: 100px;
                color: #878989;
            }
        }
    }
}
</style>
