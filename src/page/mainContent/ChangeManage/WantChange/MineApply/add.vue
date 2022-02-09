<template>
    <div class="addProject">
        
        <!-- <div class="bottom_bt">
            <p class="zll-botton Info" v-if="titleTxt !== '查看'" @click="submitFun('fail')">驳 回</p>
            <p class="zll-botton goback" v-if="titleTxt !== '查看'" @click="submitFun('success')">通 过</p>
            <p class="zll-botton" v-else @click="submitFun('close')">确 定</p>
        </div> -->
    </div>
</template>
<script>
export default {
    props: ['titleTxt'],
    data () {
        return {
           
        }
    },
    methods: {
        submitFun(type) {
            this.$emit('addForm',false)
        }
    },
    mounted() {
        if(this.titleTxt == '查看') {
            this.isdisabled = true
        }else {
            this.isdisabled = false
        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/style/dialog.scss";
    .bottom_bt {
        display: flex;
        margin-top: 15px;
        .zll-botton {
            width: 80px;
        }
    }
</style>
