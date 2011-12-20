var CGJGDEDJDB_Chart_options = {
      chart: {
         renderTo: 'CGJGDEDJDB_Chart_chartContainer'
      },
      title: {
         text: '圆钢采购价格和定额单价对比分析图'
      },
      subtitle: {
         text: '中建四局股份有限公司(2011年度)'
      },
      xAxis: [{
         categories: ['2011.01', '2011.02', '2011.03', '2011.04', '2011.05', '2011.06', 
            '2011.07', '2011.08', '2011.09', '2011.10', '2011.11', '2011.12']
      }],
      yAxis: [{ // Primary yAxis
         labels: {
            formatter: function() {
               return this.value;
            },
            style: {
               color: '#89A54E'
            }
         },
         title: {
            text: '采购单价',
            style: {
               color: '#89A54E'
            }
         }
      }, { // Secondary yAxis
         title: {
            text: '采购金额',
            style: {
               color: '#4572A7'
            }
         },
         labels: {
            formatter: function() {
               return this.value +'千万';
            },
            style: {
               color: '#4572A7'
            }
         },
         opposite: true
      }, { // Third yAxis
         title: {
            text: '定额单价',
            style: {
               color: '#4572A7'
            }
         },
         labels: {
            formatter: function() {
               return this.value;
            },
            style: {
               color: '#66FFFF'
            }
         }
      }],
      tooltip: {
         formatter: function() {
            return ''+
               this.x +': '+ this.y;
         }
      },
      legend: {
         layout: 'vertical',
         align: 'left',
         x: 120,
         verticalAlign: 'top',
         y: 100,
         floating: true,
         backgroundColor: '#FFFFFF'
      },
      series: [{
         name: '采购金额',
         color: '#4572A7',
         type: 'column',
         yAxis: 1,
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]      
      
      }, {
         name: '采购单价',
         color: '#89A54E',
         type: 'spline',
         yAxis: 0,
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
         name: '定额单价',
         color: '#66FFFF',
         type: 'spline',
         yAxis: 2,
         data: [3.0, 10.9, 12.5, 14.5, 16.2, 21.5, 23.2, 26.5, 23.3, 20.3, 12.9, 10.6]
      }]
   };
   
var CGJGDEDJPLL_Chart_options = {
      chart: {
         renderTo: 'CGJGDEDJPLL_Chart_chartContainer',
         defaultSeriesType: 'bar'
      },
      title: {
         text: '圆钢采购价格和定额单价偏离率分析图'
      },
      subtitle: {
         text: '中建四局股份有限公司(2011年度)'
      },
      xAxis: [{
         categories: ['4千万','3千万','2千万','1千万', '0千万'],
         reversed: false
      }, { // mirror axis on right side
         opposite: true,
         reversed: false,
         categories: ['4千万','3千万','2千万','1千万', '0千万'],
         linkedTo: 0
      }],
      yAxis: {
         title: {
            text: null
         },
         labels: {
            formatter: function(){
               return (Math.abs(this.value) / 10000000) + '千万';
            }
         },
         min: -40000000,
         max: 40000000
      },
      
      plotOptions: {
         series: {
            stacking: 'normal'
         }
      },
      
      tooltip: {
         formatter: function(){
            return '<b>'+ this.series.name +', '+ this.point.category +'</b><br/>'+
                this.point.y;
         }
      },
      
      series: [{
         name: '负',
         data: [-17461810, -18844280, -20897580, -22223620, -25374310, -25070810, -24431790,
            -26645370, -35565050, -36802310, -31430620, -27211220, -22291810, -22277680,
            -21763000, -13299680, -8368040, -3547840, -905690, -283670, -38780]
      }, {
         name: '正',
         data: [16561540, 17875640, 19816710, 21085750, 24034380, 23660030, 23014020, 25198740,
            33605960, 34934730, 30507750, 27595600, 23044440, 24265040, 25689380, 17856380,
            14471620, 10050110, 3308700, 1306320, 212080]
      }]
   };
   

