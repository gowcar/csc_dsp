Ext.define('DataIntegration.store.Menus', {
    extend  : 'Ext.data.TreeStore',
    model   : 'DataIntegration.model.Menu',
    requires: ['DataIntegration.model.Menu'],
    root: {
        items: [
            { 
              text : '采购类业务图表',
             	icon  : 'resources/img/icons/cart.png',
             	leaf  : true,
             	view  : 'CGJE_Chart'
            },
            { 
              text : '材料类业务图表',
             	icon  : 'resources/img/icons/calculator.png',
             	leaf  : true,
             	view  : 'CailiaoJiage'
            },
            { 
              text : '供应商类业务图表',
             	icon  : 'resources/img/icons/tools.png',
             	leaf  : true,
             	view  : 'GYS_Chart'
            },
            { 
              text : '平台运行类业务图表',
             	icon  : 'resources/img/icons/clip.png',
             	leaf  : true,
             	view  : 'PTYX_Chart'
            },
            { 
              text : '市场趋势类业务图表',
             	icon  : 'resources/img/icons/empty_clipboard.png',
             	leaf  : true,
             	view  : 'SCQS_Chart'
            }]
    },
    defaultRootProperty: 'items'
});
