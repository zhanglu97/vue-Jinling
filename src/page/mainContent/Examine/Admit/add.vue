<template>
    <div class="addProject">
        
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
