Ext.override(Ext.NestedList, {
            getItemTextTpl : function(node) {
                return '<div style="float:left;"><img src="{icon}" width="20" height="20"/></div><div style="float:left;padding-left:10px">{text}</div>';
            }
        });

Ext.define('DataIntegration.controller.Main', {
            extend : 'Ext.app.Controller',
            config : {
                profile : Ext.os.deviceType.toLowerCase()
            },
            views : ['Viewport', 'CailiaoJiage', 'CGJE_Chart', 'GYS_Chart', 'PTYX_Chart', 'SCQS_Chart'],
            stores : ['Menus'],
            refs : [{
                        ref : 'main',
                        selector : 'mainview',
                        xtype : 'mainview',
                        autoCreate : true
                    }, {
                        ref : 'loginpanel',
                        selector : '#loginpanel'
                    }, {
                        ref : 'username',
                        selector : '#username'
                    }, {
                        ref : 'password',
                        selector : '#password'
                    }, {
                        ref : 'CGJGQS_orgcode',
                        selector : '#CGJGQS_orgcode'
                    }, {
                        ref : 'CGJGQS_yearcode',
                        selector : '#CGJGQS_yearcode'
                    }, {
                        ref : 'CGJGQS_materialclasscode',
                        selector : '#CGJGQS_materialclasscode'
                    }, {
                        ref : 'CGZJEZB_orgcode',
                        selector : '#CGZJEZB_orgcode'
                    }, {
                        ref : 'CGZJEZB_yearcode',
                        selector : '#CGZJEZB_yearcode'
                    }, {
                        ref : 'CGZJEQS_orgcode',
                        selector : '#CGZJEQS_orgcode'
                    }, {
                        ref : 'CGZJEQS_yearcode',
                        selector : '#CGZJEQS_yearcode'
                    }, {
                        ref : 'CGZJEYDQS_orgcode',
                        selector : '#CGZJEYDQS_orgcode'
                    }, {
                        ref : 'CGZJEJDQS_orgcode',
                        selector : '#CGZJEJDQS_orgcode'
                    }, {
                        ref : 'CGZJEJDQS_startyearcode',
                        selector : '#CGZJEJDQS_startyearcode'
                    }, {
                        ref : 'CGZJEJDQS_endyearcode',
                        selector : '#CGZJEJDQS_endyearcode'
                    }, {
                        ref : 'CLSLT10_orgcode',
                        selector : '#CLSLT10_orgcode'
                    }, {
                        ref : 'CLSLZB_orgcode',
                        selector : '#CLSLZB_orgcode'
                    }, {
                        ref : 'GYSSLTJ_orgcode',
                        selector : '#GYSSLTJ_orgcode'
                    }, {
                        ref : 'GYSSLZB_orgcode',
                        selector : '#GYSSLZB_orgcode'
                    }, {
                        ref : 'XMSXSLTJ_orgcode',
                        selector : '#XMSXSLTJ_orgcode'
                    }, {
                        ref : 'XMSXSLZB_orgcode',
                        selector : '#XMSXSLZB_orgcode'
                    }, {
                        ref : 'CGJGDEDJDB_orgcode',
                        selector : '#CGJGDEDJDB_orgcode'
                    }, {
                        ref : 'CGJGDEDJDB_yearcode',
                        selector : '#CGJGDEDJDB_yearcode'
                    }, {
                        ref : 'CGJGDEDJDB_materialclasscode',
                        selector : '#CGJGDEDJDB_materialclasscode'
                    }, {
                        ref : 'CGJGDEDJPLL_orgcode',
                        selector : '#CGJGDEDJPLL_orgcode'
                    }, {
                        ref : 'CGJGDEDJPLL_yearcode',
                        selector : '#CGJGDEDJPLL_yearcode'
                    }, {
                        ref : 'CGJGDEDJPLL_materialclasscode',
                        selector : '#CGJGDEDJPLL_materialclasscode'
                    }, {
                        ref : 'CGJGZDPLL_orgcode',
                        selector : '#CGJGZDPLL_orgcode'
                    }, {
                        ref : 'CGJGZDPLL_yearcode',
                        selector : '#CGJGZDPLL_yearcode'
                    }, {
                        ref : 'CGJGPPWDXYD_orgcode',
                        selector : '#CGJGPPWDXYD_orgcode'
                    }, {
                        ref : 'CGJGPPWDXYD_yearcode',
                        selector : '#CGJGPPWDXYD_yearcode'
                    }, {
                        ref : 'CGJGPPWDXND_orgcode',
                        selector : '#CGJGPPWDXND_orgcode'
                    }, {
                        ref : 'CGJGPPWDXND_yearcode',
                        selector : '#CGJGPPWDXND_yearcode'
                    }],
            init : function() {
                console.log('Init Main controller');
                Ext.get(this.getMain().getEl().query('.login-btn')[0]).addListener('click', this.authorize, this);
                // this.authorize();
                this.control({
                            '#CGJGQS_action' : {
                                tap : this.onCGJGQSButtonTap
                            },
                            '#CGZJEZB_action' : {
                                tap : this.onCGZJEZBButtonTap
                            },
                            '#CGZJEQS_action' : {
                                tap : this.onCGZJEQSButtonTap
                            },
                            '#CGZJEYDQS_action' : {
                                tap : this.onCGZJEYDQSButtonTap
                            },
                            '#CGZJEJDQS_action' : {
                                tap : this.onCGZJEJDQSButtonTap
                            },
                            '#CLSLT10_action' : {
                                tap : this.onCLSLT10ButtonTap
                            },
                            '#CLSLZB_action' : {
                                tap : this.onCLSLZBButtonTap
                            },
                            '#GYSSLTJ_action' : {
                                tap : this.onGYSSLTJButtonTap
                            },
                            '#GYSSLZB_action' : {
                                tap : this.onGYSSLZBButtonTap
                            },
                            '#XMSXSLTJ_action' : {
                                tap : this.onXMSXSLTJButtonTap
                            },
                            '#XMSXSLZB_action' : {
                                tap : this.onXMSXSLZBButtonTap
                            },
                            '#CGJGDEDJDB_action' : {
                                tap : this.onCGJGDEDJDBButtonTap
                            },
                            '#CGJGDEDJPLL_action' : {
                                tap : this.onCGJGDEDJPLLButtonTap
                            },
                            '#CGJGZDPLL_action' : {
                                tap : this.onCGJGZDPLLButtonTap
                            },
                            '#CGJGPPWDXYD_action' : {
                                tap : this.onCGJGPPWDXYDButtonTap
                            },
                            '#CGJGPPWDXND_action' : {
                                tap : this.onCGJGPPWDXNDButtonTap
                            }
                        });
            },

            onLaunch : function() {
                console.log('onLaunch Main controller');
            },

            /* 材料采购价格统计图 */
            onCGJGQSButtonTap : function() {
                var CGJGQS_orgcode = this.getCGJGQS_orgcode().getValue();
                var CGJGQS_yearcode = this.getCGJGQS_yearcode().getValue();
                var CGJGQS_materialclass = this.getCGJGQS_materialclasscode().record.data.text;
                if (!isEmpty(DataIntegration.CGJGQS_Chart)) {
                    DataIntegration.CGJGQS_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getYearEBillDetailJson.do',
                            params : {
                                "graphVO.orgcode" : CGJGQS_orgcode,
                                "graphVO.year" : CGJGQS_yearcode,
                                "graphVO.materialdesc" : CGJGQS_materialclass
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = CGJGQS_materialclass + '材料采购价格统计图(' + this.getCGJGQS_orgcode().record.data.text + '-' + CGJGQS_yearcode + '年度)';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.year + '-' + data.month);
                                    sdata.push(parseFloat(data.result));
                                }
                                if (isEmpty(DataIntegration.CGJGQS_Chart)) {
                                    CGJGQS_Chart_options.title.text = title;
                                    CGJGQS_Chart_options.xAxis[0].categories = categories;
                                    CGJGQS_Chart_options.series[0].data = sdata;
                                    DataIntegration.CGJGQS_Chart = new Highcharts.Chart(CGJGQS_Chart_options);
                                } else {
                                    DataIntegration.CGJGQS_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CGJGQS_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.CGJGQS_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CGJGQS_Chart.redraw();
                                    DataIntegration.CGJGQS_Chart.hideLoading();
                                }

                            },
                            scope : this
                        });
            },

            /* 材料数量Top10 */
            onCLSLT10ButtonTap : function() {
                var CLSLT10_orgcode = this.getCLSLT10_orgcode().getValue();
                if (!isEmpty(DataIntegration.CLSLT10_Chart)) {
                    DataIntegration.CLSLT10_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!topMaterialClassNumJson.do',
                            params : {
                                "graphVO.orgcode" : CLSLT10_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = '材料数量Top10(' + this.getCLSLT10_orgcode().record.data.text + ')';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.materialclassname);
                                    sdata.push(parseFloat(data.value));
                                }
                                if (isEmpty(DataIntegration.CLSLT10_Chart)) {
                                    CLSLT10_Chart_options.title.text = title;
                                    CLSLT10_Chart_options.xAxis[0].categories = categories;
                                    CLSLT10_Chart_options.series[0].data = sdata;
                                    DataIntegration.CLSLT10_Chart = new Highcharts.Chart(CLSLT10_Chart_options);
                                } else {
                                    DataIntegration.CLSLT10_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CLSLT10_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.CLSLT10_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CLSLT10_Chart.redraw();
                                    DataIntegration.CLSLT10_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });
            },

            /* 材料数量占比图 */
            onCLSLZBButtonTap : function() {
                var CLSLZB_orgcode = this.getCLSLZB_orgcode().getValue();
                if (!isEmpty(DataIntegration.CLSLZB_Chart)) {
                    DataIntegration.CLSLZB_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!topMaterialClassPercentageJson.do',
                            params : {
                                "graphVO.orgcode" : CLSLZB_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = this.getCLSLZB_orgcode().record.data.text + '材料数量占比图';
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    sdata.push([data.materialclassname, parseFloat(data.value)]);
                                }
                                if (isEmpty(DataIntegration.CLSLZB_Chart)) {
                                    CLSLZB_Chart_options.title.text = title;
                                    CLSLZB_Chart_options.series[0].data = sdata;
                                    DataIntegration.CLSLZB_Chart = new Highcharts.Chart(CLSLZB_Chart_options);
                                } else {
                                    DataIntegration.CLSLZB_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CLSLZB_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CLSLZB_Chart.redraw();
                                    DataIntegration.CLSLZB_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });

            },

            /* 采购总金额统计图 */
            onCGZJEQSButtonTap : function() {
                var CGZJEQS_orgcode = this.getCGZJEQS_orgcode().getValue();
                var CGZJEQS_yearcode = this.getCGZJEQS_yearcode().getValue();
                if (!isEmpty(DataIntegration.CGZJEQS_Chart)) {
                    DataIntegration.CGZJEQS_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getYearMoneyCountJson.do',
                            params : {
                                "graphVO.orgcode" : CGZJEQS_orgcode,
                                "graphVO.year" : CGZJEQS_yearcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = '采购总金额统计图(' + this.getCGZJEQS_orgcode().record.data.text + '-' + CGZJEQS_yearcode + '年度)';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.orgName);
                                    sdata.push(parseFloat(data.value));
                                }
                                if (isEmpty(DataIntegration.CGZJEQS_Chart)) {
                                    CGZJEQS_Chart_options.title.text = title;
                                    CGZJEQS_Chart_options.xAxis[0].categories = categories;
                                    CGZJEQS_Chart_options.series[0].data = sdata;
                                    DataIntegration.CGZJEQS_Chart = new Highcharts.Chart(CGZJEQS_Chart_options);
                                } else {
                                    DataIntegration.CGZJEQS_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CGZJEQS_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.CGZJEQS_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CGZJEQS_Chart.redraw();
                                    DataIntegration.CGZJEQS_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });

            },

            /* 采购总金额占比图 */
            onCGZJEZBButtonTap : function() {
                var CGZJEZB_orgcode = this.getCGZJEZB_orgcode().getValue();
                var CGZJEZB_yearcode = this.getCGZJEZB_yearcode().getValue();
                if (!isEmpty(DataIntegration.CGZJEZB_Chart)) {
                    DataIntegration.CGZJEZB_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getYearMoneyPercentageJson.do',
                            params : {
                                "graphVO.orgcode" : CGZJEZB_orgcode,
                                "graphVO.year" : CGZJEZB_yearcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = this.getCGZJEZB_orgcode().record.data.text + '采购总金额占比图(' + CGZJEZB_yearcode + '年度)';
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    sdata.push([data.orgName, parseFloat(data.value)]);
                                }
                                if (isEmpty(DataIntegration.CGZJEZB_Chart)) {
                                    CGZJEZB_Chart_options.title.text = title;
                                    CGZJEZB_Chart_options.series[0].data = sdata;
                                    DataIntegration.CGZJEZB_Chart = new Highcharts.Chart(CGZJEZB_Chart_options);
                                } else {
                                    DataIntegration.CGZJEZB_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CGZJEZB_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CGZJEZB_Chart.redraw();
                                    DataIntegration.CGZJEZB_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });

            },

            /* 采购总金额月度统计图 */
            onCGZJEYDQSButtonTap : function() {
                var CGZJEYDQS_orgcode = this.getCGZJEYDQS_orgcode().getValue();
                if (!isEmpty(DataIntegration.CGZJEYDQS_Chart)) {
                    DataIntegration.CGZJEYDQS_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getMonthMoneyTrendJson.do',
                            params : {
                                "graphVO.orgcode" : CGZJEYDQS_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = this.getCGZJEYDQS_orgcode().record.data.text + '采购总金额月度统计图';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.month);
                                    sdata.push(parseFloat(data.value));
                                }
                                if (isEmpty(DataIntegration.CGZJEYDQS_Chart)) {
                                    CGZJEYDQS_Chart_options.title.text = title;
                                    CGZJEYDQS_Chart_options.xAxis[0].categories = categories;
                                    CGZJEYDQS_Chart_options.series[0].data = sdata;
                                    DataIntegration.CGZJEYDQS_Chart = new Highcharts.Chart(CGZJEYDQS_Chart_options);
                                } else {
                                    DataIntegration.CGZJEYDQS_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CGZJEYDQS_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.CGZJEYDQS_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CGZJEYDQS_Chart.redraw();
                                    DataIntegration.CGZJEYDQS_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });

            },

            /* 采购总金额季度统计图 */
            onCGZJEJDQSButtonTap : function() {
                var CGZJEJDQS_orgcode = this.getCGZJEJDQS_orgcode().getValue();
                var CGZJEJDQS_startyearcode = this.getCGZJEJDQS_startyearcode().getValue();
                var CGZJEJDQS_endyearcode = this.getCGZJEJDQS_endyearcode().getValue();
                if (!isEmpty(DataIntegration.CGZJEJDQS_Chart)) {
                    DataIntegration.CGZJEJDQS_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getQuarterMoneyTrendJson.do',
                            params : {
                                "graphVO.orgcode" : CGZJEJDQS_orgcode,
                                "graphVO.startyear" : CGZJEJDQS_startyearcode,
                                "graphVO.endyear" : CGZJEJDQS_endyearcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = this.getCGZJEJDQS_orgcode().record.data.text + '采购总金额季度统计图';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.quarter);
                                    sdata.push(parseFloat(data.value));
                                }
                                if (isEmpty(DataIntegration.CGZJEJDQS_Chart)) {
                                    CGZJEJDQS_Chart_options.title.text = title;
                                    CGZJEJDQS_Chart_options.xAxis[0].categories = categories;
                                    CGZJEJDQS_Chart_options.series[0].data = sdata;
                                    DataIntegration.CGZJEJDQS_Chart = new Highcharts.Chart(CGZJEJDQS_Chart_options);
                                } else {
                                    DataIntegration.CGZJEJDQS_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.CGZJEJDQS_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.CGZJEJDQS_Chart.series[0].setData(sdata, false);
                                    DataIntegration.CGZJEJDQS_Chart.redraw();
                                    DataIntegration.CGZJEJDQS_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });
            },

            /* 供应商数量统计图 */
            onGYSSLTJButtonTap : function() {
                var GYSSLTJ_orgcode = this.getGYSSLTJ_orgcode().getValue();
                if (!isEmpty(DataIntegration.GYSSLTJ_Chart)) {
                    DataIntegration.GYSSLTJ_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getSupplierNumJson.do',
                            params : {
                                "graphVO.orgcode" : GYSSLTJ_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = '供应商数量统计图(' + this.getGYSSLTJ_orgcode().record.data.text + ')';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.orgName);
                                    sdata.push(parseFloat(data.value));
                                }
                                if (isEmpty(DataIntegration.GYSSLTJ_Chart)) {
                                    GYSSLTJ_Chart_options.title.text = title;
                                    GYSSLTJ_Chart_options.xAxis[0].categories = categories;
                                    GYSSLTJ_Chart_options.series[0].data = sdata;
                                    DataIntegration.GYSSLTJ_Chart = new Highcharts.Chart(GYSSLTJ_Chart_options);
                                } else {
                                    DataIntegration.GYSSLTJ_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.GYSSLTJ_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.GYSSLTJ_Chart.series[0].setData(sdata, false);
                                    DataIntegration.GYSSLTJ_Chart.redraw();
                                    DataIntegration.GYSSLTJ_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });

            },

            /* 供应商数量占比图 */
            onGYSSLZBButtonTap : function() {
                var GYSSLZB_orgcode = this.getGYSSLZB_orgcode().getValue();
                if (!isEmpty(DataIntegration.GYSSLZB_Chart)) {
                    DataIntegration.GYSSLZB_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getSupplierPercentageJson.do',
                            params : {
                                "graphVO.orgcode" : GYSSLZB_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = this.getGYSSLZB_orgcode().record.data.text + '供应商数量占比图'
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    sdata.push([data.orgName, parseFloat(data.value)]);
                                }
                                if (isEmpty(DataIntegration.GYSSLZB_Chart)) {
                                    GYSSLZB_Chart_options.title.text = title;
                                    GYSSLZB_Chart_options.series[0].data = sdata;
                                    DataIntegration.GYSSLZB_Chart = new Highcharts.Chart(GYSSLZB_Chart_options);
                                } else {
                                    DataIntegration.GYSSLZB_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.GYSSLZB_Chart.series[0].setData(sdata, false);
                                    DataIntegration.GYSSLZB_Chart.redraw();
                                    DataIntegration.GYSSLZB_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });
            },

            /* 项目上线数量统计图 */
            onXMSXSLTJButtonTap : function() {
                var XMSXSLTJ_orgcode = this.getXMSXSLTJ_orgcode().getValue();
                if (!isEmpty(DataIntegration.XMSXSLTJ_Chart)) {
                    DataIntegration.XMSXSLTJ_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getProjectNumJson.do',
                            params : {
                                "graphVO.orgcode" : XMSXSLTJ_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = '项目上线数量统计图(' + this.getXMSXSLTJ_orgcode().record.data.text + ')';
                                var categories = [];
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    categories.push(data.orgName);
                                    sdata.push(parseFloat(data.value));
                                }
                                if (isEmpty(DataIntegration.XMSXSLTJ_Chart)) {
                                    XMSXSLTJ_Chart_options.title.text = title;
                                    XMSXSLTJ_Chart_options.xAxis[0].categories = categories;
                                    XMSXSLTJ_Chart_options.series[0].data = sdata;
                                    DataIntegration.XMSXSLTJ_Chart = new Highcharts.Chart(XMSXSLTJ_Chart_options);
                                } else {
                                    DataIntegration.XMSXSLTJ_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.XMSXSLTJ_Chart.xAxis[0].setCategories(categories, false);
                                    DataIntegration.XMSXSLTJ_Chart.series[0].setData(sdata, false);
                                    DataIntegration.XMSXSLTJ_Chart.redraw();
                                    DataIntegration.XMSXSLTJ_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });

            },

            /* 项目上线数量占比图 */
            onXMSXSLZBButtonTap : function() {
                var XMSXSLZB_orgcode = this.getXMSXSLZB_orgcode().getValue();
                if (!isEmpty(DataIntegration.XMSXSLZB_Chart)) {
                    DataIntegration.XMSXSLZB_Chart.showLoading();
                }
                Ext.util.JSONP.request({
                            url : 'http://jc.cscec.com/managementjson/statistic/graphJson!getProjectPercentageNumJson.do',
                            params : {
                                "graphVO.orgcode" : XMSXSLZB_orgcode
                            },
                            callbackKey : 'jsonpcallback',
                            callback : function(datas) {
                                var title = this.getXMSXSLZB_orgcode().record.data.text + '项目上线数量占比图';
                                var sdata = [];
                                for (var idx in datas) {
                                    var data = datas[idx];
                                    sdata.push([data.orgName, parseFloat(data.value)]);
                                }
                                if (isEmpty(DataIntegration.XMSXSLZB_Chart)) {
                                    XMSXSLZB_Chart_options.title.text = title;
                                    XMSXSLZB_Chart_options.series[0].data = sdata;
                                    DataIntegration.XMSXSLZB_Chart = new Highcharts.Chart(XMSXSLZB_Chart_options);
                                } else {
                                    DataIntegration.XMSXSLZB_Chart.setTitle({
                                                text : title
                                            });
                                    DataIntegration.XMSXSLZB_Chart.series[0].setData(sdata, false);
                                    DataIntegration.XMSXSLZB_Chart.redraw();
                                    DataIntegration.XMSXSLZB_Chart.hideLoading();
                                }
                            },
                            scope : this
                        });
            },

            /* 材料采购价格和定额单价对比分析图 */
            onCGJGDEDJDBButtonTap : function() {
                var CGJGDEDJDB_orgcode = this.getCGJGDEDJDB_orgcode().getValue();
                var CGJGDEDJDB_yearcode = this.getCGJGDEDJDB_yearcode().getValue();
                var CGJGDEDJDB_materialclass = this.getCGJGDEDJDB_materialclasscode().record.data.text;
                if (!isEmpty(DataIntegration.CGJGDEDJDB_Chart)) {
                    DataIntegration.CGJGDEDJDB_Chart.showLoading();
                }
                var title = CGJGDEDJDB_materialclass + '采购价格和定额单价对比分析图';
                var subtitle = this.getCGJGDEDJDB_orgcode().record.data.text + '股份有限公司(' + CGJGDEDJDB_yearcode + '年度)';
                var categories = [];
                var sdata1 = [];
                var sdata2 = [];
                var sdata3 = [];
                for (var i = 0; i < 12; i++) {
                    sdata1.push(Math.random() * 200);
                    sdata2.push(Math.random() * 20);
                    sdata3.push(Math.random() * 15);
                    var month = null;
                    if (i < 9) {
                        month = '' + CGJGDEDJDB_yearcode + '.0' + (i + 1);
                    } else {
                        month = '' + CGJGDEDJDB_yearcode + '.' + (i + 1);
                    }
                    categories.push(month);
                }

                if (isEmpty(DataIntegration.CGJGDEDJDB_Chart)) {
                    CGJGDEDJDB_Chart_options.title.text = title;
                    CGJGDEDJDB_Chart_options.subtitle.text = subtitle;
                    CGJGDEDJDB_Chart_options.xAxis[0].categories = categories;
                    CGJGDEDJDB_Chart_options.series[0].data = sdata1;
                    CGJGDEDJDB_Chart_options.series[1].data = sdata2;
                    CGJGDEDJDB_Chart_options.series[2].data = sdata3;
                    DataIntegration.CGJGDEDJDB_Chart = new Highcharts.Chart(CGJGDEDJDB_Chart_options);
                } else {
                    DataIntegration.CGJGDEDJDB_Chart.setTitle({
                                text : title
                            }, {
                                text : subtitle
                            });
                    DataIntegration.CGJGDEDJDB_Chart.xAxis[0].setCategories(categories, false);
                    DataIntegration.CGJGDEDJDB_Chart.series[0].setData(sdata1, false);
                    DataIntegration.CGJGDEDJDB_Chart.series[1].setData(sdata2, false);
                    DataIntegration.CGJGDEDJDB_Chart.series[2].setData(sdata3, false);
                    DataIntegration.CGJGDEDJDB_Chart.redraw();
                    DataIntegration.CGJGDEDJDB_Chart.hideLoading();
                }
            },

            /* 材料采购价格和定额单价偏离率分析图 */
            onCGJGDEDJPLLButtonTap : function() {
                var CGJGDEDJPLL_orgcode = this.getCGJGDEDJPLL_orgcode().getValue();
                var CGJGDEDJPLL_yearcode = this.getCGJGDEDJPLL_yearcode().getValue();
                var CGJGDEDJPLL_materialclass = this.getCGJGDEDJPLL_materialclasscode().record.data.text;
                if (!isEmpty(DataIntegration.CGJGDEDJPLL_Chart)) {
                    DataIntegration.CGJGDEDJPLL_Chart.showLoading();
                }
                var title = CGJGDEDJPLL_materialclass + '采购价格和定额单价偏离率分析图';
                var subtitle = this.getCGJGDEDJPLL_orgcode().record.data.text + '股份有限公司(' + CGJGDEDJPLL_yearcode + '年度)';
                var sdata1 = [];
                var sdata2 = [];
                for (var i = 0; i < 21; i++) {
                    sdata1.push(-1 * Math.random() * 40000000);
                    sdata2.push(Math.random() * 40000000);
                }

                if (isEmpty(DataIntegration.CGJGDEDJPLL_Chart)) {
                    CGJGDEDJPLL_Chart_options.title.text = title;
                    CGJGDEDJPLL_Chart_options.subtitle.text = subtitle;
                    CGJGDEDJPLL_Chart_options.series[0].data = sdata1;
                    CGJGDEDJPLL_Chart_options.series[1].data = sdata2;
                    DataIntegration.CGJGDEDJPLL_Chart = new Highcharts.Chart(CGJGDEDJPLL_Chart_options);
                } else {
                    DataIntegration.CGJGDEDJPLL_Chart.setTitle({
                                text : title
                            }, {
                                text : subtitle
                            });
                    DataIntegration.CGJGDEDJPLL_Chart.series[0].setData(sdata1, false);
                    DataIntegration.CGJGDEDJPLL_Chart.series[1].setData(sdata2, false);
                    DataIntegration.CGJGDEDJPLL_Chart.redraw();
                    DataIntegration.CGJGDEDJPLL_Chart.hideLoading();
                }
            },

            /* 材料价格最大偏离率统计图 */
            onCGJGZDPLLButtonTap : function() {
                var CGJGZDPLL_orgcode = this.getCGJGZDPLL_orgcode().getValue();
                var CGJGZDPLL_yearcode = this.getCGJGZDPLL_yearcode().getValue();
                if (!isEmpty(DataIntegration.CGJGZDPLL_Chart)) {
                    DataIntegration.CGJGZDPLL_Chart.showLoading();
                }
                var title = '材料价格最大偏离率统计图';
                var subtitle = this.getCGJGZDPLL_orgcode().record.data.text + '股份有限公司(' + CGJGZDPLL_yearcode + '年度)';
                var sdata1 = [];
                var sdata2 = [];
                var sdata3 = [];
                var categories = [];
                for (var i = 0; i < 12; i++) {
                    sdata1.push(Math.random() * 200);
                    sdata2.push(Math.random() * 150);
                    sdata3.push(Math.random() * 60);
                    var month = null;
                    if (i < 9) {
                        month = '' + CGJGZDPLL_yearcode + '.0' + (i + 1);
                    } else {
                        month = '' + CGJGZDPLL_yearcode + '.' + (i + 1);
                    }
                    categories.push(month);
                }

                if (isEmpty(DataIntegration.CGJGZDPLL_Chart)) {
                    CGJGZDPLL_Chart_options.title.text = title;
                    CGJGZDPLL_Chart_options.subtitle.text = subtitle;
                    CGJGZDPLL_Chart_options.xAxis[0].categories = categories;
                    CGJGZDPLL_Chart_options.series[0].data = sdata1;
                    CGJGZDPLL_Chart_options.series[1].data = sdata2;
                    CGJGZDPLL_Chart_options.series[2].data = sdata3;
                    DataIntegration.CGJGZDPLL_Chart = new Highcharts.Chart(CGJGZDPLL_Chart_options);
                } else {
                    DataIntegration.CGJGZDPLL_Chart.setTitle({
                                text : title
                            }, {
                                text : subtitle
                            });
                    DataIntegration.CGJGZDPLL_Chart.xAxis[0].setCategories(categories, false);
                    DataIntegration.CGJGZDPLL_Chart.series[0].setData(sdata1, false);
                    DataIntegration.CGJGZDPLL_Chart.series[1].setData(sdata2, false);
                    DataIntegration.CGJGZDPLL_Chart.series[2].setData(sdata3, false);
                    DataIntegration.CGJGZDPLL_Chart.redraw();
                    DataIntegration.CGJGZDPLL_Chart.hideLoading();
                }
            },

            /* 材料价格品牌稳定性分析图 */
            onCGJGPPWDXYDButtonTap : function() {
                var CGJGPPWDXYD_orgcode = this.getCGJGPPWDXYD_orgcode().getValue();
                var CGJGPPWDXYD_yearcode = this.getCGJGPPWDXYD_yearcode().getValue();
                if (!isEmpty(DataIntegration.CGJGPPWDXYD_Chart)) {
                    DataIntegration.CGJGPPWDXYD_Chart.showLoading();
                }
                var title = '材料价格品牌稳定性分析图－月度分析';
                var subtitle = this.getCGJGPPWDXYD_orgcode().record.data.text + '股份有限公司(' + CGJGPPWDXYD_yearcode + '年度)';
                var sdata1 = [];
                var sdata2 = [];
                var sdata3 = [];
                var categories = [];
                for (var i = 0; i < 12; i++) {
                    sdata1.push(Math.random() * 180);
                    sdata2.push(Math.random() * 100);
                    sdata3.push(Math.random() * 70);
                    var month = null;
                    if (i < 9) {
                        month = '' + CGJGPPWDXYD_yearcode + '.0' + (i + 1);
                    } else {
                        month = '' + CGJGPPWDXYD_yearcode + '.' + (i + 1);
                    }
                    categories.push(month);
                }

                if (isEmpty(DataIntegration.CGJGPPWDXYD_Chart)) {
                    CGJGPPWDXYD_Chart_options.title.text = title;
                    CGJGPPWDXYD_Chart_options.subtitle.text = subtitle;
                    CGJGPPWDXYD_Chart_options.xAxis[0].categories = categories;
                    CGJGPPWDXYD_Chart_options.series[0].data = sdata1;
                    CGJGPPWDXYD_Chart_options.series[1].data = sdata2;
                    CGJGPPWDXYD_Chart_options.series[2].data = sdata3;
                    DataIntegration.CGJGPPWDXYD_Chart = new Highcharts.Chart(CGJGPPWDXYD_Chart_options);
                } else {
                    DataIntegration.CGJGPPWDXYD_Chart.setTitle({
                                text : title
                            }, {
                                text : subtitle
                            });
                    DataIntegration.CGJGPPWDXYD_Chart.xAxis[0].setCategories(categories, false);
                    DataIntegration.CGJGPPWDXYD_Chart.series[0].setData(sdata1, false);
                    DataIntegration.CGJGPPWDXYD_Chart.series[1].setData(sdata2, false);
                    DataIntegration.CGJGPPWDXYD_Chart.series[2].setData(sdata3, false);
                    DataIntegration.CGJGPPWDXYD_Chart.redraw();
                    DataIntegration.CGJGPPWDXYD_Chart.hideLoading();
                }
            },

            /* 材料价格品牌稳定性分析图 */
            onCGJGPPWDXNDButtonTap : function() {
                var CGJGPPWDXND_orgcode = this.getCGJGPPWDXND_orgcode().getValue();
                var CGJGPPWDXND_yearcode = this.getCGJGPPWDXND_yearcode().getValue();
                if (!isEmpty(DataIntegration.CGJGPPWDXND_Chart)) {
                    DataIntegration.CGJGPPWDXND_Chart.showLoading();
                }
                var title = '材料价格品牌稳定性分析图－年度分析';
                var subtitle = this.getCGJGPPWDXND_orgcode().record.data.text + '股份有限公司(' + CGJGPPWDXND_yearcode + '年度)';
                var sdata1 = [];
                var sdata2 = [];
                for (var i = 0; i < 5; i++) {
                    sdata1.push(Math.random() * 10);
                    sdata2.push(Math.random() * 9);
                }

                if (isEmpty(DataIntegration.CGJGPPWDXND_Chart)) {
                    CGJGPPWDXND_Chart_options.title.text = title;
                    CGJGPPWDXND_Chart_options.subtitle.text = subtitle;
                    CGJGPPWDXND_Chart_options.series[0].data = sdata1;
                    CGJGPPWDXND_Chart_options.series[1].data = sdata2;
                    DataIntegration.CGJGPPWDXND_Chart = new Highcharts.Chart(CGJGPPWDXND_Chart_options);
                } else {
                    DataIntegration.CGJGPPWDXND_Chart.setTitle({
                                text : title
                            }, {
                                text : subtitle
                            });
                    DataIntegration.CGJGPPWDXND_Chart.series[0].setData(sdata1, false);
                    DataIntegration.CGJGPPWDXND_Chart.series[1].setData(sdata2, false);
                    DataIntegration.CGJGPPWDXND_Chart.redraw();
                    DataIntegration.CGJGPPWDXND_Chart.hideLoading();
                }
            },

            onLeafTap : function(list, index) {
                var navigation = this.getNavigation(), mainView = this.getMain(), mainLayout = mainView.getLayout(), record = list.getStore().getAt(index), viewTitle = record.get('text'), viewName = record.get('view'), xtype = viewName.toLowerCase() + 'view', getter = 'get'
                        + Ext.String.capitalize(viewName), profile = this.getProfile(), animationRecord = record.get('animation'), card, initialAnimation;

                this.initialAnimation = initialAnimation = this.initialAnimation || mainLayout.getAnimation();

                if (!viewName.length) {
                    return;
                }

                if (!this.hasRef(viewName)) {
                    this.getView(viewName, {
                                profile : profile
                            });
                    this.addRef({
                                ref : viewName,
                                selector : xtype,
                                xtype : xtype,
                                autoCreate : true
                            });
                }

                card = this[getter]();

                navigation.setDetailCard(card);

                /*
                 * if (animationRecord) {
                 * mainLayout.setAnimation(animationRecord); // TODO: Temporary
                 * measure until more asynchronous Classes are ready if
                 * (Ext.os.name != 'Android') {
                 * mainLayout.getAnimation().getOutAnimation().setOnEnd(Ext.Function.bind(function() {
                 * Ext.getBody().dom.style.pointerEvents = 'auto'; }, this)); } }
                 * else { mainLayout.setAnimation(initialAnimation); // TODO:
                 * Temporary measure until more asynchronous Classes are ready
                 * if (Ext.os.name != 'Android') {
                 * mainLayout.getAnimation().getOutAnimation().setOnEnd(Ext.Function.bind(function() {
                 * Ext.getBody().dom.style.pointerEvents = 'auto'; }, this)); } } //
                 * TODO: Temporary measure until more asynchronous Classes are
                 * ready if (Ext.os.name != 'Android') {
                 * Ext.getBody().dom.style.pointerEvents = 'none'; }
                 */

                this.getToolbar().setTitle(viewTitle);

                if (card.setProfile) {
                    card.setProfile(profile);
                }
                if (card.switchPanel) {
                    card.switchPanel(this.getToolbar().getHeight());
                }
            },
            updateProfile : function(profile) {
                console.log('updateProfile Main Controller');
                this.getMain();
                Highcharts.setOptions({
                            lang : {
                                loading : '加载中...'
                            }
                        });
            },
            processAuthorizeResult : function(datas) {
                if (datas[0].result === 'success') {
                    this.getMain().removeAll(true);
                    this.getMain().add([{
                                id : 'launchscreen',
                                cls : 'launchscreen',
                                layout : 'fit',
                                html : '<center><div></div></center>'
                            }, {
                                id : 'mainNestedList',
                                xtype : 'nestedlist',
                                componentCls : 'leftmenu',
                                useTitleAsBackText : false,
                                docked : 'left',
                                width : 250,
                                useToolbar : false,
                                store : 'Menus',
                                title : '图表类别'
                            }, {
                                id : 'mainNavigationBar',
                                xtype : 'navigationbar',
                                docked : 'top',
                                title : '中建四局服务平台数据平台'
                            }]);
                    this.addRef({
                                ref : 'navigation',
                                selector : '#mainNestedList'
                            });
                    this.addRef({
                                ref : 'toolbar',
                                selector : '#mainNavigationBar'
                            });
                    var navigation = this.getNavigation();
                    navigation.setDetailContainer(this.getMain());
                    this.getNavigation().addListener('leafitemtap', this.onLeafTap, this);
                } else {
                    Ext.Msg.alert('错误', '您输入的用户名不存在或密码错误', Ext.emptyFn);
                }
            },
            authorize : function() {
                var username = Ext.get(this.getMain().getEl().query('.login-username')[0]).getValue();
                var passwd = Ext.get(this.getMain().getEl().query('.login-password')[0]).getValue();
                var fakeResult = [];
                if ('admin' === username && 'admin' === passwd) {
                    fakeResult.push({
                                result : 'success'
                            });
                } else {
                    fakeResult.push({
                                result : 'fail'
                            });
                }
                this.processAuthorizeResult(fakeResult);
                /*
                 * Ext.util.JSONP.request({
                 * url:'http://jc.cscec.com/managementjson/statistic/graphJson!userLoginJson.do',
                 * params:{"graphVO.loginname":username,"graphVO.password":passwd},
                 * callbackKey:'jsonpcallback',
                 * callback:this.processAuthorizeResult, scope:this });
                 */
            }
        });
