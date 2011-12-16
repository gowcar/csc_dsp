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
                            $('#GYSSLZB_Chart_chartContainer').width(chartWidth);
                            $('#GYSSLZB_Chart_chartContainer').height(chartHeight);

                            var mainController = dspApp.getController('Main');
                            mainController.onGYSSLZBButtonTap.apply(mainController);
                        }, 500);
            },
            initialize : function() {
                var mainController = dspApp.getController('Main');
                mainController.getGYSSLZB_orgcode().setValue('100');
            }
        });
