<template>
	<div class="MaterialManage">
		<!-- 头部input搜索 -->
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
                        <el-input clearable v-model="searchData2" placeholder="物料编码"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData3" placeholder="物料名称"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData5" placeholder="审核状态">
                            <el-option label="审核中" value="审核中"></el-option>
                            <el-option label="驳回" value="驳回"></el-option>
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
				<el-button @click="edit(scope.row,'look')" v-if="scope.row.data7 !== '审批中'" type="text" size="small">查看</el-button>
				<el-button @click="edit(scope.row,'edit')" v-else type="text" size="small">审批</el-button>
			</template>
		</sys-table>

		<!-- 新建物料弹框 -->
		<div class="zll-dialog">
			<popout :title="'物料 · ' + title" :visible.sync="addDialog" v-if="addDialog" :isBottom="false" height="450px">
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
			searchData1: "",
			searchData2: "",
			searchData3: "",
			searchData4: "",
			searchData5: "",
			tableData: [
				{
					data1: "原料", //物料类别
					data2: "ALSN0212", //物料编码
					data3: "磷酸钠", //物料名称
					data4: "A", //等级
					data5: "2020-01-01", //录入日期
					data6: "张三", //录入人
					data7: "审批中", //状态
				},{
					data1: "辅料", //物料类别
					data2: "", //物料编码
					data3: "", //物料名称
					data4: "A", //等级
					data5: "2020-01-01", //录入日期
					data6: "张三", //录入人
					data7: "驳回", //状态
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
					{ columnValue: "data1", columnName: "物料类别" },
					{ columnValue: "data2", columnName: "物料编码" },
					{ columnValue: "data3", columnName: "物料名称" },
					{ columnValue: "data4", columnName: "等级" },
					{ columnValue: "data5", columnName: "录入日期" },
					{ columnValue: "data6", columnName: "录入人" },
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
			this.searchData4 = "";
			this.searchData5 = "";
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
.MaterialManage {
    .m_table {
        margin-top: 15px;
    }
}
</style>
