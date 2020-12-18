<template>
    <div class="Reserved">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            留样考察
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchData1" placeholder="产品名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData2" placeholder="产品编码"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData3" placeholder="批次号"></el-input>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
                <div class="addNew" style="width: 150px !important">
                    <span @click="add()"><i class="el-icon-circle-plus-outline"></i> 新建留样</span>
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
        >
            <template slot-scope="scope" slot="operate">
                <el-button @click="edit(scope.row)" type="text" size="small" v-if="scope.row.tableNum12 == '待留样'">编辑</el-button>
                <el-button @click="edit(scope.row)" type="text" size="small" v-if="scope.row.tableNum12 == '留样中'">考察</el-button>
                <el-button @click="goDetail(scope.row)" type="text" size="small" v-if="scope.row.tableNum12 == '结束'">查看</el-button>
            </template>
        </sys-table>
        
        <!-- 新建管理用户弹框 -->
        <div class="zll-dialog">
            <popout :title="'留样考察 · ' + title" :visible.sync="addDialog" v-if="addDialog" >
                <Add ref="add" slot="content" :title="title" @addForm="getFormData"></Add>
                <template slot="bottom">
                    <p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
                </template>
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
                tableData: [{
                    tableNum1: 'JL12NH01',//产品编码
                    tableNum2: '头孢克肟片',//产品名称
                    tableNum3: 'P20201011',//批次号
                    tableNum4: '2020-10-11',//生产日期
                    tableNum5: '2021-10-11',//有效期
                    tableNum6: '铝箔5×4板/盒',//包装规格
                    tableNum7: '2盒',//留样数量
                    tableNum8: '2020-10-12',//留样日期
                    tableNum9: '温度≤22℃，湿度',//贮存条件
                    tableNum10: 'C2A4',//贮存位置
                    tableNum11: '',//观察阶段
                    tableNum12: '待留样',//状态
                },{
                    tableNum1: 'JL12NH01',//产品编码
                    tableNum2: '头孢克肟片',//产品名称
                    tableNum3: 'P20201011',//批次号
                    tableNum4: '2020-10-11',//生产日期
                    tableNum5: '2021-10-11',//有效期
                    tableNum6: '铝箔5×4板/盒',//包装规格
                    tableNum7: '2盒',//留样数量
                    tableNum8: '2020-10-12',//留样日期
                    tableNum9: '温度≤22℃，湿度',//贮存条件
                    tableNum10: 'C2A4',//贮存位置
                    tableNum11: '',//观察阶段
                    tableNum12: '留样中',//状态
                },{
                    tableNum1: 'JL12NH01',//产品编码
                    tableNum2: '头孢克肟片',//产品名称
                    tableNum3: 'P20201011',//批次号
                    tableNum4: '2020-10-11',//生产日期
                    tableNum5: '2021-10-11',//有效期
                    tableNum6: '铝箔5×4板/盒',//包装规格
                    tableNum7: '2盒',//留样数量
                    tableNum8: '2020-10-12',//留样日期
                    tableNum9: '温度≤22℃，湿度',//贮存条件
                    tableNum10: 'C2A4',//贮存位置
                    tableNum11: '',//观察阶段
                    tableNum12: '结束',//状态
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
                        {"columnValue": "tableNum1", "columnName": "产品编码" },
                        {"columnValue": "tableNum2", "columnName": "产品名称" },
                        {"columnValue": "tableNum3", "columnName": "批次号" },
                        {"columnValue": "tableNum4", "columnName": "生产日期" },
                        {"columnValue": "tableNum5", "columnName": "有效期" },
                        {"columnValue": "tableNum6", "columnName": "包装规格" },
                        {"columnValue": "tableNum7", "columnName": "留样数量"},
                        {"columnValue": "tableNum8", "columnName": "留样日期"},
                        {"columnValue": "tableNum9", "columnName": "贮存条件"},
                        {"columnValue": "tableNum10", "columnName": "贮存位置"},
                        {"columnValue": "tableNum11", "columnName": "观察阶段"},
                        {"columnValue": "tableNum12", "columnName": "状态"},
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
            add() {
                this.addDialog = true
                this.title = '新建'
            },
            goDetail(val) {
                this.addDialog = true
                this.title = '查看'
            },
            edit(val){ //编辑
                this.addDialog = true
                this.title = '编辑'
            },
            searchReset() { //重置搜索
                this.searchData1 = "";
                this.searchData2 = "";
                this.searchData3 = "";
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
.Reserved{
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