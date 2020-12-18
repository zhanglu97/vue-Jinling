<template>
	<div class="QualityReview">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            质量回顾
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 150px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchData1" placeholder="标准编码"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData2" placeholder="物料名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData3" placeholder="物料编码"></el-input>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 150px !important">
				<span @click="add()"><i class="el-icon-circle-plus-outline"></i> 新建质量回顾</span>
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
				<el-button @click="goDetail(scope.row)" type="text" size="small">查看</el-button>
				<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
			</template>
		</sys-table>

		<!-- 新建质量回顾弹框 -->
		<div class="zll-dialog">
			<popout :title="'年度供应商质量检验结果回顾分析表 · ' + title" :visible.sync="addDialog" v-if="addDialog">
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
			title: "",
			searchData1: "",
			searchData2: "",
			searchData3: "",
			tableData: [
				{
					data1: "QSYL0001", //标准编码
					data2: "琥珀酸亚铁片参比制剂", //物料名称
					data3: "P20201011", //物料编码
					data4: 5, //检项数
					data5: "A1.0", //版本
					data6: "执行", //状态
				},{
					data1: "QSYL0001", //标准编码
					data2: "黄原胶", //物料名称
					data3: "P20200830", //物料编码
					data4: 3, //检项数
					data5: "A1.1", //版本
					data6: "停用", //状态
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
				for (let i = 0; i < this.tableData.length; i++) {
					this.tableData[i]["index"] = i + 1;
				}
				this.tableHeader = [
					{ columnValue: "index", columnName: "序号", width: 50 },
					{ columnValue: "data1", columnName: "标准编码" },
					{ columnValue: "data2", columnName: "物料名称" },
					{ columnValue: "data3", columnName: "物料编码" },
					{ columnValue: "data4", columnName: "检项数", isSortable: true, width: 100  },
					{ columnValue: "data5", columnName: "版本" },
					{ columnValue: "data6", columnName: "状态", width: 100 },
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
		goDetail(row) {
			this.addDialog = true;
			this.title = "查看";
		},
		edit(row) {
			this.addDialog = true;
			this.title = "编辑";
		},
		searchReset() {//重置搜索
			this.searchData1 = "";
			this.searchData2 = "";
			this.searchData3 = "";
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
.QualityReview {
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
