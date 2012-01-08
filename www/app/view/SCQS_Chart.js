var CGJGDEDJDB_Chart_options = {
    chart : {
        renderTo : 'CGJGDEDJDB_Chart_chartContainer'
    },
    title : {
        text : ''
    },
    subtitle : {
        text : ''
    },
    xAxis : [{
                categories : []
            }],
    yAxis : [{ // Primary yAxis
        labels : {
            formatter : function() {
                return this.value + "元";
            },
            style : {
                color : '#89A54E'
            }
        },
        title : {
            text : '单价',
            style : {
                color : '#89A54E'
            }
        }
    }, {   // Secondary yAxis
                title : {
                    text : '采购金额',
                    style : {
                        color : '#4572A7'
                    }
                },
                labels : {
                    formatter : function() {
                        return this.value/1000000 + '百万';
                    },
                    style : {
                        color : '#4572A7'
                    }
                },
                opposite : true
            }],
    tooltip : {
        formatter : function() {
        	if(this.series.name === '采购金额'){
        		return '采购月份:' + this.x + '<br/>采购金额:'+ toDecimal(this.y/1000000) + '百万';
        	} else if(this.series.name === '采购单价'){
        		return '采购月份:' + this.x + '<br/>采购单价:' + toDecimal(this.y) + '元';
        	} else if(this.series.name === '定额单价'){
        		return '采购月份:' + this.x + '<br/>定额单价:' + toDecimal(this.y) + '元';
        	}
        }
    },
    legend : {
        layout : 'vertical',
        align : 'left',
        x : 120,
        verticalAlign : 'top',
        y : 100,
        floating : true,
        backgroundColor : '#FFFFFF'
    },
    series : [{
                name : '采购金额',
                color : '#4572A7',
                type : 'column',
                yAxis : 1,
                data : []

            }, {
                name : '采购单价',
                color : '#89A54E',
                type : 'spline',
                yAxis : 0,
                data : []
            }, {
                name : '定额单价',
                color : '#66FFFF',
                type : 'spline',
                yAxis : 0,
                data : []
            }]
};

var CGJGDEDJPLL_Chart_options = {
    chart : {
        renderTo : 'CGJGDEDJPLL_Chart_chartContainer',
        defaultSeriesType : 'bar'
    },
    title : {
        text : ''
    },
    subtitle : {
        text : ''
    },
    xAxis : [{
                categories : ['0-4', '5-9', '10-14', '15-19',
			      '20-24', '25-29', '30-34', '35-39', '40-44',
			      '45-49', '50-54', '55-59', '60-64', '65-69',
			      '70-74', '75-79', '80-84', '85-89', '90-94',
			      '95-99', '100 +'],
                reversed : false
            }, { // mirror axis on right side
                opposite : true,
                reversed : false,
                categories : ['0-4', '5-9', '10-14', '15-19',
			      '20-24', '25-29', '30-34', '35-39', '40-44',
			      '45-49', '50-54', '55-59', '60-64', '65-69',
			      '70-74', '75-79', '80-84', '85-89', '90-94',
			      '95-99', '100 +'],
                linkedTo : 0
            }],
    yAxis : [{
        title : {
            text : null
        },
        labels : {
            formatter : function() {
                return (Math.abs(this.value) / 10000000) + "千万";
            }
        },
        min : -40000000,
        max : 40000000
    }],

    plotOptions : {
        series : {
            stacking : 'normal'
        }
    },

    tooltip : {
        formatter : function() {
            return '<b>单价偏离百分率区间：(' + this.series.name +')'+ this.point.category + '</b><br/>采购金额：' + Math.abs(toDecimal(this.point.y/1000000))+'百万';
        }
    },

    series : [{
                name : '负',
                data : []
            }, {
                name : '正',
                data : []
            }]
};

