<template>
	<div class="AllApply">
        <div class="Search_Top_Part">
            <div class="search_list" >
                <div>
                    <div class="input_flex">
                        <el-input clearable v-model="searchData1" placeholder="申请号"></el-input>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData2" placeholder="部门">
                            <el-option label="海绵车间" value="海绵车间"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData3" placeholder="变更性质">
                            <el-option label="永久性变更" value="永久性变更"></el-option>
                            <el-option label="临时性变更" value="临时性变更"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData4" placeholder="申请人">
                            <el-option label="张三" value="张三"></el-option>
                            <el-option label="张荣山" value="张荣山"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-select clearable v-model="searchData5" placeholder="申请状态">
                            <el-option label="待提交" value="待提交"></el-option>
                            <el-option label="部门待批" value="部门待批"></el-option>
                            <el-option label="QA待审" value="QA待审"></el-option>
                            <el-option label="QA待审" value="QA待审"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <el-date-picker v-model="searchData6" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
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
                <span @click="edit({},'add')"><i class="el-icon-circle-plus-outline"></i> 新增</span>
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
				<el-button @click="edit(scope.row,'look')" type="text" size="small">查看</el-button>
			</template>
		</sys-table>

		<!-- 弹框 -->
		<div class="zll-dialog">
			<popout title="变更申请计划" :visible.sync="addDialog" v-if="addDialog">
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
			searchData3: "",
			searchData4: "",
			searchData5: "",
			searchData6: "",
			tableData: [
				{
					data1: "BS2103005",
					data2: "海绵车间", 
					data3: "吸收性明胶海绵，6×2", 
					data4: "永久性变更", 
					data5: "包装",
					data6: "2021-03-01 15:02", 
					data7: "张荣山", 
					data8: "待提交", 
					data9: "", 
				},{
					data1: "BS2103005",
					data2: "海绵车间", 
					data3: "吸收性明胶海绵，6×2", 
					data4: "临时性变更", 
					data5: "包装",
					data6: "2021-03-01 15:02", 
					data7: "张荣山", 
					data8: "部门待批", 
					data9: "", 
				},{
					data1: "BS2103005",
					data2: "海绵车间", 
					data3: "吸收性明胶海绵，6×2", 
					data4: "永久性变更", 
					data5: "包装",
					data6: "2021-03-01 15:02", 
					data7: "张荣山", 
					data8: "QA待审", 
					data9: "", 
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
					{ columnValue: "data1", columnName: "申请号", },
					{ columnValue: "data2", columnName: "部门" },
					{ columnValue: "data3", columnName: "产品/规格" },
					{ columnValue: "data4", columnName: "变更性质" },
					{ columnValue: "data5", columnName: "变更类型" },
					{ columnValue: "data6", columnName: "申请人" },
					{ columnValue: "data7", columnName: "申请日期" },
					{ columnValue: "data8", columnName: "申请状态" },
					{ columnValue: "data9", columnName: "变更号" },
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
            }else if(type == 'add') {
			    this.title = "新增";
            }
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
.AllApply {
    .m_table {
        margin-top: 15px;
    }
}
</style>
