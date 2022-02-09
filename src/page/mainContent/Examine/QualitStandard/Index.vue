<template>
	<div class="QualitStandard">
        <!-- 头部input搜索 -->
        <div class="Search_Top_Part">
            <div class="search_list" >
                <div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData1" placeholder="标准编码"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData2" placeholder="物料名称"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData3" placeholder="物料编码"></el-input>
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
			:scopeWidth="150"
		>
			<template slot-scope="scope" slot="operate">
				<el-button @click="edit(scope.row,'look')" v-if="scope.row.data6 !== '审批中'" type="text" size="small">查看</el-button>
				<el-button @click="edit(scope.row,'edit')" v-else type="text" size="small">审批</el-button>
			</template>
		</sys-table>

		<!-- 新建质量标准弹框 -->
		<div class="zll-dialog">
			<popout :title="'质量标准 · ' + title" :visible.sync="addDialog" v-if="addDialog" height="600px" :isBottom="false">
				<Add ref="add" slot="content" :titleTxt="title" @addForm="getFormData"></Add>
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
					data6: "审批中", //状态
				},{
					data1: "QSYL0001", //标准编码
					data2: "黄原胶", //物料名称
					data3: "P20200830", //物料编码
					data4: 3, //检项数
					data5: "A1.1", //版本
					data6: "通过", //状态
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
					{ columnValue: "data1", columnName: "标准编码" },
					{ columnValue: "data2", columnName: "物料名称" },
					{ columnValue: "data3", columnName: "物料编码" },
					{ columnValue: "data4", columnName: "检项数", isSortable: true, width: 100  },
					{ columnValue: "data5", columnName: "版本" },
					{ columnValue: "data6", columnName: "审批状态", width: 100 },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
		},
		getFormData() {//获取新增表单数据
			this.addDialog = false;
			this.getTableList();
		},
		edit(row,type) {
			this.addDialog = true;
            if(type == 'look') {
			    this.title = "查看";
            }else if(type == 'edit') {
			    this.title = "审批";
            }
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
.QualitStandard {
    .m_table {
        margin-top: 15px;
    }
}
</style>