var CGJGZDPLL_Chart_options = {
    chart : {
        renderTo : 'CGJGZDPLL_Chart_chartContainer',
        defaultSeriesType : 'column'
    },
    title : {
        text : ''
    },
    subtitle : {
        text : ''
    },
    xAxis : [{
        categories : []
    }],
    yAxis : {
        title : {
            text : '偏离率 (％)'
        }
    },
    legend : {
        layout : 'vertical',
        backgroundColor : '#FFFFFF',
        align : 'left',
        verticalAlign : 'top',
        x : 100,
        y : 20,
        floating : true,
        shadow : true
    },
    tooltip : {
        formatter : function() {
            return '类别：' + this.series.name + '<br/>月份：' + this.x + '<br/>最大偏离率： ' + toDecimal(this.y);
        }
    },
    plotOptions : {
        column : {
            pointPadding : 0.2,
            borderWidth : 0
        }
    },
    series : []
};
var CGJGPPWDXYD_Chart_options = {
    chart : {
        renderTo : 'CGJGPPWDXYD_Chart_chartContainer',
        defaultSeriesType : 'column'
    },
    title : {
        text : ''
    },
    subtitle : {
        text : ''
    },
    xAxis : [{
        categories : []
    }],
    yAxis : {
        title : {
            text : '偏离率 (％)'
        }
    },
    legend : {
        layout : 'vertical',
        backgroundColor : '#FFFFFF',
        align : 'left',
        verticalAlign : 'top',
        x : 100,
        y : 70,
        floating : true,
        shadow : true
    },
    tooltip : {
        formatter : function() {
            return '品牌：' + this.series.name + '<br/>月份：' + this.x + '<br/>月度平均偏离率: ' + toDecimal(this.y);
        }
    },
    plotOptions : {
        column : {
            pointPadding : 0.2,
            borderWidth : 0
        }
    },
    series : []
};

var CGJGPPWDXND_Chart_options = {
    chart : {
        renderTo : 'CGJGPPWDXND_Chart_chartContainer',
        defaultSeriesType : 'column'
    },
    title : {
        text : '材料价格品牌稳定性分析图－年度分析'
    },
    subtitle : {
        text : ''
    },
    xAxis : [{
        categories : []
    }],
    yAxis : {
        title : {
            text : '偏离率(％)'
        }
    },
    legend : {
        backgroundColor : '#FFFFFF',
        reversed : true
    },
    tooltip : {
        formatter : function() {
            return '品牌：' + this.x + '<br/>' + this.series.name + ': ' + toDecimal(this.y) + '';
        }
    },
    plotOptions : {
        column : {
            pointPadding : 0.2,
            borderWidth : 0
        }
    },
    series : [{
                name : '最小偏离',
                data : [5, 3, 4, 7, 2]
            }, {
                name : '最大偏离',
                data : [2, 2, 3, 2, 1]
            }]
};

