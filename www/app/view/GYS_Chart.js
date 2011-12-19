var GYSSLTJ_Chart_options = {
      chart: {
         renderTo: 'GYSSLTJ_Chart_chartContainer',
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
            text: '数量(个)',
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
            return '<b>'+ this.x + '</b><br/>'+ this.y + '个';
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

var GYSSLZB_Chart_options = {
    chart : {
        renderTo : 'GYSSLZB_Chart_chartContainer',
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

Ext.define('DataIntegration.view.GYS_Chart', {
            extend : 'Ext.Container',
            xtype : 'gys_chartview',
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
                                                                id : 'GYSSLTJ_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'GYSSLTJ_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="GYSSLTJ_Chart_chartContainer"></div>'
                                                }]
                                    },{
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
                                                                id : 'GYSSLZB_orgcode',
                                                                options : orgs,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'GYSSLZB_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="GYSSLZB_Chart_chartContainer"></div>'
                                                }]
                                    }]
                        }]
            },
            refreshChart : function(toolbarHeight) {
                setTimeout(function() {
                            var chartWidth = Ext.getBody().getWidth() - 270;
                            var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 135;
                            
                            $('#GYSSLTJ_Chart_chartContainer').width(chartWidth);
                            $('#GYSSLTJ_Chart_chartContainer').height(chartHeight);
                            
                            $('#GYSSLZB_Chart_chartContainer').width(chartWidth);
                            $('#GYSSLZB_Chart_chartContainer').height(chartHeight);

                            var mainController = dspApp.getController('Main');
                            mainController.onGYSSLTJButtonTap.apply(mainController);
                            mainController.onGYSSLZBButtonTap.apply(mainController);
                        }, 500);
            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                mainController.getGYSSLTJ_orgcode().setValue('100');
                mainController.getGYSSLZB_orgcode().setValue('100');
            }
        });
