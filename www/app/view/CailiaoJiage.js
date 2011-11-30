var cailiaojiage_demoData1 = {
        "chart": {
            "yaxisname": "价格",
            "caption": "股份公司材料价格",
            "numberprefix": "$",
            "useroundedges": "1",
            "bgcolor": "FFFFFF,FFFFFF",
            "showborder": "0"
        },
        "data": [
            {
              "label": "一局",
              "value": "25000"
            },
            {
              "label": "二局",
              "value": "35000"
            },
            {
              "label": "三局",
              "value": "42300"
            },
            {
              "label": "四局",
              "value": "35300"
            },
            {
              "label": "五局",
              "value": "31300"
            }
        ]
};

var cailiaojiage_demoData2 = {
    "chart": {
        "caption": "Business Results",
        "subcaption": "2004 v 2005",
        "yaxisname": "Revenue (Millions)",
        "showvalues": "0",
        "useroundedges": "1"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Hardware"
                },
                {
                    "label": "Software"
                },
                {
                    "label": "Service"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "2004",
            "color": "FDC12E",
            "data": [
                {
                    "value": "124"
                },
                {
                    "value": "247"
                },
                {
                    "value": "156"
                }
            ]
        },
        {
            "seriesname": "2005",
            "color": "333333",
            "data": [
                {
                    "value": "156"
                },
                {
                    "value": "277"
                },
                {
                    "value": "123"
                }
            ]
        }
    ]

};


Ext.define('DataIntegration.view.CailiaoJiage', {
           extend: 'Ext.Container',
           xtype:'cailiaojiageview',
           config: {
               layout: 'fit',
               items: [{
            	   xtype:'carousel',
        		   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   title: '股份公司材料价格',
                	   html: '<div id="cailiaojiage_gufengongsi_chartContainer">FusionCharts will load here!</div>'
                   },{
                	   title: '工程局材料价格',
                	   html: '<div id="cailiaojiage_gongchengju_chartContainer">FusionCharts will load here!</div>'
                   }]
               }]
           },
           refreshChart:function(){
        	   setTimeout(function(){
            	   
	         	  var cailiaojiage_gufengongsi_chartReference = FusionCharts("cailiaojiage_gufengongsi_chartId");
	         	  if(cailiaojiage_gufengongsi_chartReference){
	         		 cailiaojiage_gufengongsi_chartReference.setJSONData(cailiaojiage_demoData1);
	         		 cailiaojiage_gufengongsi_chartReference.render("cailiaojiage_gufengongsi_chartContainer");
	         	  } else {
	         		 var cailiaojiage_gufengongsi_chart = new FusionCharts("FusionCharts/Column2D.swf",
	         			      "cailiaojiage_gufengongsi_chartId", "95%", "550", "0", "1" );
		         	 cailiaojiage_gufengongsi_chart.setJSONData(cailiaojiage_demoData1);
		         	 cailiaojiage_gufengongsi_chart.render("cailiaojiage_gufengongsi_chartContainer");
	         	  }
	         	  
	         	  var cailiaojiage_gongchengju_chartReference = FusionCharts("cailiaojiage_gongchengju_chartId");
	         	  if(cailiaojiage_gongchengju_chartReference){
	         		 cailiaojiage_gongchengju_chartReference.setJSONData(cailiaojiage_demoData2);
	         		 cailiaojiage_gongchengju_chartReference.render("cailiaojiage_gongchengju_chartContainer");
	         	  } else {
	         		 var cailiaojiage_gongchengju_chart = new FusionCharts("FusionCharts/MSColumn2D.swf",
	         			      "cailiaojiage_gongchengju_chartId", "95%", "550", "0", "1" );
		         	 cailiaojiage_gongchengju_chart.setJSONData(cailiaojiage_demoData2);
		         	 cailiaojiage_gongchengju_chart.render("cailiaojiage_gongchengju_chartContainer");
	         	  }
	         	  
        	   },1000); 

           }
});