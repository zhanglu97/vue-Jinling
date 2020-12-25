<template>
    <div class="Organization">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">组织架构</h1>
        <div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 200px) !important"></div>
			<div class="addNew" style="width: 200px !important">
                <span @click="addOrganization()"><i class="el-icon-circle-plus-outline"></i> 新建组织架构</span>
			</div>
		</div>
        <div class="tree mytree">
            <img class="tree_icon" src="@/assets/img/tree_icon.png">
            <el-tree :data="data" 
                :props="defaultProps"
                show-checkbox
                highlight-current
            ></el-tree>
        </div>
        <!-- 新建管理角色弹框 -->
        <div class="zll-dialog">
            <popout :title="'组织架构 · ' + type " :visible.sync="addDialog" v-if="addDialog" class="minSize">
                <Add ref="add" slot="content" :type="type" @addForm="getFormData"></Add>
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
                type: '',
                addDialog: false, //角色弹框
                data: [{
                    label: '质量部',
                    children: [{
                        label: '审计组',
                    }, {
                        label: '检验组',
                    }, {
                        label: '考核组',
                    }]
                }, {
                    label: '生产部',
                    children: [{
                        label: '审计组',
                    },]
                }, {
                    label: '采购部',
                    children: [{
                        label: '审计组',
                    },]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            addOrganization(){
                this.addDialog = true
                this.type = "新建"
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
        },
        mounted(){
        },
        components: {
            Add,
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
.Organization{
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
    .tree {
        margin-left: 200px;
        margin-top: 50px;
        position: relative;
        border-left: 1px solid #dcdfe6;
        .tree_icon {
            position: absolute;
            left: -150px;
            top: -40px;
            width: 150px;
            padding-bottom: 10px;
            border-bottom: 1px solid #dcdfe6;
        }
    }
}
</style>