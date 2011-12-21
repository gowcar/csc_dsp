var XMSXSLTJ_Chart_options = {
    chart : {
        renderTo : 'XMSXSLTJ_Chart_chartContainer',
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
            text : '数量(个)',
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
            return '<b>' + this.x + '</b><br/>' + this.y + '个';
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

var XMSXSLZB_Chart_options = {
    chart : {
        renderTo : 'XMSXSLZB_Chart_chartContainer',
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

Ext.define('DataIntegration.view.PTYX_Chart', {
            extend : 'Ext.Container',
            xtype : 'ptyx_chartview',
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
                                                                id : 'XMSXSLTJ_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'XMSXSLTJ_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="XMSXSLTJ_Chart_chartContainer"></div>'
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
                                                                id : 'XMSXSLZB_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'XMSXSLZB_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="XMSXSLZB_Chart_chartContainer"></div>'
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

                                $('#XMSXSLTJ_Chart_chartContainer').width(chartWidth);
                                $('#XMSXSLTJ_Chart_chartContainer').height(chartHeight);

                                $('#XMSXSLZB_Chart_chartContainer').width(chartWidth);
                                $('#XMSXSLZB_Chart_chartContainer').height(chartHeight);

                                var mainController = dspApp.getController('Main');
                                mainController.onXMSXSLTJButtonTap.apply(mainController);
                                mainController.onXMSXSLZBButtonTap.apply(mainController);
                                me.loaded = true;
                            }, 500);
                }
            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                mainController.getXMSXSLTJ_orgcode().setValue('100');
                mainController.getXMSXSLZB_orgcode().setValue('100');
            }
        });
