//左侧菜单数据
export default [
    {
        name: 'FirstPage',//路由name
        title: '主页',
        fontIcon: 'icon-shouye',
    }, {
        title: '准入申请',
        fontIcon: 'icon-tianjiazitu',
        children: [ //子菜单
            {
                name: 'AddAccess',//路由name
                title: '新建申请',
            }, {
                name: 'ApplyManage',//路由name
                title: '申请管理',
            }, {
                name: 'BatchCheck',//路由name
                title: '准入批检',
            },
        ]
    }, {
        title: '审计管理',
        fontIcon: 'icon-shenjizuoyeguanli',
        children: [ //子菜单
            {
                name: 'admit',//路由name
                title: '准入审计',
            }, {
                name: 'dynamic',//路由name
                title: '动态审计',
            }, {
                name: 'time',//路由name
                title: '定期审计',
            }, {
                name: 'AnnualPlan',//路由name
                title: '年度计划',
            }, {
                name: 'QualityReview',//路由name
                title: '质量回顾',
            },
        ]
    }, {
        title: '供应商管理',
        fontIcon: 'icon-jinpaigongyings',
        children: [ //子菜单
            {
                name: 'Prospective',//路由name
                title: '准供应商',
            }, {
                name: 'Supply',//路由name
                title: '合格供应商',
            }, {
                name: 'QualificationAge',//路由name
                title: '资质时效',
            },
        ]
    }, {
        title: '检验考察',
        fontIcon: 'icon-kaochafenxi',
        children: [ //子菜单
            {
                name: 'InspectionResult',//路由name
                title: '检验结果',
            }, {
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
        title: '审批',
        name: 'Examine',//路由name
        fontIcon: 'icon-shenpi',
    }, {
        title: '变更管理',
        fontIcon: 'icon-biangengguanli',
        children: [ //子菜单
            {
                name: 'Receive',//路由name
                title: '我要变更',
            }, {
                name: 'ReceiveRecord',//路由name
                title: '变更管理',
            }, {
                name: 'Stock',//路由name
                title: '变更台账',
            }, {
                name: 'StandBook',//路由name
                title: '文件控制',
            },
        ]
    }, {
        title: '标准管理',
        fontIcon: 'icon-biaozhunicon-',
        children: [ //子菜单
            {
                name: 'Send',//路由name
                title: '信息发布',
            }, {
                name: 'ParamSet',//路由name
                title: '参数设定',
            }, {
                name: 'QualitStandard',//路由name
                title: '质量标准',
            }, {
                name: 'QualityName',//路由name
                title: '资质名称',
            },
            // {
            //     name: 'MaterialManage',//路由name
            //     title: '物料管理',
            // }
        ]
    }, {
        title: '系统设置',
        fontIcon: 'icon-xitongguanli',
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
