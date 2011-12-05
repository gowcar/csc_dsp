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
           }
    ],
    init: function() {
        console.log('Init Main controller');
        Ext.get(this.getMain().getEl().query('.login-btn')[0]).addListener('click', this.authorize, this);
        this.authorize();
    },
    
    onLaunch: function() {
		console.log('onLaunch Main controller');
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
    authorize:function(){
//       if(Ext.get(this.getMain().getEl().query('.login-username')[0]).getValue()==='admin' && Ext.get(this.getMain().getEl().query('.login-password')[0]).getValue()==='admin'){
    	   this.getMain().removeAll(true);
	 	   this.getMain().add([{
	            id: 'launchscreen',
	            cls : 'launchscreen',
	            html: '<div style="text-align:center;"></div>'
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
//       }else{
//    	   Ext.Msg.alert('用户名或密码错误', '提示：你可以使用admin/admin登入系统', Ext.emptyFn);
//       }
    }
});
