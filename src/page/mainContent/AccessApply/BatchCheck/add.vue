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
        setFormData(formName){
            
        },
    },
    mounted() {
        
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/dialog.scss";
.addProject {
    h1 {
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        margin: 10px auto;
        p {
            color: #e82626;
            font-size: 12px;
            margin-top: 10px;
        }
    }
    .bottom_liet {
        height: 40px;
        line-height: 40px;
        .left {
            float: left;
            width: 60px;
        }
    }
}
</style>
