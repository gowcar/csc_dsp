var demoData1 = {
		  "chart":{
			    "caption":"股份公司采购金额折线图",
			    "xaxisname":"Month",
			    "yaxisname":"Revenue",
			    "numberprefix":"$",
			    "showvalues":"0"
			  },
			  "data":[{
			      "label":"Jan",
			      "value":"420000"
			    },
			    {
			      "label":"Feb",
			      "value":"910000"
			    },
			    {
			      "label":"Mar",
			      "value":"720000"
			    },
			    {
			      "label":"Apr",
			      "value":"550000"
			    },
			    {
			      "label":"May",
			      "value":"810000"
			    },
			    {
			      "label":"Jun",
			      "value":"510000"
			    },
			    {
			      "label":"Jul",
			      "value":"680000"
			    },
			    {
			      "label":"Aug",
			      "value":"620000"
			    },
			    {
			      "label":"Sep",
			      "value":"610000"
			    },
			    {
			      "label":"Oct",
			      "value":"490000"
			    },
			    {
			      "label":"Nov",
			      "value":"530000"
			    },
			    {
			      "label":"Dec",
			      "value":"330000"
			    }
			  ],
			  "trendlines":{
			    "line":[{
			        "startvalue":"700000",
			        "color":"009933",
			        "displayvalue":"Target"
			      }
			    ]
			  }
			};

var demoData2 = {
		  "chart":{
			    "caption":"工程局采购金额折线图",
			    "xaxisname":"Month",
			    "yaxisname":"Revenue",
			    "numberprefix":"$",
			    "showvalues":"0"
			  },
			  "data":[{
			      "label":"Jan",
			      "value":"520000"
			    },
			    {
			      "label":"Feb",
			      "value":"680000"
			    },
			    {
			      "label":"Mar",
			      "value":"880000"
			    },
			    {
			      "label":"Apr",
			      "value":"620000"
			    },
			    {
			      "label":"May",
			      "value":"710000"
			    },
			    {
			      "label":"Jun",
			      "value":"660000"
			    },
			    {
			      "label":"Jul",
			      "value":"680000"
			    },
			    {
			      "label":"Aug",
			      "value":"880000"
			    },
			    {
			      "label":"Sep",
			      "value":"610000"
			    },
			    {
			      "label":"Oct",
			      "value":"490000"
			    },
			    {
			      "label":"Nov",
			      "value":"530000"
			    },
			    {
			      "label":"Dec",
			      "value":"330000"
			    }
			  ],
			  "trendlines":{
			    "line":[{
			        "startvalue":"700000",
			        "color":"009933",
			        "displayvalue":"Target"
			      }
			    ]
			  }
			};


Ext.define('DataIntegration.view.CaigouJine', {
           extend: 'Ext.Container',
           xtype:'caigoujineview',
           config: {
               layout: 'fit',
               items: [{
            	   xtype:'carousel',
        		   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   title: '股份公司采购金额',
                	   html: '<div id="caigoujine_gufengongsi_chartContainer">FusionCharts will load here!</div>'
                   },{
                	   title: '工程局采购金额',
                	   html: '<div id="caigoujine_gongchengju_chartContainer">FusionCharts will load here!</div>'
                   }]
               }]
           },
           refreshChart:function(){
        	   setTimeout(function(){
            	   
	         	  var caigoujine_gufengongsi_chartReference = FusionCharts("caigoujine_gufengongsi_chartId");
	         	  if(caigoujine_gufengongsi_chartReference){
	         		 caigoujine_gufengongsi_chartReference.setJSONData(demoData1);
	         		 caigoujine_gufengongsi_chartReference.render("caigoujine_gufengongsi_chartContainer");
	         	  } else {
	         		 var caigoujine_gufengongsi_chart = new FusionCharts("FusionCharts/Line.swf",
	         			      "caigoujine_gufengongsi_chartId", "95%", "550", "0", "1" );
		         	 caigoujine_gufengongsi_chart.setJSONData(demoData1);
		         	 caigoujine_gufengongsi_chart.render("caigoujine_gufengongsi_chartContainer");
	         	  }
	         	  
	         	  var caigoujine_gongchengju_chartReference = FusionCharts("caigoujine_gongchengju_chartId");
	         	  if(caigoujine_gongchengju_chartReference){
	         		 caigoujine_gongchengju_chartReference.setJSONData(demoData2);
	         		 caigoujine_gongchengju_chartReference.render("caigoujine_gongchengju_chartContainer");
	         	  } else {
	         		 var caigoujine_gongchengju_chart = new FusionCharts("FusionCharts/Line.swf",
	         			      "caigoujine_gongchengju_chartId", "95%", "550", "0", "1" );
		         	 caigoujine_gongchengju_chart.setJSONData(demoData2);
		         	 caigoujine_gongchengju_chart.render("caigoujine_gongchengju_chartContainer");
	         	  }
	         	  
        	   },1000); 

           }
});