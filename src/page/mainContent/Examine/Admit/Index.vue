<template>
	<div class="MaterialManage">
        <div class="Search_Top_Part">
            <div class="search_list" >
                <div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData1" placeholder="产品编码"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData2" placeholder="审核状态">
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
		<sys-table  class="m_table"
			:isMultipleSelection="false" 
			:tableData="tableData" 
			:tableLoading="tableLoading" 
			:tableHeader="tableHeader" 
			:scopeWidth="120"
		>
			<template slot-scope="scope" slot="operate">
				<el-button @click="edit(scope.row,'look')" v-if="scope.row.data12 !== '审批中'" type="text" size="small">查看</el-button>
				<el-button @click="edit(scope.row,'edit')" v-else type="text" size="small">审批</el-button>
			</template>
		</sys-table>

		<!-- 弹框 -->
		<div class="zll-dialog">
			<popout :title="'准入 · ' + title" :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content" @addForm="getFormData"></Add>
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
			tableData: [
				{
					data1: "原料", //产品编码
					data2: "ALSN0212", //产品名称
					data3: "磷酸钠", //批次号
					data4: "A", //生产日期
					data5: "2020-01-01", //有效期
					data6: "张三", //包装规格
					data7: "正常", //留样数量
					data8: "", //留样日期
					data9: "", //贮存条件
					data10: "", //贮存位置
					data11: "", //观察阶段
					data12: "驳回", //审批状态
				},
				{
					data1: "原料", //产品编码
					data2: "ALSN0212", //产品名称
					data3: "磷酸钠", //批次号
					data4: "A", //生产日期
					data5: "2020-01-01", //有效期
					data6: "张三", //包装规格
					data7: "正常", //留样数量
					data8: "", //留样日期
					data9: "", //贮存条件
					data10: "", //贮存位置
					data11: "", //观察阶段
					data12: "审批中", //审批状态
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
					{ columnValue: "data1", columnName: "产品编码", },
					{ columnValue: "data2", columnName: "产品名称" },
					{ columnValue: "data3", columnName: "批次号" },
					{ columnValue: "data4", columnName: "生产日期" },
					{ columnValue: "data5", columnName: "有效期" },
					{ columnValue: "data6", columnName: "包装规格" },
					{ columnValue: "data7", columnName: "留样数量" },
					{ columnValue: "data8", columnName: "留样日期" },
					{ columnValue: "data9", columnName: "贮存条件" },
					{ columnValue: "data10", columnName: "贮存位置" },
					{ columnValue: "data11", columnName: "观察阶段" },
					{ columnValue: "data12", columnName: "审批状态" },
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
