<template>
	<div class="MaterialManage">
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 100px) !important">
                <div class="input_flex">
                    <el-select clearable v-model="searchData1" placeholder="物料类别">
                        <el-option label="原料" value="原料"></el-option>
                        <el-option label="辅料" value="辅料"></el-option>
                        <el-option label="包装材料" value="包装材料"></el-option>
                        <el-option label="试剂" value="试剂"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData2" placeholder="物料编码"></el-input>
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
                        <el-option label="正常" value="正常"></el-option>
                        <el-option label="停用" value="停用"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchData6" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 100px !important">
				<span @click="add()"><i class="el-icon-circle-plus-outline"></i> 新建物料 </span>
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
				<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
			</template>
		</sys-table>

		<!-- 新建物料弹框 -->
		<div class="zll-dialog">
			<popout :title="'物料 · ' + title" :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content" @addForm="getFormData"></Add>
				<template slot="bottom">
					<p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
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
			searchData1: "",
			searchData2: "",
			searchData3: "",
			searchData4: "",
			searchData5: "",
			searchData6: "",
			tableData: [
				{
					data1: "原料", //物料类别
					data2: "ALSN0212", //物料编码
					data3: "磷酸钠", //物料名称
					data4: "A", //等级
					data5: "2020-01-01", //录入日期
					data6: "张三", //录入人
					data7: "正常", //状态
				},{
					data1: "辅料", //物料类别
					data2: "", //物料编码
					data3: "", //物料名称
					data4: "A", //等级
					data5: "2020-01-01", //录入日期
					data6: "张三", //录入人
					data7: "正常", //状态
				},
			],
			tableHeader: [],
			tableLoading: true, //table刷新
			addDialog: false, //新建项目弹框
		};
	},
	methods: {
		getTableList() {
			//获取表格数据
			this.tableLoading = true;
			setTimeout(() => {
				this.tableHeader = [
					{ columnValue: "data1", columnName: "物料类别", width: 150 },
					{ columnValue: "data2", columnName: "物料编码" },
					{ columnValue: "data3", columnName: "物料名称" },
					{ columnValue: "data4", columnName: "等级", width: 100 },
					{ columnValue: "data5", columnName: "录入日期" },
					{ columnValue: "data6", columnName: "录入人", width: 150 },
					{ columnValue: "data7", columnName: "状态", width: 100 },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
		},
		getFormData(data) {//获取新增表单数据
			console.log(data);
			this.addDialog = false;
			this.tableData.push({
				data2: data.addFormData1, //
			});
			this.getTableList();
		},
		add() {//新建
			this.addDialog = true;
			this.title = "新建";
		},
		edit(row) {
			this.addDialog = true;
			this.title = "编辑";
		},
		searchReset() {//重置搜索
			this.searchData1 = "";
			this.searchData2 = "";
			this.searchData3 = "";
			this.searchData4 = "";
			this.searchData5 = "";
			this.searchData6 = "";
			this.getTableList();
		},
	},
	mounted() {
		this.getTableList(); //显示table
	},
	components: {
		Add,
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
</style>
