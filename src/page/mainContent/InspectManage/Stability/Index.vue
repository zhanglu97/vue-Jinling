<template>
    <div class="Stability">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            稳定性考察
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
        <!-- 头部搜索 -->
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
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
                <el-button @click="edit(scope.row)" type="text" size="small">考察</el-button>
            </template>
        </sys-table>
        
        <!-- 新建管理用户弹框 -->
        <div class="zll-dialog">
            <popout title="稳定性考察" :visible.sync="addDialog" v-if="addDialog" >
                <Add ref="add" slot="content" @addForm="getFormData"></Add>
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
                tableLoading:true, //table刷新
                searchData1: '',
                searchData2: '',
                searchData3: '',
                searchData4: '',
                searchData5: '',
                searchData6: '',
                tableData: [{
                    tableNum1: '制剂',//物料类别
                    tableNum2: '琥珀酸亚铁片参比制剂',//物料编码
                    tableNum3: '铝塑泡罩',//物料名称
                    tableNum4: 'A',//等级
                    tableNum5: '',//规格
                    tableNum6: '',//贮存条件
                    tableNum7: 'P2020051501',//批次号
                    tableNum8: '',//检验人
                    tableNum9: '合格',//状态
                    tableNum10: '36',//合格月
                }, {
                    tableNum1: '制剂',//物料类别
                    tableNum2: '琥珀酸亚铁片参比制剂',//物料编码
                    tableNum3: '铝塑泡罩',//物料名称
                    tableNum4: 'A',//等级
                    tableNum5: '',//规格
                    tableNum6: '',//贮存条件
                    tableNum7: 'P2020051501',//批次号
                    tableNum8: '',//检验人
                    tableNum9: '合格',//状态
                    tableNum10: '36',//合格月
                }],
                tableHeader:[],
                addDialog: false, //用户弹框
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "物料类别" },
                        {"columnValue": "tableNum2", "columnName": "物料编码" },
                        {"columnValue": "tableNum3", "columnName": "物料名称" },
                        {"columnValue": "tableNum4", "columnName": "等级" },
                        {"columnValue": "tableNum5", "columnName": "规格" },
                        {"columnValue": "tableNum6", "columnName": "贮存条件" },
                        {"columnValue": "tableNum7", "columnName": "批次号"},
                        {"columnValue": "tableNum8", "columnName": "检验人"},
                        {"columnValue": "tableNum9", "columnName": "状态"},
                        {"columnValue": "tableNum10", "columnName": "合格月"},
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
            edit(val){ //编辑
                this.addDialog = true
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
.Stability{
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