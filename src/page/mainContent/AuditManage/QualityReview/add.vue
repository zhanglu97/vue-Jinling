<template>
    <div class="addProject">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">2020年度 供应商物料质量检验结果回顾分析表
            <p>质量标准文件 SMP-QA-007-08</p>
        </h1>
        <div class="addForm zll-form">
            <el-row>
                <el-col :span="7">
                    <div class="bottom_liet">
                        <span class="left">供应商：</span>
                        <span class="right">南京天元化工股份</span>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="bottom_liet">
                        <span class="left">物料编码：</span>
                        <span class="right">JF80183</span>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="bottom_liet">
                        <span class="left">年度总批次：</span>
                        <span class="right">6</span>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="bottom_liet">
                        <span class="left">合格批次：</span>
                        <span class="right">0</span>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="7">
                    <div class="bottom_liet">
                        <span class="left">类别：</span>
                        <span class="right">生产厂</span>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="bottom_liet">
                        <span class="left">物料名称：</span>
                        <span class="right">牛磺酸粉剂</span>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="bottom_liet">
                        <span class="left">检验合格率：</span>
                        <span class="right">83.33%</span>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="bottom_liet">
                        <span class="left">不合格批次：</span>
                        <span class="right">1</span>
                    </div>
                </el-col>
            </el-row>
            <div class="mine-add" v-show="!isdisabled">
                <span class="el-icon-circle-plus" @click="addTable"></span>
                <span class="el-icon-remove-outline" @click.stop="deleteTable"></span>
            </div>
            <div class="tableList">
                <table border="1">
                    <tr>
                        <th width="50"></th><th>来货批次号</th><th>检验日期</th><th>检验号</th><th>检验人</th><th>检验结果</th><th>不合格项目</th><th>备注</th>
                    </tr>
                    <tr class="add_Table" v-for="(item, index) in tableData"  :key="index">
                        <td width="50">
                            <span class="checkStyle" @click="checkList(index)" v-show="!isdisabled">
                                <i class="el-icon-check" v-show="item.list"></i>
                                <i class="no-check" v-show="!item.list"></i>
                            </span>
                            <span class="checkStyle" v-show="isdisabled">
                                <i class="no-check"></i>
                            </span>
                        </td>
                        <td><el-input clearable v-model="item.table1" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table2" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table3" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table4" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td>
                            <el-select clearable v-model="item.table5" placeholder="">
                                <el-option label="合格" value="合格"></el-option>
                                <el-option label="不合格" value="不合格"></el-option>
                            </el-select>
                        </td>
                        <td><el-input clearable v-model="item.table6" placeholder="" :disabled="isdisabled"></el-input></td>
                        <td><el-input clearable v-model="item.table7" placeholder="" :disabled="isdisabled"></el-input></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['titleTxt'],
    data () {
        return {
            isdisabled: false,
            tableData:[
                { list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '' },
            ],
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '',table3: '',table4: '',table5: '',table6: '',table7: '' })
        },
        checkList(index){
            this.tableData[index].list = !this.tableData[index].list;
        },
        deleteTable(){//删除table
            if(this.tableData.length == 1){
                this.$message.warning('不能少于一列!');
                return false
            }else{
                this.tableData = this.tableData.filter(e => {
                    return !e.list
                })
            }
        },
        setFormData(formName){
            let formdata = {
                'tableData': [...this.tableData]
            }
            this.$emit('addForm',formdata)
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
.addProject {
    h1 {
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        margin: 10px auto;
        p {
            color: #e82626;
            font-size: 12px;
            margin: 5px 0 15px;
        }
    }
    .bottom_liet {
        height: 40px;
        line-height: 40px;
        .left {
            float: left;
            text-align: right;
            width: 75px;
        }
        .right {
            width: calc(100% - 75px);
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>
