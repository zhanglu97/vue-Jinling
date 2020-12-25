<template>
    <div class="SystemLog">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">系统日志</h1>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchInput1" placeholder="用户名"></el-input>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchInput2" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
		</div>
        <!-- table -->
        <sys-table  
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
.SystemLog{
    h1 {
        text-align: center;
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 100px;
        margin: 0 auto;
        padding-bottom: 10px;
        .line1 {
            width: 30px;
            height: 1px;
            position: absolute;
            left: -40px;
            top: 14px;
            background:  #34bfc6;
        }
        .line2 {
            width: 30px;
            height: 1px;
            position: absolute;
            right: -40px;
            top: 14px;
            background:  #34bfc6;
        }
    }
}
</style>