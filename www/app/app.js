var dataIntegrationLauncher = {
		starting	: false,
		started		: false,
		mainLaunch	:function(){
	    	if (/*device &&*/ dataIntegrationLauncher.starting && !dataIntegrationLauncher.started) { 
	    		dataIntegrationLauncher.started = true;
	    		console.log('app launch');
		        Ext.Loader.setConfig ({enabled:true});
		        new Ext.Application({
		            //phoneStartupScreen: 'images/sencha_logo.png',
		            name       : 'DataIntegration',
		            // the controller will take care of creating the view        
		            controllers: ['Main']
		    	});
	    	}
	    }
};

Ext.setup({
    viewport: {
        autoMaximize: false
    },
    onReady: function () {
    	dataIntegrationLauncher.starting = true;
    	dataIntegrationLauncher.mainLaunch();
    }
});

FusionCharts.setCurrentRenderer('javascript');

function onBodyLoad() {
  /*
    document.addEventListener("deviceready", function(){
        window.plugins.splashScreen.show();
				dataIntegrationLauncher.mainLaunch();
        window.plugins.splashScreen.hide();

    }, false);
	*/
	document.addEventListener("deviceready", function(){dataIntegrationLauncher.mainLaunch();}, true);
}



