<template>
	<div class="MaterialManage">
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

		<!-- 弹框 -->
		<div class="zll-dialog">
			<popout :title="'动态 · ' + title" :visible.sync="addDialog" v-if="addDialog">
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
					data12: "", //状态
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
					{ columnValue: "data12", columnName: "状态" },
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
		edit(row) {
			this.addDialog = true;
			this.title = "编辑";
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
