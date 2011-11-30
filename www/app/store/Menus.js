Ext.define('DataIntegration.store.Menus', {
    extend  : 'Ext.data.TreeStore',
    model   : 'DataIntegration.model.Menu',
    requires: ['DataIntegration.model.Menu'],
    root: {
        items: [{
            text : '报表分析',
            cls  : 'launchscreen',
            items: [{
                text  : '采购业务',
                items : [{
                	text  : '采购金额',
                	leaf  : true,
                	view  : 'CaigouJine'
                }, {
                	text  : '材料价格',
                	leaf  : true,
                	view  : 'CailiaoJiage'
                }, {
                	text  : '供应商增长',
                	leaf  : true,
                	view  : 'CGJE_Chart'
                }]
            }, {
                text  : '平台运行',
                items  : [{
                	text  : '项目上线数量',
                	leaf  : true,
                	view  : 'CommingSoon'
                },{
                	text  : '合同上线数量',
                	leaf  : true,
                	view  : 'CommingSoon'
                },{
                	text  : '账号增长情况',
                	leaf  : true,
                	view  : 'CommingSoon'
                }]
            },{
            	text  : '市场趋势',
                items  : [{
                	text  : '网价报表(走势图)',
                	leaf  : true,
                	view  : 'CommingSoon'
                },{
                	text  : '采购单价报表(走势图)',
                	leaf  : true,
                	view  : 'CommingSoon'
                },{
                	text  : '信息价报表(走势图)',
                	leaf  : true,
                	view  : 'CommingSoon'
                }]
            }]
        },{
        	text  : '指标分析',
        	items : [{
        		text  : '集中采购业务指标',
        		items : [{
        			text  : '集中采购金额指标',
        			leaf  : true,
                	view  : 'CommingSoon'
        		},{
        			text  : '集中采购材料种类指标',
        			leaf  : true,
                	view  : 'CommingSoon'
        		},{
        			text  : '集中采购项目指标',
        			leaf  : true,
                	view  : 'CommingSoon'
        		}]
        	},{
        		text  : '采购绩效指标',
        		items : [{
        			text  : '价格指标',
        			leaf  : true,
                	view  : 'CommingSoon'
        		},{
        			text  : '验收计量指标',
        			leaf  : true,
                	view  : 'CommingSoon'
        		},{
        			text  : '订单完成率',
        			leaf  : true,
                	view  : 'CommingSoon'
        		},{
        			text  : '价格稳定性',
        			leaf  : true,
                	view  : 'CommingSoon'
        		}]
        	}]
        },{
        	text  : '因素分析',
        	items : [{
        		text  : '财务费用对价格趋势的影响',
        		leaf  : true
        	},{
        		text  : '资源市场对价格趋势的影响',
        		leaf  : true
        	},{
        		text  : '运输成本对价格趋势的影响',
        		leaf  : true
        	},{
        		text  : '材料使用率对价格稳定性的影响',
        		leaf  : true
        	}]
        }]
    },
    defaultRootProperty: 'items'
});
