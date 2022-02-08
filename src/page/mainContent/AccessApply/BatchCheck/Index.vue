<template>
	<div class="app-container BatchCheck">
		<!-- 头部input搜索 -->
        <div class="Search_Top_Part">
            <div class="search_list" >
                <div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData1" placeholder="批次号"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData8" placeholder="供应商"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData2" placeholder="物料类别">
                            <el-option label="原料" value="原料"></el-option>
                            <el-option label="辅料" value="辅料"></el-option>
                            <el-option label="包装材料" value="包装材料"></el-option>
                            <el-option label="试剂" value="试剂"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData3" placeholder="物料名称"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData4" placeholder="等级">
                            <el-option label="A" value="A"></el-option>
                            <el-option label="B" value="B"></el-option>
                            <el-option label="C" value="C"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData5" placeholder="状态">
                            <el-option label="未提交" value="未提交"></el-option>
                            <el-option label="审计中" value="审计中"></el-option>
                            <el-option label="现场审计" value="现场审计"></el-option>
                            <el-option label="驳回" value="驳回"></el-option>
                            <el-option label="合格" value="合格"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData6" placeholder="申请人"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-date-picker v-model="searchData7" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="search_bt">
                <span class="zll-search" @click="getTableList">搜索</span>
                <span class="zll-search-reset" @click="searchReset()">重置</span>
            </div>
        </div>
        <div class="Search_Top_Input">
            <div class="addNew">
                <span @click="add()"><i class="el-icon-circle-plus-outline"></i> 新增</span>
            </div>
        </div>
		<!-- table -->
		<sys-table 
			:isMultipleSelection="false" 
			:tableData="tableData" 
			:tableLoading="tableLoading" 
			:tableHeader="tableHeader" 
			:scopeWidth="150"
		>
			<template slot-scope="scope" slot="operate">
				<el-button @click="goDetail(scope.row,)" type="text" size="small" v-if="scope.row.data8 !== '未提交'">查看</el-button>
				<el-button @click="edit(scope.row)" type="text" size="small" v-if="scope.row.data8 == '未提交'">编辑</el-button>
                <el-button @click="deleteRow(scope.index, tableData)" type="text" size="small" v-if="scope.row.data8 == '未提交'">删除</el-button>
			</template>
		</sys-table>
        
		<!-- 新建入库批检弹框 -->
		<div class="zll-dialog">
			<popout :title="'准入批检 · ' + title" :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content" :titleTxt="title" @addForm="getFormData"></Add>
				<template slot="bottom">
					<p class="zll-botton" v-if="title != '查看'" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
					<p class="zll-botton" v-else @click="addDialog = false">确 定</p>
				</template>
			</popout>
		</div>
	</div>
</template>

<script>
import Add from "./add";
export default {
	data() {
		return {
            title: '',
			searchData1: "",
			searchData2: "",
			searchData3: "",
			searchData4: "",
			searchData5: "",
			searchData6: "",
			searchData7: "",
            searchData8: "",
            addDialog: false,
			tableData: [
				{
					data1: "安徽山河制药股份有限公司", //供应商
					data2: "原料", //物料类别
					data3: "", //批次号
					data4: '磷酸钠', //物料名称
					data5: "A", //等级
					data6: "周浩", //申请人
					data7: '2020-01-01 15:05', //申请日期
					data8: "未提交", //状态
					data9: "", //检验人
					data10: "", //检验日期
				}, {
					data1: "南京精细化工有限公司", //供应商
					data2: "包装材料", //物料类别
					data3: "", //批次号
					data4: '无菌手套', //物料名称
					data5: "A", //等级
					data6: "周浩", //申请人
					data7: '', //申请日期
					data8: "检验中", //状态
					data9: "", //检验人
					data10: "", //检验日期
				}, {
					data1: "南京天恒化工有限公司", //供应商
					data2: "包装材料", //物料类别
					data3: "", //批次号
					data4: '无菌手套', //物料名称
					data5: "A", //等级
					data6: "周浩", //申请人
					data7: '', //申请日期
					data8: "待送样", //状态
					data9: "", //检验人
					data10: "", //检验日期
				}, {
					data1: "泰州羚锐制药有限公司", //供应商
					data2: "包装材料", //物料类别
					data3: "", //批次号
					data4: '无菌手套', //物料名称
					data5: "A", //等级
					data6: "周浩", //申请人
					data7: '', //申请日期
					data8: "合格", //状态
					data9: "", //检验人
					data10: "", //检验日期
				},
			],
			tableHeader: [],
			tableLoading: true, //table刷新
		};
	},
	methods: {
		getTableList() {
			//获取表格数据
			this.tableLoading = true;
			setTimeout(() => {
				this.tableHeader = [
					{ columnValue: "data1", columnName: "供应商", width: 200 },
					{ columnValue: "data2", columnName: "物料类别" },
					{ columnValue: "data4", columnName: "物料名称",  },
					{ columnValue: "data5", columnName: "等级", width: 100 },
					{ columnValue: "data3", columnName: "批次号" },
					{ columnValue: "data6", columnName: "申请人", width: 120 },
					{ columnValue: "data7", columnName: "申请日期", width: 150  },
					{ columnValue: "data8", columnName: "状态", width: 100 },
					{ columnValue: "data9", columnName: "检验人" },
					{ columnValue: "data10", columnName: "检验日期" },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
        },
        add() {
            this.addDialog = true
            this.title = '新建'
        },
		goDetail(row) {
            this.addDialog = true
            this.title = '查看'
		},
		edit(row) {
            this.addDialog = true
            this.title = '编辑'
        },
        getFormData(val) {

        },
        deleteRow(index, rows) {//删除
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
		searchReset() {//重置搜索
			this.searchData1 = "";
			this.searchData2 = "";
			this.searchData3 = "";
			this.searchData4 = "";
			this.searchData5 = "";
			this.searchData6 = "";
			this.searchData7 = "";
			this.searchData8 = "";
			this.getTableList();
		},
	},
	mounted() {
		this.getTableList(); //显示table
	},
	components: {
        Add
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
</style>
