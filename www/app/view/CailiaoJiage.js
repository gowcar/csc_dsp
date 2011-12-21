var CGJGQS_Chart_options = {
    chart : {
        renderTo : 'CGJGQS_Chart_chartContainer',
        defaultSeriesType : 'line'
    },
    title : {
        text : ''
    },
    xAxis : [{
                categories : []
            }],
    yAxis : {
        title : {
            text : '金额（千万）',
            style : {
                color : '#4572A7'
            }
        },
        labels : {
            formatter : function() {
                return this.value;
            },
            style : {
                color : '#4572A7'
            }
        }

    },
    tooltip : {
        formatter : function() {
            return '<b>' + this.x + '</b><br/>' + toDecimal(this.y) + '千万';
        }
    },
    legend : {
        enabled : false
    },
    series : [{
                data : []
            }]
};

var CLSLT10_Chart_options = {
    chart : {
        renderTo : 'CLSLT10_Chart_chartContainer',
        defaultSeriesType : 'column'
    },
    title : {
        text : ''
    },
    xAxis : [{
        categories : []
    }],
    yAxis : {
        title : {
            text : '数量(千万)',
            style : {
                color : '#4572A7'
            }
        },
        stackLabels : {
            enabled : true,
            style : {
                fontWeight : 'bold',
                color : (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    tooltip : {
        formatter : function() {
            return '<b>' + this.x + '</b><br/>' + this.y + '千万';
        }
    },
    plotOptions : {
        column : {
            stacking : 'normal',
            dataLabels : {
                enabled : true,
                color : (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    legend : {
        enabled : false
    },
    series : [{
                data : []
            }]
};

var CLSLZB_Chart_options = {
    chart : {
        renderTo : 'CLSLZB_Chart_chartContainer',
        plotBackgroundColor : null,
        plotBorderWidth : null,
        plotShadow : false
    },
    title : {
        text : ''
    },
    tooltip : {
        formatter : function() {
            return '<b>' + this.point.name + '</b>: ' + toDecimal(this.percentage) + ' %';
        }
    },
    plotOptions : {
        pie : {
            allowPointSelect : true,
            cursor : 'pointer',
            dataLabels : {
                enabled : true,
                color : '#000000',
                connectorColor : '#000000',
                formatter : function() {
                    return '<b>' + this.point.name + '</b>: ' + toDecimal(this.percentage) + ' %';
                }
            },
            showInLegend : true
        }
    },
    series : [{
                type : 'pie',
                data : []
            }]
};

Ext.define('DataIntegration.view.CailiaoJiage', {
            extend : 'Ext.Container',
            xtype : 'cailiaojiageview',
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
                                                                id : 'CGJGQS_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGQS_yearcode',
                                                                options : years,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGQS_materialclasscode',
                                                                options : material_classes,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGQS_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGQS_Chart_chartContainer"></div>'
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
                                                                id : 'CLSLT10_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CLSLT10_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CLSLT10_Chart_chartContainer"></div>'
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
                                                                id : 'CLSLZB_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CLSLZB_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CLSLZB_Chart_chartContainer"></div>'
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

                                $('#CGJGQS_Chart_chartContainer').width(chartWidth);
                                $('#CGJGQS_Chart_chartContainer').height(chartHeight);

                                $('#CLSLT10_Chart_chartContainer').width(chartWidth);
                                $('#CLSLT10_Chart_chartContainer').height(chartHeight);

                                $('#CLSLZB_Chart_chartContainer').width(chartWidth);
                                $('#CLSLZB_Chart_chartContainer').height(chartHeight);

                                var mainController = dspApp.getController('Main');
                                mainController.onCGJGQSButtonTap.apply(mainController);
                                mainController.onCLSLT10ButtonTap.apply(mainController);
                                mainController.onCLSLZBButtonTap.apply(mainController);
                                me.loaded = true;
                            }, 500);
                }
            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                mainController.getCGJGQS_orgcode().setValue('100007');
                mainController.getCGJGQS_yearcode().setValue('2011');
                mainController.getCGJGQS_materialclasscode().setValue('100101');
                mainController.getCLSLT10_orgcode().setValue('100');
                mainController.getCLSLZB_orgcode().setValue('100');
            }
        });
