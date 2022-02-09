<template>
    <div class="app-container SystemLog">
        <!-- 头部搜索 -->
        <div class="Search_Top_Part">
            <div class="search_list" >
                <div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchInput1" placeholder="用户名"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-date-picker v-model="searchInput2" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
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
            :isOperate="false"
        >
        </sys-table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchInput1: '',
                searchInput2: '',
                tableLoading:true, //table刷新
                tableData: [{
                    tableNum1: '日期',//日期
                    tableNum2: '用户名',//用户名
                    tableNum3: '姓名',//姓名
                    tableNum4: '操作记录',//操作记录
                }],
                tableHeader:[],
                selectList: [],
            }
        },
        methods: {
            getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "日期", width: 200},
                        {"columnValue": "tableNum2", "columnName": "用户名", width: 100 },
                        {"columnValue": "tableNum3", "columnName": "姓名", width: 100 },
                        {"columnValue": "tableNum4", "columnName": "操作记录"},
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            searchReset() { //重置搜索
                this.searchInput1 = "";
                this.searchInput2 = "";
                this.getTableList();
            },
        },
        mounted(){
            this.getTableList();//显示table
        },
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
.SystemLog {
    .m_table {
        margin-top: 15px;
    }
}
</style>