Ext.define('DataIntegration.view.SCQS_Chart', {
            extend : 'Ext.Container',
            xtype : 'scqs_chartview',
            loaded : false,
            config : {
                layout : 'fit',
                items : [{
                            xtype : 'carousel',
                            activeItem : 0,
                            defaults : {
                                cls : 'card'
                            },
                            items : [{
                                        layout : 'fit',
                                        items : [{
                                                    xtype : 'toolbar',
                                                    docked : 'top',
                                                    items : [{
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '组织机构'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGDEDJDB_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGDEDJDB_yearcode',
                                                                options : years,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGDEDJDB_materialclasscode',
                                                                options : material_classes_CGJGDEDJDB,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGDEDJDB_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGDEDJDB_Chart_chartContainer"></div>'
                                                }]
                                    }, {
                                        layout : 'fit',
                                        items : [{
                                                    xtype : 'toolbar',
                                                    docked : 'top',
                                                    items : [{
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '组织机构'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGDEDJPLL_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGDEDJPLL_yearcode',
                                                                options : years,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGDEDJPLL_materialclasscode',
                                                                options : material_classes_CGJGDEDJDB,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGDEDJPLL_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGDEDJPLL_Chart_chartContainer"></div>'
                                                }]
                                    }, {
                                        layout : 'fit',
                                        items : [{
                                                    xtype : 'toolbar',
                                                    docked : 'top',
                                                    items : [{
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '组织机构'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGZDPLL_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGZDPLL_yearcode',
                                                                options : years,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGZDPLL_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGZDPLL_Chart_chartContainer"></div>'
                                                }]
                                    }, {
                                        layout : 'fit',
                                        items : [{
                                                    xtype : 'toolbar',
                                                    docked : 'top',
                                                 items : [  {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '组织机构'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGPPWDXYD_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGPPWDXYD_yearcode',
                                                                options : years,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGPPWDXYD_materialclasscode',
                                                                options : material_classes,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGPPWDXYD_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGPPWDXYD_Chart_chartContainer"></div>'
                                                }]
                                    }, {
                                        layout : 'fit',
                                        items : [{
                                                    xtype : 'toolbar',
                                                    docked : 'top',
                                                    items : [{
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '组织机构'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGPPWDXND_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGPPWDXND_yearcode',
                                                                options : years,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGPPWDXND_materialclasscode',
                                                                options : material_classes,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGPPWDXND_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGPPWDXND_Chart_chartContainer"></div>'
                                                }]
                                    }]
                        }]
            },
            switchPanel : function(toolbarHeight) {
                var me = this;
                if (me.loaded === false) {
                    setTimeout(function() {
                                var chartWidth = Ext.getBody().getWidth() - 270;
                                var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 135;

                                $('#CGJGDEDJDB_Chart_chartContainer').width(chartWidth);
                                $('#CGJGDEDJDB_Chart_chartContainer').height(chartHeight);

                                $('#CGJGDEDJPLL_Chart_chartContainer').width(chartWidth);
                                $('#CGJGDEDJPLL_Chart_chartContainer').height(chartHeight);

                                $('#CGJGZDPLL_Chart_chartContainer').width(chartWidth);
                                $('#CGJGZDPLL_Chart_chartContainer').height(chartHeight);
                                
                                $('#CGJGPPWDXYD_Chart_chartContainer').width(chartWidth);
                                $('#CGJGPPWDXYD_Chart_chartContainer').height(chartHeight);

                                $('#CGJGPPWDXND_Chart_chartContainer').width(chartWidth);
                                $('#CGJGPPWDXND_Chart_chartContainer').height(chartHeight);

                                var mainController = dspApp.getController('Main');
                                mainController.onCGJGDEDJDBButtonTap.apply(mainController);
                                mainController.onCGJGDEDJPLLButtonTap.apply(mainController);
                                mainController.onCGJGZDPLLButtonTap.apply(mainController);
                                mainController.onCGJGPPWDXYDButtonTap.apply(mainController);
                                mainController.onCGJGPPWDXNDButtonTap.apply(mainController);
                                me.loaded = true;
                            }, 500);
                }

            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                mainController.getCGJGDEDJDB_orgcode().setValue('100007');
                mainController.getCGJGDEDJDB_yearcode().setValue('2011');
                mainController.getCGJGDEDJDB_materialclasscode().setValue('100102');

                mainController.getCGJGDEDJPLL_orgcode().setValue('100007');
                mainController.getCGJGDEDJPLL_yearcode().setValue('2011');
                mainController.getCGJGDEDJPLL_materialclasscode().setValue('100102');

                mainController.getCGJGZDPLL_orgcode().setValue('100007');
                mainController.getCGJGZDPLL_yearcode().setValue('2011');
                
                mainController.getCGJGPPWDXYD_orgcode().setValue('100007');
                mainController.getCGJGPPWDXYD_yearcode().setValue('2011');
                mainController.getCGJGPPWDXYD_materialclasscode().setValue('100102');

                mainController.getCGJGPPWDXND_orgcode().setValue('100007');
                mainController.getCGJGPPWDXND_yearcode().setValue('2011');
                mainController.getCGJGPPWDXND_materialclasscode().setValue('100102');
            }
        });
