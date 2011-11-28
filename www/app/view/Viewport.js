Ext.define('DataIntegration.view.Viewport', {
           extend: 'Ext.Container',
           xtype:'mainview',
           config: {
        	   fullscreen: true,
               layout    : {
                   type: 'card',
                   animation: {
                       type: 'slide',
                       direction: 'left',
                       duration: 250
                   }
               },
               items: [{
            	   xtype : 'container',
            	   layout:	'fit',
            	   html:'<center><div class="login-form">'+
            	   		'<input class="login-username"/>'+
            	   		'<input class="login-password" type="password"/>'+
            	   		'<INPUT type="image" src="resources/img/login_btn.png" name="imgSubmit" value=""  class="login-btn"/>'+
            	   		'</div></center>'
               }]
           }
});
