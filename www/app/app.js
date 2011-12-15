var dspApp = null;

var dataIntegrationLauncher = {
		starting	: false,
		started		: false,
		mainLaunch	:function(){
			if(typeof(device) !== 'undefined' && device){
				window.plugins.splashScreen.show();
			}
	    	if (/*device &&*/ dataIntegrationLauncher.starting && !dataIntegrationLauncher.started) { 
	    		dataIntegrationLauncher.started = true;
	    		console.log('app launch');
		        Ext.Loader.setConfig ({enabled:true});
		        dspApp = new Ext.Application({
		            name       : 'DataIntegration',
		            // the controller will take care of creating the view        
		            controllers: ['Main']
		    	});
                if(typeof(device) !== 'undefined' && device){
                    window.plugins.splashScreen.hide();
                }
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

function onBodyLoad() {
	document.addEventListener("deviceready", function(){dataIntegrationLauncher.mainLaunch();}, true);
}



