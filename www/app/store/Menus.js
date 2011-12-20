Ext.define('DataIntegration.store.Menus', {
    extend  : 'Ext.data.TreeStore',
    model   : 'DataIntegration.model.Menu',
    requires: ['DataIntegration.model.Menu'],
    root: {
        items: [
            { 
              text : '材料类图表',
             	icon  : 'resources/img/icons/calculator.png',
             	leaf  : true,
             	view  : 'CailiaoJiage'
            },
            { 
              text : '采购类图表',
             	icon  : 'resources/img/icons/cart.png',
             	leaf  : true,
             	view  : 'CGJE_Chart'
            },
            { 
              text : '供应商类图表',
             	icon  : 'resources/img/icons/tools.png',
             	leaf  : true,
             	view  : 'GYS_Chart'
            },
            { 
              text : '项目类图表',
             	icon  : 'resources/img/icons/clip.png',
             	leaf  : true,
             	view  : 'PTYX_Chart'
            },
            { 
              text : '因素分析类图表',
             	icon  : 'resources/img/icons/empty_clipboard.png',
             	leaf  : true,
             	view  : 'SCQS_Chart'
            }]
    },
    defaultRootProperty: 'items'
});
