<template>
	<div class="time">
        <div v-if="isShow">
            <h1 :style="{color:$store.state.colorData.top.topBgColor}">
                <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
                定时审计
                <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            </h1>
            <!-- table -->
            <sys-table
                :isMultipleSelection="false" 
                :tableData="tableData" 
                :tableLoading="tableLoading" 
                :tableHeader="tableHeader" 
                :scopeWidth="150"
            >
                <template slot-scope="scope" slot="operate">
                    <el-button @click="goDetail(scope.row, 'see')" type="text" size="small" v-if="scope.row.data8 !== '待申请'">查看</el-button>
                    <el-button @click="goDetail(scope.row, 'edit')" type="text" size="small" v-if="scope.row.data8 !== '合格' && scope.row.data8 !== '驳回'">审批</el-button>
                </template>
            </sys-table>
        </div>

        <Approve v-if="!isShow" :detailData="detailData" @applyApprove="applyApprove"></Approve>
	</div>
</template>

<script>
import Approve from '../approve'
export default {
	data() {
		return {
            isShow: true,
			tableData: [
				{
					data1: "安徽山河制药股份有限公司", //企业名称
					data2: "原料", //物料类别
					data3: "ALSN0212", //物料编码
					data4: '磷酸钠', //物料名称
					data5: "A", //等级
					data6: "周浩", //申请人
					data7: '2020-01-01 15:05', //申请日期
					data8: "待申请", //状态
				}, {
					data1: "南京精细化工有限公司", //企业名称
					data2: "包装材料", //物料类别
					data3: "BZWS201", //物料编码
					data4: '无菌手套', //物料名称
					data5: "A", //等级
					data6: "周浩", //申请人
					data7: '', //申请日期
					data8: "审计中", //状态
				}, {
					data1: "南京天恒化工有限公司", //企业名称
					data2: "试剂", //物料类别
					data3: "SJYS01", //物料编码
					data4: '盐酸', //物料名称
					data5: "B", //等级
					data6: "林奕成", //申请人
					data7: '', //申请日期
					data8: "驳回", //状态
				}, {
					data1: "泰州羚锐制药有限公司", //企业名称
					data2: "包装材料", //物料类别
					data3: "BZWS201", //物料编码
					data4: 'BOPP膜', //物料名称
					data5: "C", //等级
					data6: "周浩", //申请人
					data7: '', //申请日期
					data8: "合格", //状态
				},
			],
			tableHeader: [],
            tableLoading: true, //table刷新
            detailData: {},
		};
	},
	methods: {
		getTableList() {
			//获取表格数据
			this.tableLoading = true;
			setTimeout(() => {
				this.tableHeader = [
					{ columnValue: "data1", columnName: "企业名称", width: 200 },
					{ columnValue: "data2", columnName: "物料类别" },
					{ columnValue: "data3", columnName: "物料编码" },
					{ columnValue: "data4", columnName: "物料名称",  },
					{ columnValue: "data5", columnName: "等级", width: 100 },
					{ columnValue: "data6", columnName: "申请人", width: 120 },
					{ columnValue: "data7", columnName: "申请日期", width: 150  },
					{ columnValue: "data8", columnName: "状态", width: 100 },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
		},
		goDetail(row, state) {
            this.isShow = false
            let applyApprove = {
                state: state,
                data: { ...row }
            }
            this.detailData = applyApprove
            this.$store.commit('SET_applyApprove', applyApprove);
		},
        applyApprove(data) {
            this.isShow = data
            this.getTableList()
        }
	},
	mounted() {
		this.getTableList(); //显示table
	},
	components: {
        Approve
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
.time {
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
