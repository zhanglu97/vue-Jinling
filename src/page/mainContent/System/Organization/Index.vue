<template>
    <div class="app-container Organization">
        <div class="Search_Top_Input">
			<div class="addNew">
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