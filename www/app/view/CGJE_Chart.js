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

var CGZJEZB_Chart_options = {
    chart : {
        renderTo : 'CGZJEZB_Chart_chartContainer',
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

var CGZJEQS_Chart_options = {
      chart: {
         renderTo: 'CGZJEQS_Chart_chartContainer',
         defaultSeriesType: 'column'
      },
      title: {
         text: ''
      },
      xAxis: {
         categories: []
      },
      yAxis: {
         title: {
            text: '价格（千万）',
            style: {
               color: '#4572A7'
            }
         },
         stackLabels: {
            enabled: true,
            style: {
               fontWeight: 'bold',
               color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
         }
      },
      tooltip: {
         formatter: function() {
            return '<b>'+ this.x + '</b><br/>'+ this.y + '千万';
         }
      },
      plotOptions: {
         column: {
            stacking: 'normal',
            dataLabels: {
               enabled: true,
               color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
         }
      },
      legend: {
      	 enabled: false
      },
      series: [{
         data:[]   
      }]
};

var CGZJEYDQS_Chart_options = {
    chart : {
        renderTo : 'CGZJEYDQS_Chart_chartContainer',
        defaultSeriesType : 'spline'
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

var CGZJEJDQS_Chart_options = {
    chart : {
        renderTo : 'CGZJEJDQS_Chart_chartContainer',
        defaultSeriesType : 'spline'
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

Ext.define('DataIntegration.view.CGJE_Chart', {
            extend : 'Ext.Container',
            xtype : 'cgje_chartview',
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
                                                                cls:'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGQS_yearcode',
                                                                options : years,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGQS_materialclasscode',
                                                                options : material_classes,
                                                                cls:'toolbar_select'
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
                                                                id : 'CGZJEZB_orgcode',
                                                                options : orgs,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGZJEZB_yearcode',
                                                                options : years,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                id : 'CGZJEZB_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGZJEZB_Chart_chartContainer"></div>'
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
                                                                id : 'CGZJEQS_orgcode',
                                                                options : orgs,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGZJEQS_yearcode',
                                                                options : years,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                id : 'CGZJEQS_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGZJEQS_Chart_chartContainer"></div>'
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
                                                                id : 'CGZJEYDQS_orgcode',
                                                                options : orgs,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                id : 'CGZJEYDQS_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGZJEYDQS_Chart_chartContainer"></div>'
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
                                                                id : 'CGZJEJDQS_orgcode',
                                                                options : orgs,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '起始年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGZJEJDQS_startyearcode',
                                                                options : years,
                                                                cls:'toolbar_select'
                                                            }, {
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '终止年份'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGZJEJDQS_endyearcode',
                                                                options : years,
                                                                cls:'toolbar_select'
                                                            },{
                                                                id : 'CGZJEJDQS_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGZJEJDQS_Chart_chartContainer"></div>'
                                                }] 
                                    }]
                        }]
            },
            refreshChart : function(toolbarHeight) {
                setTimeout(function() {
                            var chartWidth = Ext.getBody().getWidth() - 270;
                            var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 135;
                            $('#CGJGQS_Chart_chartContainer').width(chartWidth);
                            $('#CGJGQS_Chart_chartContainer').height(chartHeight);

                            $('#CGZJEZB_Chart_chartContainer').width(chartWidth);
                            $('#CGZJEZB_Chart_chartContainer').height(chartHeight);
                            
                            $('#CGZJEQS_Chart_chartContainer').width(chartWidth);
                            $('#CGZJEQS_Chart_chartContainer').height(chartHeight);
                            
                            $('#CGZJEYDQS_Chart_chartContainer').width(chartWidth);
                            $('#CGZJEYDQS_Chart_chartContainer').height(chartHeight);
                            
                            $('#CGZJEJDQS_Chart_chartContainer').width(chartWidth);
                            $('#CGZJEJDQS_Chart_chartContainer').height(chartHeight);

                            var mainController = dspApp.getController('Main');
                            mainController.onCGJGQSButtonTap.apply(mainController);
							mainController.onCGZJEZBButtonTap.apply(mainController);
							mainController.onCGZJEQSButtonTap.apply(mainController);
							mainController.onCGZJEYDQSButtonTap.apply(mainController);
							mainController.onCGZJEJDQSButtonTap.apply(mainController);

                        }, 500);
            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                
                mainController.getCGJGQS_orgcode().setValue('100007');
                mainController.getCGJGQS_yearcode().setValue('2011');
                mainController.getCGJGQS_materialclasscode().setValue('100101');
                
                mainController.getCGZJEZB_orgcode().setValue('100');
                mainController.getCGZJEZB_yearcode().setValue('2011');
                
                mainController.getCGZJEQS_orgcode().setValue('100');
                mainController.getCGZJEQS_yearcode().setValue('2011');
                
                mainController.getCGZJEYDQS_orgcode().setValue('100');
                
                mainController.getCGZJEJDQS_orgcode().setValue('100');
                mainController.getCGZJEJDQS_startyearcode().setValue('2011');
                mainController.getCGZJEJDQS_endyearcode().setValue('2011');
            }
        });
