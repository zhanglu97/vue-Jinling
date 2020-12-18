<template>
    <div class="ParamSet">
        <div class="list" v-for="(item, index) in paramList" :key="index"
            @mouseenter="showActive(index,1)"
            @mouseleave="showActive(index,0)"
            @click="edit(item)"
        >
            <img v-show="item.active === 0" :src="item.icon" />
            <img v-show="item.active === 1" :src="item.hovericon" />
            <p class="name">{{ item.name }}</p>
        </div>
        <div style="clear: both"></div>

        <div class="zll-dialog">
            <popout :title="title" :visible.sync="addDialog" v-if="addDialog" >
                <material-category ref="add" slot="content" @addForm="getFormData" v-if="title == '物料类别'"></material-category>
                <material-grade ref="add" slot="content" @addForm="getFormData" v-if="title == '物料等级'"></material-grade>
                <quality-certification ref="add" slot="content" @addForm="getFormData" v-if="title == '资质认证'"></quality-certification>
                <inspect-set ref="add" slot="content" @addForm="getFormData" v-if="title == '检项管理'"></inspect-set>
                <reagent-category ref="add" slot="content" @addForm="getFormData" v-if="title == '试剂类别'"></reagent-category>
                <temperature-humidity ref="add" slot="content" @addForm="getFormData" v-if="title == '温湿度'"></temperature-humidity>
                <time-limit ref="add" slot="content" @addForm="getFormData" v-if="title == '考察时限'"></time-limit>
                <package-category ref="add" slot="content" @addForm="getFormData" v-if="title == '包装类别'"></package-category>
                <review-project ref="add" slot="content" @addForm="getFormData" v-if="title == '考察项目'"></review-project>
                <template slot="bottom">
                    <p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">确 定</p>
                </template>
            </popout>
        </div>
    </div>
</template>

<script>
import materialCategory from './materialCategory'
import materialGrade from './materialGrade'
import qualityCertification from './qualityCertification'
import inspectSet from './inspectSet'
import reagentCategory from './reagentCategory'
import temperatureHumidity from './temperatureHumidity'
import timeLimit from './timeLimit'
import packageCategory from './packageCategory'
import reviewProject from './reviewProject'
export default {
    data() {
        return {
            title: '',
            paramList: [
                {
                    name: "物料类别",
                    icon: require("@/assets/img/paramset1.png"),
                    hovericon: require("@/assets/img/paramset1-2.png"),
                    active: 0,
                }, {
                    name: "物料等级",
                    icon: require("@/assets/img/paramset2.png"),
                    hovericon: require("@/assets/img/paramset2-2.png"),
                    active: 0,
                }, {
                    name: "资质认证",
                    icon: require("@/assets/img/paramset3.png"),
                    hovericon: require("@/assets/img/paramset3-2.png"),
                    active: 0,
                }, {
                    name: "检项管理",
                    icon: require("@/assets/img/paramset4.png"),
                    hovericon: require("@/assets/img/paramset4-2.png"),
                    active: 0,
                }, {
                    name: "试剂类别",
                    icon: require("@/assets/img/paramset5.png"),
                    hovericon: require("@/assets/img/paramset5-2.png"),
                    active: 0,
                    height: '650px',
                }, {
                    name: "温湿度",
                    icon: require("@/assets/img/paramset6.png"),
                    hovericon: require("@/assets/img/paramset6-2.png"),
                    active: 0,
                }, {
                    name: "考察时限",
                    icon: require("@/assets/img/paramset7.png"),
                    hovericon: require("@/assets/img/paramset7-2.png"),
                    active: 0,
                }, {
                    name: "包装类别",
                    icon: require("@/assets/img/paramset8.png"),
                    hovericon: require("@/assets/img/paramset8-2.png"),
                    active: 0,
                }, {
                    name: "考察项目",
                    icon: require("@/assets/img/paramset9.png"),
                    hovericon: require("@/assets/img/paramset9-2.png"),
                    active: 0,
                }
            ],
            addDialog: false,
        };
    },
    methods: {
        showActive(index, active) {
            this.paramList[index].active = active
        },
        edit(val) {
            this.title = val.name
            this.addDialog = true
        },
        getFormData(data){
            console.log(data)
            this.addDialog = false
        },
    },
    components: {
        materialCategory, 
        materialGrade, 
        qualityCertification, 
        inspectSet, 
        reagentCategory, 
        temperatureHumidity, 
        timeLimit,
        packageCategory,
        reviewProject
    }
};
</script>

<style lang="scss" scoped>
.ParamSet {
    margin-top: 50px;
    .list {
        float: left;
        cursor: pointer;
        width: 100px;
        margin: 15px 20px;
        border-radius: 15px;
        padding: 10px 0;
        border: 1px solid #ffffff;
        img {
            width: 50px;
            height: 50px;
            display: inherit;
            margin: 0 auto;
        }
        .name {
            margin-top: 10px;
            text-align: center;
        }
        &:hover {
            box-shadow: 0 0 10px #ccc;
            transition: all .3s;
            border: 1px solid #e26835;
            .name {
                color: #e26835;
            }
        }
    }
}
</style>