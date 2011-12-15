Ext.override(Ext.NestedList, {
    getItemTextTpl: function(node) {
        return '<div style="float:left;"><img src="{icon}" width="20" height="20"/></div><div style="float:left;padding-left:10px">{text}</div>';
    }
});

Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['result', 'username', 'orgname']
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
	        }
	    });
    },
    
    onLaunch: function() {
		console.log('onLaunch Main controller');
    },
    
    onCGJGQSButtonTap: function(){
    	var CGJGQS_orgcode = this.getCGJGQS_orgcode().getValue();
    	var CGJGQS_yearcode = this.getCGJGQS_yearcode().getValue();
    	var CGJGQS_materialclass = this.getCGJGQS_materialclasscode().record.data.text;
    	Ext.util.JSONP.request({
            url:'http://jc.glodon.com:9000/managementjson/statistic/graphJson!getYearEBillDetailJson.do',
            params:{"graphVO.orgcode":CGJGQS_orgcode,"graphVO.year":CGJGQS_yearcode,"graphVO.materialdesc":CGJGQS_materialclass},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGJGQS_Chart_options.title.text = '材料采购价格趋势图(' + this.getCGJGQS_orgcode().record.data.text + '-' + CGJGQS_yearcode + '年度)';
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
    
    onCGZJEZBButtonTap: function(){
    	var CGZJEZB_orgcode = this.getCGZJEZB_orgcode().getValue();
    	var CGZJEZB_yearcode = this.getCGZJEZB_yearcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.glodon.com:9000/managementjson/statistic/graphJson!getYearMoneyPercentageJson.do',
            params:{"graphVO.orgcode":CGZJEZB_orgcode,"graphVO.year":CGZJEZB_yearcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGZJEZB_Chart_options.title.text = this.getCGZJEZB_orgcode().record.data.text + '全年度采购占比图(' + CGZJEZB_yearcode + '年度)';
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
    
    onCGZJEQSButtonTap: function(){
    	var CGZJEQS_orgcode = this.getCGZJEQS_orgcode().getValue();
    	var CGZJEQS_yearcode = this.getCGZJEQS_yearcode().getValue();
    	Ext.util.JSONP.request({
            url:'http://jc.glodon.com:9000/managementjson/statistic/graphJson!getYearMoneyCountJson.do',
            params:{"graphVO.orgcode":CGZJEQS_orgcode,"graphVO.year":CGZJEQS_yearcode},
            callbackKey:'jsonpcallback',
            callback:function(datas){
            	CGZJEQS_Chart_options.title.text = '采购总金额趋势图(' + this.getCGZJEQS_orgcode().record.data.text + '-' + CGZJEQS_yearcode + '年度)';
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
            url:'http://jc.glodon.com:9000/managementjson/statistic/graphJson!userLoginJson.do',
            params:{"graphVO.loginname":username,"graphVO.password":passwd},
            callbackKey:'jsonpcallback',
            callback:this.processAuthorizeResult,
            scope:this
        });
    }
});
