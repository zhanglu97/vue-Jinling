<template>
    <div class="app-container InspectionResult">
        <!-- 头部搜索 -->
        <div class="Search_Top_Part">
            <div class="search_list" >
                <div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData1" placeholder="物料类别">
                            <el-option label="原料" value="原料"></el-option>
                            <el-option label="辅料" value="辅料"></el-option>
                            <el-option label="包装材料" value="包装材料"></el-option>
                            <el-option label="试剂" value="试剂"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData2" placeholder="物料名称"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData3" placeholder="等级">
                            <el-option label="A" value="A"></el-option>
                            <el-option label="B" value="B"></el-option>
                            <el-option label="C" value="C"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData4" placeholder="规格">
                            <el-option label="规格" value="规格"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData5" placeholder="供用商"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData6" placeholder="状态">
                            <el-option label="待检" value="待检"></el-option>
                            <el-option label="完成" value="完成"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="search_bt">
                <span class="zll-search" @click="getTableList">搜索</span>
                <span class="zll-search-reset" @click="searchReset()">重置</span>
            </div>
        </div>
        <!-- table -->
        <sys-table class="m_table"
            :isMultipleSelection="false" 
            :tableData="tableData" 
            :tableLoading="tableLoading" 
            :tableHeader="tableHeader"
            :scopeWidth="120"
        >
            <template slot-scope="scope" slot="operate">
                <el-button @click="edit(scope.row)" type="text" size="small">查看</el-button>
            </template>
        </sys-table>
        
        <!-- 新建弹框 -->
        <div class="zll-dialog">
            <popout :title="'检验结果 · ' + title" :visible.sync="addDialog" v-if="addDialog" class="QC">
                <Add ref="add" slot="content"></Add>
            </popout>
        </div> 
    </div>
</template>

<script>
    import Add from './Add'
    export default {
        data(){
            return {
                title: '',
                tableLoading:true, //table刷新
                searchData1: '',
                searchData2: '',
                searchData3: '',
                searchData4: '',
                searchData5: '',
                searchData6: '',
                tableData: [{
                    tableNum1: '制剂',//类别
                    tableNum2: '琥珀酸亚铁片参比制剂',//物料名称
                    tableNum3: '铝塑泡罩',//包装方式
                    tableNum4: '25片/板*4板/盒',//包装规格
                    tableNum5: 'AJC100',//入库批次号
                    tableNum6: '5000',//批次量
                    tableNum7: '入库检验',//检验类别
                    tableNum8: '待检',//状态
                    tableNum9: '不合格',//检验结论
                    tableNum10: '邱莎莎',//检验人
                    tableNum10: '2020-10-11',//检验日期
                }, {
                    tableNum1: '包装材料',//类别
                    tableNum2: '无菌手套',//物料名称
                    tableNum3: '',//包装方式
                    tableNum4: '',//包装规格
                    tableNum5: '',//入库批次号
                    tableNum6: '',//批次量
                    tableNum7: '准入检验',//检验类别
                    tableNum8: '完成',//状态
                    tableNum9: '合格',//检验结论
                    tableNum10: '邱莎莎',//检验人
                    tableNum10: '2020-10-11',//检验日期
                },],
                tableHeader:[],
                addDialog: false, //用户弹框
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "类别" },
                        {"columnValue": "tableNum2", "columnName": "物料名称" },
                        {"columnValue": "tableNum3", "columnName": "包装方式" },
                        {"columnValue": "tableNum4", "columnName": "包装规格" },
                        {"columnValue": "tableNum5", "columnName": "入库批次号" },
                        {"columnValue": "tableNum6", "columnName": "批次量" },
                        {"columnValue": "tableNum7", "columnName": "检验类别"},
                        {"columnValue": "tableNum8", "columnName": "状态"},
                        {"columnValue": "tableNum9", "columnName": "检验结论"},
                        {"columnValue": "tableNum10", "columnName": "检验人"},
                        {"columnValue": "tableNum11", "columnName": "检验日期"},
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            edit(val){ //查看
                this.addDialog = true
                this.title = '查看'
            },
            searchReset() { //重置搜索
                this.searchData1 = "";
                this.searchData2 = "";
                this.searchData3 = "";
                this.searchData4 = "";
                this.searchData5 = "";
                this.searchData6 = "";
                this.getTableList();
            },
        },
        mounted(){
            this.getTableList();//显示table
        },
        components: {
            Add,
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
.InspectionResult {
    .m_table {
        margin-top: 15px;
    }
}
</style>