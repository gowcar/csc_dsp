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
                       duration: 500
                   }
               },
               items: [{
            	   xtype : 'container',
            	   layout:	'fit',
            	   html:'<center><div class="login-form">'+
            	      '<div class="login-title"></div>'+
            	   		'<div class="login-input-text1">用户名</div><div class="login-input1"><img src="resources/img/login_inputbg.png"/></div>'+
            	   		'<div class="login-input-text2">密码</div><div class="login-input2"><img src="resources/img/login_inputbg.png"/></div>'+
            	   		'<input class="login-username"/>'+
            	   		'<input class="login-password" type="password"/>'+
            	   		'<INPUT type="image" src="resources/img/login_btn.png" name="imgSubmit" value=""  class="login-btn"/>'+
            	   		'</div></center>'
               }]
           }
});
