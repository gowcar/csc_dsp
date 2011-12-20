Ext.override(Ext.NestedList, {
    getItemTextTpl: function(node) {
        return '<div style="float:left;"><img src="{icon}" width="20" height="20"/></div><div style="float:left;padding-left:10px">{text}</div>';
    }
});

Ext.define('DataIntegration.controller.Main', {
    extend: 'Ext.app.Controller',	
    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
    views: ['Viewport','CailiaoJiage','CGJE_Chart','GYS_Chart','PTYX_Chart', 'SCQS_Chart'],
    stores: ['Menus'],
    refs: [
           {
        	   ref       : 'main',
        	   selector  : 'mainview',
        	   xtype     : 'mainview',
        	   autoCreate: true
           },
           {
        	   ref       : 'loginpanel',
        	   selector  : '#loginpanel'
           },
           {
        	   ref       : 'username',
        	   selector  : '#username'
           },
           {
        	   ref       : 'password',
        	   selector  : '#password'
           },
           {
        	   ref       : 'CGJGQS_orgcode',
        	   selector  : '#CGJGQS_orgcode'
           },
           {
        	   ref       : 'CGJGQS_yearcode',
        	   selector  : '#CGJGQS_yearcode'
           },
           {
        	   ref       : 'CGJGQS_materialclasscode',
        	   selector  : '#CGJGQS_materialclasscode'
           },
           {
        	   ref       : 'CGZJEZB_orgcode',
        	   selector  : '#CGZJEZB_orgcode'
           },
           {
        	   ref       : 'CGZJEZB_yearcode',
        	   selector  : '#CGZJEZB_yearcode'
           },
           {
        	   ref       : 'CGZJEQS_orgcode',
        	   selector  : '#CGZJEQS_orgcode'
           },
           {
        	   ref       : 'CGZJEQS_yearcode',
        	   selector  : '#CGZJEQS_yearcode'
           },
           {
        	   ref       : 'CGZJEYDQS_orgcode',
        	   selector  : '#CGZJEYDQS_orgcode'
           },
           {
        	   ref       : 'CGZJEJDQS_orgcode',
        	   selector  : '#CGZJEJDQS_orgcode'
           },
           {
        	   ref       : 'CGZJEJDQS_startyearcode',
        	   selector  : '#CGZJEJDQS_startyearcode'
           },
           {
        	   ref       : 'CGZJEJDQS_endyearcode',
        	   selector  : '#CGZJEJDQS_endyearcode'
           },
           {
        	   ref       : 'CLSLT10_orgcode',
        	   selector  : '#CLSLT10_orgcode'
           },
           {
        	   ref       : 'CLSLZB_orgcode',
        	   selector  : '#CLSLZB_orgcode'
           },
           {
        	   ref       : 'GYSSLTJ_orgcode',
        	   selector  : '#GYSSLTJ_orgcode'
           },
           {
        	   ref       : 'GYSSLZB_orgcode',
        	   selector  : '#GYSSLZB_orgcode'
           },
           {
        	   ref       : 'XMSXSLTJ_orgcode',
        	   selector  : '#XMSXSLTJ_orgcode'
           },
           {
        	   ref       : 'XMSXSLZB_orgcode',
        	   selector  : '#XMSXSLZB_orgcode'
           },
           {
        	   ref       : 'CGJGDEDJDB_orgcode',
        	   selector  : '#CGJGDEDJDB_orgcode'
           },
           {
        	   ref       : 'CGJGDEDJDB_yearcode',
        	   selector  : '#CGJGDEDJDB_yearcode'
           },
           {
        	   ref       : 'CGJGDEDJDB_materialclasscode',
        	   selector  : '#CGJGDEDJDB_materialclasscode'
           },
           {
        	   ref       : 'CGJGDEDJPLL_orgcode',
        	   selector  : '#CGJGDEDJPLL_orgcode'
           },
           {
        	   ref       : 'CGJGDEDJPLL_yearcode',
        	   selector  : '#CGJGDEDJPLL_yearcode'
           },
           {
        	   ref       : 'CGJGDEDJPLL_materialclasscode',
        	   selector  : '#CGJGDEDJPLL_materialclasscode'
           },
           {
        	   ref       : 'CGJGZDPLL_orgcode',
        	   selector  : '#CGJGZDPLL_orgcode'
           },
           {
        	   ref       : 'CGJGZDPLL_yearcode',
        	   selector  : '#CGJGZDPLL_yearcode'
           },
           {
        	   ref       : 'CGJGZDPLL_materialclasscode',
        	   selector  : '#CGJGZDPLL_materialclasscode'
           },
           {
        	   ref       : 'CGJGPPWDXND_orgcode',
        	   selector  : '#CGJGPPWDXND_orgcode'
           },
           {
        	   ref       : 'CGJGPPWDXND_yearcode',
        	   selector  : '#CGJGPPWDXND_yearcode'
           },
           {
        	   ref       : 'CGJGPPWDXND_materialclasscode',
        	   selector  : '#CGJGPPWDXND_materialclasscode'
           },
           {
        	   ref       : 'CGJGPPWDXYD_orgcode',
        	   selector  : '#CGJGPPWDXYD_orgcode'
           },
           {
        	   ref       : 'CGJGPPWDXYD_yearcode',
        	   selector  : '#CGJGPPWDXYD_yearcode'
           },
           {
        	   ref       : 'CGJGPPWDXYD_materialclasscode',
        	   selector  : '#CGJGPPWDXYD_materialclasscode'
           }
    ],
    init: function() {
        console.log('Init Main controller');
        Ext.get(this.getMain().getEl().query('.login-btn')[0]).addListener('click', this.authorize, this);
        //this.authorize();
        this.control({
	        '#CGJGQS_action' : {
	                tap: this.onCGJGQSButtonTap
	        },
	        '#CGZJEZB_action' : {
	                tap: this.onCGZJEZBButtonTap
	        },
	        '#CGZJEQS_action' : {
	                tap: this.onCGZJEQSButtonTap
	        },
	        '#CGZJEYDQS_action' : {
	                tap: this.onCGZJEYDQSButtonTap
	        },
	        '#CGZJEJDQS_action' : {
	                tap: this.onCGZJEJDQSButtonTap
	        },
	        '#CLSLT10_action' : {
	                tap: this.onCLSLT10ButtonTap
	        },
	        '#CLSLZB_action' : {
	                tap: this.onCLSLZBButtonTap
	        },
	        '#GYSSLTJ_action' : {
	                tap: this.onGYSSLTJButtonTap
	        },
	        '#GYSSLZB_action' : {
	                tap: this.onGYSSLZBButtonTap
	        },
	        '#XMSXSLTJ_action' : {
	                tap: this.onXMSXSLTJButtonTap
	        },
	        '#XMSXSLZB_action' : {
	                tap: this.onXMSXSLZBButtonTap
	        },
	        '#CGJGDEDJDB_action' : {
	                tap: this.onCGJGDEDJDBButtonTap
	        },
	        '#CGJGDEDJPLL_action' : {
	                tap: this.onCGJGDEDJPLLButtonTap
	        },
	        '#CGJGZDPLL_action' : {
	                tap: this.onCGJGZDPLLButtonTap
	        },
	        '#CGJGPPWDXND_action' : {
	                tap: this.onCGJGPPWDXNDButtonTap
	        },
	        '#CGJGPPWDXYD_action' : {
	                tap: this.onCGJGPPWDXYDButtonTap
	        }
	    });
    },
    
    onLaunch: function() {
		console.log('onLaunch Main controller');
    },
    
    /* 材料采购价格统计图 */
    onCGJGQSButtonTap: function(){
    	var CGJGQS_orgcode = this.getCGJGQS_orgcode().getValue();
    	var CGJGQS_yearcode = this.getCGJGQS_yearcode().getValue();
    	var CGJGQS_materialclass = this.getCGJGQS_materialclasscode().record.data.text;
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getYearEBillDetailJson.do',
            params:{"graphVO.orgcode":CGJGQS_orgcode,"graphVO.year":CGJGQS_yearcode,"graphVO.materialdesc":CGJGQS_materialclass},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGJGQS_Chart_options.title.text = CGJGQS_materialclass + '材料采购价格统计图(' + this.getCGJGQS_orgcode().record.data.text + '-' + CGJGQS_yearcode + '年度)';
            	CGJGQS_Chart_options.xAxis[0].categories.length = 0;
            	CGJGQS_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CGJGQS_Chart_options.xAxis[0].categories.push(data.year + '-' + data.month);
            		CGJGQS_Chart_options.series[0].data.push(parseFloat(data.result));
            	}
            	var CGJGQS_Chart = new Highcharts.Chart(CGJGQS_Chart_options);
            },
            scope:this
        });
    	
    },
    
    /* 材料数量Top10 */
    onCLSLT10ButtonTap: function(){
    	var CLSLT10_orgcode = this.getCLSLT10_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!topMaterialClassNumJson.do',
            params:{"graphVO.orgcode":CLSLT10_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CLSLT10_Chart_options.title.text = '材料数量Top10(' + this.getCLSLT10_orgcode().record.data.text + ')';
            	CLSLT10_Chart_options.xAxis.categories.length = 0;
            	CLSLT10_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CLSLT10_Chart_options.xAxis.categories.push(data.materialclassname);
            		CLSLT10_Chart_options.series[0].data.push(parseFloat(data.value));
            	}
            	var CLSLT10_Chart = new Highcharts.Chart(CLSLT10_Chart_options);
            },
            scope:this
        });
    	
    },    
    
	/* 材料数量占比图 */
    onCLSLZBButtonTap: function(){
    	var CLSLZB_orgcode = this.getCLSLZB_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!topMaterialClassPercentageJson.do',
            params:{"graphVO.orgcode":CLSLZB_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CLSLZB_Chart_options.title.text = this.getCLSLZB_orgcode().record.data.text + '材料数量占比图';
            	CLSLZB_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CLSLZB_Chart_options.series[0].data.push([data.materialclassname, parseFloat(data.value)]);
            	}
            	var CLSLZB_Chart = new Highcharts.Chart(CLSLZB_Chart_options);
            },
            scope:this
        });
    	
    },	
    
    /* 采购总金额统计图 */
    onCGZJEQSButtonTap: function(){
    	var CGZJEQS_orgcode = this.getCGZJEQS_orgcode().getValue();
    	var CGZJEQS_yearcode = this.getCGZJEQS_yearcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getYearMoneyCountJson.do',
            params:{"graphVO.orgcode":CGZJEQS_orgcode,"graphVO.year":CGZJEQS_yearcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGZJEQS_Chart_options.title.text = '采购总金额统计图(' + this.getCGZJEQS_orgcode().record.data.text + '-' + CGZJEQS_yearcode + '年度)';
            	CGZJEQS_Chart_options.xAxis.categories.length = 0;
            	CGZJEQS_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CGZJEQS_Chart_options.xAxis.categories.push(data.orgName);
            		CGZJEQS_Chart_options.series[0].data.push(parseFloat(data.value));
            	}
            	var CGZJEQS_Chart = new Highcharts.Chart(CGZJEQS_Chart_options);
            },
            scope:this
        });
    	
    },    
    
    /* 采购总金额占比图 */
    onCGZJEZBButtonTap: function(){
    	var CGZJEZB_orgcode = this.getCGZJEZB_orgcode().getValue();
    	var CGZJEZB_yearcode = this.getCGZJEZB_yearcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getYearMoneyPercentageJson.do',
            params:{"graphVO.orgcode":CGZJEZB_orgcode,"graphVO.year":CGZJEZB_yearcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGZJEZB_Chart_options.title.text = this.getCGZJEZB_orgcode().record.data.text + '采购总金额占比图(' + CGZJEZB_yearcode + '年度)';
            	CGZJEZB_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CGZJEZB_Chart_options.series[0].data.push([data.orgName, parseFloat(data.value)]);
            	}
            	var CGZJEZB_Chart = new Highcharts.Chart(CGZJEZB_Chart_options);
            },
            scope:this
        });
    	
    },

    
    /* 采购总金额月度统计图 */
    onCGZJEYDQSButtonTap: function(){
    	var CGZJEYDQS_orgcode = this.getCGZJEYDQS_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getMonthMoneyTrendJson.do',
            params:{"graphVO.orgcode":CGZJEYDQS_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGZJEYDQS_Chart_options.title.text = this.getCGZJEYDQS_orgcode().record.data.text + '采购总金额月度统计图';
            	CGZJEYDQS_Chart_options.xAxis[0].categories.length = 0;
            	CGZJEYDQS_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CGZJEYDQS_Chart_options.xAxis[0].categories.push(data.month);
            		CGZJEYDQS_Chart_options.series[0].data.push(parseFloat(data.value));
            	}
            	var CGZJEYDQS_Chart = new Highcharts.Chart(CGZJEYDQS_Chart_options);
            },
            scope:this
        });
    	
    },
 
    /* 采购总金额季度统计图 */
	onCGZJEJDQSButtonTap: function(){
    	var CGZJEJDQS_orgcode = this.getCGZJEJDQS_orgcode().getValue();
    	var CGZJEJDQS_startyearcode = this.getCGZJEJDQS_startyearcode().getValue();
    	var CGZJEJDQS_endyearcode = this.getCGZJEJDQS_endyearcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getQuarterMoneyTrendJson.do',
            params:{"graphVO.orgcode":CGZJEJDQS_orgcode, "graphVO.startyear":CGZJEJDQS_startyearcode, "graphVO.endyear":CGZJEJDQS_endyearcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGZJEJDQS_Chart_options.title.text = this.getCGZJEJDQS_orgcode().record.data.text + '采购总金额季度统计图';
            	CGZJEJDQS_Chart_options.xAxis[0].categories.length = 0;
            	CGZJEJDQS_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		CGZJEJDQS_Chart_options.xAxis[0].categories.push(data.quarter);
            		CGZJEJDQS_Chart_options.series[0].data.push(parseFloat(data.value));
            	}
            	var CGZJEJDQS_Chart = new Highcharts.Chart(CGZJEJDQS_Chart_options);
            },
            scope:this
        });
	},
	
    /* 供应商数量统计图 */
    onGYSSLTJButtonTap: function(){
    	var GYSSLTJ_orgcode = this.getGYSSLTJ_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getSupplierNumJson.do',
            params:{"graphVO.orgcode":GYSSLTJ_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	GYSSLTJ_Chart_options.title.text = '供应商数量统计图(' + this.getGYSSLTJ_orgcode().record.data.text + ')';
            	GYSSLTJ_Chart_options.xAxis.categories.length = 0;
            	GYSSLTJ_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		GYSSLTJ_Chart_options.xAxis.categories.push(data.orgName);
            		GYSSLTJ_Chart_options.series[0].data.push(parseFloat(data.value));
            	}
            	var GYSSLTJ_Chart = new Highcharts.Chart(GYSSLTJ_Chart_options);
            },
            scope:this
        });
    	
    },    
 	

	/* 供应商数量占比图 */
    onGYSSLZBButtonTap: function(){
    	var GYSSLZB_orgcode = this.getGYSSLZB_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getSupplierPercentageJson.do',
            params:{"graphVO.orgcode":GYSSLZB_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	GYSSLZB_Chart_options.title.text = this.getGYSSLZB_orgcode().record.data.text + '供应商数量占比图';
            	GYSSLZB_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		GYSSLZB_Chart_options.series[0].data.push([data.orgName, parseFloat(data.value)]);
            	}
            	var GYSSLZB_Chart = new Highcharts.Chart(GYSSLZB_Chart_options);
            },
            scope:this
        });
    },

	/* 项目上线数量统计图 */
    onXMSXSLTJButtonTap: function(){
    	var XMSXSLTJ_orgcode = this.getXMSXSLTJ_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getProjectNumJson.do',
            params:{"graphVO.orgcode":XMSXSLTJ_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	XMSXSLTJ_Chart_options.title.text = '项目上线数量统计图(' + this.getXMSXSLTJ_orgcode().record.data.text + ')';
            	XMSXSLTJ_Chart_options.xAxis.categories.length = 0;
            	XMSXSLTJ_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		XMSXSLTJ_Chart_options.xAxis.categories.push(data.orgName);
            		XMSXSLTJ_Chart_options.series[0].data.push(parseFloat(data.value));
            	}
            	var XMSXSLTJ_Chart = new Highcharts.Chart(XMSXSLTJ_Chart_options);
            },
            scope:this
        });
    	
    },   
    
	/* 项目上线数量占比图 */
    onXMSXSLZBButtonTap: function(){
    	var XMSXSLZB_orgcode = this.getXMSXSLZB_orgcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!getProjectPercentageNumJson.do',
            params:{"graphVO.orgcode":XMSXSLZB_orgcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	XMSXSLZB_Chart_options.title.text = this.getXMSXSLZB_orgcode().record.data.text + '项目上线数量占比图';
            	XMSXSLZB_Chart_options.series[0].data.length = 0;
            	for(var idx in datas){
            		var data = datas[idx];
            		XMSXSLZB_Chart_options.series[0].data.push([data.orgName, parseFloat(data.value)]);
            	}
            	var XMSXSLZB_Chart = new Highcharts.Chart(XMSXSLZB_Chart_options);
            },
            scope:this
        });
    },
    
    /* 材料采购价格和定额单价对比分析图 */
    onCGJGDEDJDBButtonTap: function(){
    	var CGJGDEDJDB_Chart = new Highcharts.Chart(CGJGDEDJDB_Chart_options);
    },
    
    /* 材料采购价格和定额单价偏离率分析图 */
    onCGJGDEDJPLLButtonTap: function(){
    	var CGJGDEDJPLL_Chart = new Highcharts.Chart(CGJGDEDJPLL_Chart_options);
    },
    
    /* 材料价格最大偏离率统计图 */
    onCGJGZDPLLButtonTap: function(){
    	var CGJGZDPLL_Chart = new Highcharts.Chart(CGJGZDPLL_Chart_options);
    },
    
    /* 材料价格品牌稳定性分析图 */
    onCGJGPPWDXNDButtonTap: function(){
    	var CGJGPPWDXND_Chart = new Highcharts.Chart(CGJGPPWDXND_Chart_options);
    },
    
    /* 材料价格品牌稳定性分析图 */
    onCGJGPPWDXYDButtonTap: function(){
    	var CGJGPPWDXYD_Chart = new Highcharts.Chart(CGJGPPWDXYD_Chart_options);
    },
    
    onLeafTap: function(list, index) {
        var navigation = this.getNavigation(),
            mainView = this.getMain(),
            mainLayout = mainView.getLayout(),
            record = list.getStore().getAt(index),
            viewTitle = record.get('text'),
            viewName = record.get('view'),
            xtype = viewName.toLowerCase() + 'view',
            getter = 'get' + Ext.String.capitalize(viewName),
            profile = this.getProfile(),
            animationRecord = record.get('animation'),
            card, initialAnimation;
        
        this.initialAnimation = initialAnimation = this.initialAnimation || mainLayout.getAnimation();
        
        if (!viewName.length) {
            return;
        }

        if (!this.hasRef(viewName)) {
            this.getView(viewName, {
                profile: profile
            });
            this.addRef({
                ref       : viewName,
                selector  : xtype,
                xtype     : xtype,
                autoCreate: true
            });
        }

        card = this[getter]();

        navigation.setDetailCard(card);

        /*
        if (animationRecord) {
            mainLayout.setAnimation(animationRecord);
            // TODO: Temporary measure until more asynchronous Classes are ready
            if (Ext.os.name != 'Android') {
                mainLayout.getAnimation().getOutAnimation().setOnEnd(Ext.Function.bind(function() {
                    Ext.getBody().dom.style.pointerEvents = 'auto';
                }, this));
            }
        }
        else {
            mainLayout.setAnimation(initialAnimation);
            // TODO: Temporary measure until more asynchronous Classes are ready
            if (Ext.os.name != 'Android') {
                mainLayout.getAnimation().getOutAnimation().setOnEnd(Ext.Function.bind(function() {
                    Ext.getBody().dom.style.pointerEvents = 'auto';
                }, this));
            }
        }

        // TODO: Temporary measure until more asynchronous Classes are ready
        if (Ext.os.name != 'Android') {
            Ext.getBody().dom.style.pointerEvents = 'none';
        }
        */

        this.getToolbar().setTitle(viewTitle);

        if (card.setProfile) {
            card.setProfile(profile);
        }
        if (card.refreshChart){
        	card.refreshChart(this.getToolbar().getHeight());
        }
    },
    updateProfile: function(profile) {
    	console.log('updateProfile Main Controller');
    	this.getMain();
    },
    processAuthorizeResult: function(datas){
         if(datas[0].result === 'success'){
    	    this.getMain().removeAll(true);
	 	    this.getMain().add([{
	             id: 'launchscreen',
	             cls : 'launchscreen',
                 layout:'fit',
	             html: '<center><div></div></center>'
             }, {
	             id: 'mainNestedList',
	             xtype : 'nestedlist',
	             componentCls   : 'leftmenu',
	             useTitleAsBackText: false,
	             docked: 'left',
	             width : 250,
	             useToolbar : false,
	             store :  'Menus',
                 title: '图表类别'
             }, {
                     id: 'mainNavigationBar',
                     xtype : 'navigationbar',
                     docked: 'top',
                     title : '中建四局服务平台数据平台'
             }]);
             this.addRef({
                 ref       : 'navigation',
                 selector  : '#mainNestedList'
             });
             this.addRef({
                 ref       : 'toolbar',
                 selector  : '#mainNavigationBar'
             });
             var navigation = this.getNavigation();
             navigation.setDetailContainer(this.getMain());
             this.getNavigation().addListener('leafitemtap', this.onLeafTap, this);
         }else{
      	   Ext.Msg.alert('错误', '您输入的用户名不存在或密码错误', Ext.emptyFn);
         }
    },
    authorize:function(){
        var username = Ext.get(this.getMain().getEl().query('.login-username')[0]).getValue();
        var passwd = Ext.get(this.getMain().getEl().query('.login-password')[0]).getValue();
        /*
         	var fakeResult = [];
        	fakeResult.push({result:'success'});
        	this.processAuthorizeResult(fakeResult);
         */
        Ext.util.JSONP.request({
            url:'http://jc.cscec.com/managementjson/statistic/graphJson!userLoginJson.do',
            params:{"graphVO.loginname":username,"graphVO.password":passwd},
            callbackKey:'jsonpcallback',
            callback:this.processAuthorizeResult,
            scope:this
        });
    }
});
