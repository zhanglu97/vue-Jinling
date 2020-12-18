<template>
    <div class="ReceiveRecord">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            试剂领用记录
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchData1" placeholder="试剂编码"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData2" placeholder="名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchData3" placeholder="规格">
                        <el-option label="基准" value="基准"></el-option>
                        <el-option label="实验" value="实验"></el-option>
                        <el-option label="指示" value="指示"></el-option>
                        <el-option label="生化" value="生化"></el-option>
                        <el-option label="生物染色" value="生物染色"></el-option>
                        <el-option label="光谱" value="光谱"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchData4" placeholder="纯度">
                        <el-option label="优级纯GR" value="优级纯GR"></el-option>
                        <el-option label="分析纯AR" value="分析纯AR"></el-option>
                        <el-option label="化学纯CP" value="化学纯CP"></el-option>
                        <el-option label="实验试剂-LR" value="实验试剂-LR"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchData5" placeholder="等级">
                        <el-option label="一级" value="一级"></el-option>
                        <el-option label="二级" value="二级"></el-option>
                        <el-option label="三级" value="三级"></el-option>
                        <el-option label="四级" value="四级"></el-option>
                    </el-select>
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
        >
            <template slot-scope="scope" slot="operate">
                <el-button @click="giveBack(scope.row)" type="text" size="small" v-if="scope.row.data10 == '已领待还'">归还</el-button>
                <el-button @click="goDetail(scope.row)" type="text" size="small" v-if="scope.row.data10 == '完成'">查看</el-button>
                <el-button @click="handOut(scope.row)" type="text" size="small" v-if="scope.row.data10 == '待发放'">发放</el-button>
                <el-button @click="deleteRow(scope.index, tableData)" type="text" size="small" v-if="scope.row.data10 == '待发放'">删除</el-button>
            </template>
        </sys-table>
        
        <!-- 新建管理用户弹框 -->
        <div class="zll-dialog">
            <popout title="试剂领用记录 · 查看" :visible.sync="addDialog" v-if="addDialog" >
                <Add ref="add" slot="content"></Add>
                <template slot="bottom">
                    <p class="zll-botton" @click="addDialog = false">确 定</p>
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
                tableLoading:true, //table刷新
                searchData1: '',
                searchData2: '',
                searchData3: '',
                searchData4: '',
                searchData5: '',
                searchData6: '',
                tableData: [{
					data1: "氧化二氢", //名称
					data2: "基准", //规格
					data3: "优级纯GR", //纯度
					data4: '一级', //等级
					data5: "", //领用量
					data6: "12", //库存余量
					data7: "ml", //单位
					data8: "", //领用人
					data9: "", //领用日期
					data10: "已领待还", //库存状态
					data11: "", //整件归还
				}, {
					data1: "氧化二氢", //名称
					data2: "实验", //规格
					data3: "分析纯AR", //纯度
					data4: '二级', //等级
					data5: "", //领用量
					data6: "0.5", //库存余量
					data7: "g", //单位
					data8: "", //领用人
					data9: "", //领用日期
					data10: "完成", //库存状态
					data11: "", //整件归还
				}, {
					data1: "氧化二氢", //名称
					data2: "指示", //规格
					data3: "化学纯CP", //纯度
					data4: '三级', //等级
					data5: "", //领用量
					data6: "100", //库存余量
					data7: "kg", //单位
					data8: "", //领用人
					data9: "", //领用日期
					data10: "待发放", //库存状态
					data11: "", //整件归还
				}
			],
                tableHeader:[],
                addDialog: false, //用户弹框
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        { columnValue: "data1", columnName: "名称" },
                        { columnValue: "data2", columnName: "规格", width: 100 },
                        { columnValue: "data3", columnName: "纯度", width: 100 },
                        { columnValue: "data4", columnName: "等级", width: 80  },
                        { columnValue: "data6", columnName: "库存余量", width: 80 },
                        { columnValue: "data7", columnName: "单位", width: 80 },
                        { columnValue: "data5", columnName: "领用量" },
                        { columnValue: "data8", columnName: "领用人" },
                        { columnValue: "data9", columnName: "领用日期" },
                        { columnValue: "data10", columnName: "状态", width: 100 },
                        { columnValue: "data11", columnName: "整件归还" },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
            giveBack(val) {//归还

            },
            handOut(val) {//发放

            },
            goDetail(val){ //查看
                this.addDialog = true
            },
            deleteRow(index, rows) {
                this.$confirm('确定删除？', '提示', {       
                    distinguishCancelAndClose: true,
                    cancelButtonText: '取消',
                    confirmButtonText: '确定',
                }).then(() => {
                    rows.splice(index, 1);
                    this.$message.success("已删除")
                    this.getTableList()

                }).catch(() => {
                    this.$message.info("已取消")          
                });
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
.ReceiveRecord{
    h1 {
        text-align: center;
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 140px;
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