var CGJGZDPLL_Chart_options = {
    chart : {
        renderTo : 'CGJGZDPLL_Chart_chartContainer',
        defaultSeriesType : 'column'
    },
    title : {
        text : '材料价格偏离率统计图'
    },
    subtitle : {
        text : '中建四局股份有限公司(2011年度)'
    },
    xAxis : {
        categories : ['2011.01', '2011.02', '2011.03', '2011.04', '2011.05', '2011.06', 
            '2011.07', '2011.08', '2011.09', '2011.10', '2011.11', '2011.12']
    },
    yAxis : {
        min : 0,
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
            return '' + this.x + ': ' + this.y;
        }
    },
    plotOptions : {
        column : {
            pointPadding : 0.2,
            borderWidth : 0
        }
    },
    series : [{
                name : '圆钢',
                data : [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name : '线材',
                data : [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name : '螺纹钢',
                data : [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }]
};
var CGJGPPWDXND_Chart_options = {
    chart : {
        renderTo : 'CGJGPPWDXND_Chart_chartContainer',
        defaultSeriesType : 'column'
    },
    title : {
        text : '材料价格品牌稳定性分析图－月度分析'
    },
    subtitle : {
        text : '中建四局股份有限公司(2011年度)'
    },
    xAxis : {
        categories : ['2011.01', '2011.02', '2011.03', '2011.04', '2011.05', '2011.06', '2011.07', '2011.08',
                '2011.09', '2011.10', '2011.11', '2011.12']
    },
    yAxis : {
        min : 0,
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
            return '' + this.x + ': ' + this.y;
        }
    },
    plotOptions : {
        column : {
            pointPadding : 0.2,
            borderWidth : 0
        }
    },
    series : [{
                name : '鞍钢',
                data : [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name : '宝钢',
                data : [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name : '邯郸钢铁',
                data : [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }]
};

var CGJGPPWDXYD_Chart_options = {
    chart : {
        renderTo : 'CGJGPPWDXYD_Chart_chartContainer',
        defaultSeriesType : 'bar'
    },
    title : {
        text : '材料价格品牌稳定性分析图－年度分析'
    },
    xAxis : {
        categories : ['宝钢', '鞍钢', '邯郸钢铁', '武钢', '沙钢']
    },
    yAxis : {
        min : 0,
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
            return '' + this.series.name + ': ' + this.y + '';
        }
    },
    plotOptions : {
        series : {
            stacking : 'normal'
        }
    },
    series : [{
                name : '最大',
                data : [5, 3, 4, 7, 2]
            }, {
                name : '最小',
                data : [2, 2, 3, 2, 1]
            }]
};   

Ext.define('DataIntegration.view.SCQS_Chart', {
            extend : 'Ext.Container',
            xtype : 'scqs_chartview',
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
                                                                options : material_classes,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGDEDJDB_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGDEDJDB_Chart_chartContainer"></div>'
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
                                                                options : material_classes,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                                id : 'CGJGDEDJPLL_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGDEDJPLL_Chart_chartContainer"></div>'
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
                                                                xtype : 'label',
                                                                cls : 'toolbar_label',
                                                                html : '材料名称'
                                                            }, {
                                                                xtype : 'selectfield',
                                                                id : 'CGJGZDPLL_materialclasscode',
                                                                options : material_classes,
                                                                cls : 'toolbar_select'
                                                            }, {
                                                            	id : 'CGJGZDPLL_action',
                                                                ui : 'action',
                                                                text : '统计'
                                                            }]
                                                }, {
                                                    html : '<div id="CGJGZDPLL_Chart_chartContainer"></div>'
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
                                    }]
                        }]
            },
            refreshChart : function(toolbarHeight) {
                setTimeout(function() {
                            var chartWidth = Ext.getBody().getWidth() - 270;
                            var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 135;

                            $('#CGJGDEDJDB_Chart_chartContainer').width(chartWidth);
                            $('#CGJGDEDJDB_Chart_chartContainer').height(chartHeight);
                            
                            $('#CGJGDEDJPLL_Chart_chartContainer').width(chartWidth);
                            $('#CGJGDEDJPLL_Chart_chartContainer').height(chartHeight);
                            
                            $('#CGJGZDPLL_Chart_chartContainer').width(chartWidth);
                            $('#CGJGZDPLL_Chart_chartContainer').height(chartHeight);
                            
                            $('#CGJGPPWDXND_Chart_chartContainer').width(chartWidth);
                            $('#CGJGPPWDXND_Chart_chartContainer').height(chartHeight); 
                            
                            $('#CGJGPPWDXYD_Chart_chartContainer').width(chartWidth);
                            $('#CGJGPPWDXYD_Chart_chartContainer').height(chartHeight);
                            
                            var mainController = dspApp.getController('Main');
                            mainController.onCGJGDEDJDBButtonTap.apply(mainController);
							mainController.onCGJGDEDJPLLButtonTap.apply(mainController);
							mainController.onCGJGZDPLLButtonTap.apply(mainController);
							mainController.onCGJGPPWDXNDButtonTap.apply(mainController);
							mainController.onCGJGPPWDXYDButtonTap.apply(mainController);
                        }, 500);

            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                mainController.getCGJGDEDJDB_orgcode().setValue('100007');
                mainController.getCGJGDEDJDB_yearcode().setValue('2011');
                mainController.getCGJGDEDJDB_materialclasscode().setValue('100101');
                
                mainController.getCGJGDEDJPLL_orgcode().setValue('100007');
                mainController.getCGJGDEDJPLL_yearcode().setValue('2011');
                mainController.getCGJGDEDJPLL_materialclasscode().setValue('100101');
                
                mainController.getCGJGZDPLL_orgcode().setValue('100007');
                mainController.getCGJGZDPLL_yearcode().setValue('2011');
                mainController.getCGJGZDPLL_materialclasscode().setValue('100101');
                
                mainController.getCGJGPPWDXND_orgcode().setValue('100007');
                mainController.getCGJGPPWDXND_yearcode().setValue('2011');
                mainController.getCGJGPPWDXND_materialclasscode().setValue('100101');
                
                mainController.getCGJGPPWDXYD_orgcode().setValue('100007');
                mainController.getCGJGPPWDXYD_yearcode().setValue('2011');
                mainController.getCGJGPPWDXYD_materialclasscode().setValue('100101');
            }
        });
