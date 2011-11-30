Ext.define('DataIntegration.store.Menus', {
    extend  : 'Ext.data.TreeStore',
    model   : 'DataIntegration.model.Menu',
    requires: ['DataIntegration.model.Menu'],
    root: {
        items: [
            { 
              text : '采购业务报表',
             	icon  : 'resources/img/icons/cart.png',
             	leaf  : true,
             	view  : 'CGJE_Chart'
            },
            { 
              text : '材料价格参考',
             	icon  : 'resources/img/icons/calculator.png',
             	leaf  : true,
             	view  : 'CailiaoJiage'
            },
            { 
              text : '供应商增长统计',
             	icon  : 'resources/img/icons/tools.png',
             	leaf  : true,
             	view  : 'CaigouJine'
            },
            { 
              text : '平台运行报表',
             	icon  : 'resources/img/icons/clip.png',
             	leaf  : true,
             	view  : 'CommingSoon'
            },
            { 
              text : '市场趋势报表',
             	icon  : 'resources/img/icons/empty_clipboard.png',
             	leaf  : true,
             	view  : 'CommingSoon'
            }]
    },
    defaultRootProperty: 'items'
});
