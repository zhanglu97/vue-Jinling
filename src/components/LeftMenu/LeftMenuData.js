//左侧菜单数据
export default [
    {
        name: 'FirstPage',//路由name
        title: '信息公告',
        icon: 'el-icon-s-comment',
        imgSrc: require('../../assets/img/icon1.png'),
    }, {
        title: '准入申请',
        imgSrc: require('../../assets/img/icon3.png'),
        children: [ //子菜单
            {
                name: 'AddAccess',//路由name
                title: '新建申请',
            }, {
                name: 'ApplyManage',//路由name
                title: '申请管理',
            },
        ]
    }, {
        title: '审计管理',
        imgSrc: require('../../assets/img/icon4.png'),
        children: [ //子菜单
            {
                name: 'admit',//路由name
                title: '准入审计',
            }, {
                name: 'dynamic',//路由name
                title: '动态审计',
            }, {
                name: 'time',//路由name
                title: '定时审计',
            },
        ]
    }, {
        title: '供应商管理',
        imgSrc: require('../../assets/img/icon8.png'),
        children: [ //子菜单
            {
                name: 'Supply',//路由name
                title: '合格供应商',
            }, {
                name: 'AnnualPlan',//路由name
                title: '年度计划',
            }, {
                name: 'QualityReview',//路由name
                title: '质量回顾',
            },
        ]
    }, {
        title: '检验管理',
        imgSrc: require('../../assets/img/icon6.png'),
        children: [ //子菜单
            {
                name: 'QC',//路由name
                title: 'QC检验',
            }, {
                name: 'Stability',//路由name
                title: '稳定性考察',
            }, {
                name: 'Reserved',//路由name
                title: '留样考察',
            },
        ]
    }, {
        title: '试剂管理',
        imgSrc: require('../../assets/img/icon7.png'),
        children: [ //子菜单
            {
                name: 'Receive',//路由name
                title: '领用发放',
            }, {
                name: 'ReceiveRecord',//路由name
                title: '领用记录',
            }, {
                name: 'Stock',//路由name
                title: '库存管理',
            }, {
                name: 'ReagentManage',//路由name
                title: '试剂管理',
            }, {
                name: 'StandBook',//路由name
                title: '试剂台账',
            },
        ]
    }, {
        title: '标准管理',
        imgSrc: require('../../assets/img/icon2.png'),
        children: [ //子菜单
            {
                name: 'QualitStandard',//路由name
                title: '质量标准',
            }, {
                name: 'ParamSet',//路由name
                title: '参数设定',
            }, {
                name: 'QualityName',//路由name
                title: '资质认证',
            }, {
                name: 'MaterialManage',//路由name
                title: '物料管理',
            }
        ]
    }, {
        title: '系统设置',
        imgSrc: require('../../assets/img/icon5.png'),
        children: [ //子菜单
            {
                name: 'Organization',//路由name
                title: '组织架构',
            }, {
                name: 'Power',//路由name
                title: '角色权限',
            }, {
                name: 'User',//路由name
                title: '用户管理',
            }, {
                name: 'DataCopy',//路由name
                title: '数据备份',
            }, {
                name: 'SystemLog',//路由name
                title: '系统日志',
            }
        ]
    },
]
