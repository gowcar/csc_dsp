var CGJE_Chart_data1 = {
      "chart": {
          "palette": "2",
          "caption": "中建股份采购金额年度报表",
          "subcaption": "2011年12月",
          "showvalues": "0",
          "divlinedecimalprecision": "1",
          "limitsdecimalprecision": "1",
          "pyaxisname": "Amount",
          "syaxisname": "Quantity",
          "numberprefix": "$",
          "formatnumberscale": "0"
      },
      "categories": [
          {
              "category": [
                  {
                      "label": "一月"
                  },
                  {
                      "label": "二月"
                  },
                  {
                      "label": "三月"
                  },
                  {
                      "label": "四月"
                  },
                  {
                      "label": "五月"
                  },
                  {
                      "label": "六月"
                  },
                  {
                      "label": "七月"
                  },
                  {
                      "label": "八月"
                  },
                  {
                      "label": "九月"
                  },
                  {
                      "label": "十月"
                  }
              ]
          }
      ],
      "dataset": [
          {
              "seriesname": "预算金额",
              "data": [
                  {
                      "value": "5854"
                  },
                  {
                      "value": "4171"
                  },
                  {
                      "value": "1375"
                  },
                  {
                      "value": "1875"
                  },
                  {
                      "value": "2246"
                  },
                  {
                      "value": "2696"
                  },
                  {
                      "value": "1287"
                  },
                  {
                      "value": "2140"
                  },
                  {
                      "value": "1603"
                  },
                  {
                      "value": "1628"
                  }
              ]
          },
          {
              "seriesname": "实际采购",
              "renderas": "Line",
              "data": [
                  {
                      "value": "3242"
                  },
                  {
                      "value": "3171"
                  },
                  {
                      "value": "700"
                  },
                  {
                      "value": "1287"
                  },
                  {
                      "value": "1856"
                  },
                  {
                      "value": "1126"
                  },
                  {
                      "value": "987"
                  },
                  {
                      "value": "1610"
                  },
                  {
                      "value": "903"
                  },
                  {
                      "value": "928"
                  }
              ]
          }
      ]
}

var CGJE_Chart_data2 = {
    "chart": {
          "caption": "中建股份各局采购占比情况",
          "subcaption": "2011年12月",
          "showvalues": "0",
        "formatnumberscale": "0"
    },
    "data": [
        {
            "label": "中建一局",
            "value": "51852"
        },
        {
            "label": "中建二局",
            "value": "88168"
        },
        {
            "label": "中建三局",
            "value": "73897"
        },
        {
            "label": "中建四局",
            "value": "93933"
        },
        {
            "label": "中建五局",
            "value": "19289"
        },
        {
            "label": "中建六局",
            "value": "79623"
        },
        {
            "label": "中建七局",
            "value": "48262"
        },
        {
            "label": "中建八局",
            "value": "29162"
        }
    ]
}  

Ext.define('DataIntegration.view.CGJE_Chart', {
           extend: 'Ext.Container',
           xtype:'cgje_chartview',
           config: {
               layout: 'fit',
               items: [{
            	   xtype:'carousel',
        		   activeItem: 0,
                   defaults: {
                       cls: 'card'
                   },
                   items:[{
                	   title: '中建股份采购金额年度报表',
                	   html: '<div id="CGJE_Chart_chartContainer1">正在装载...</div>'
                   },{
                	   title: '中建股份各局采购占比情况',
                	   html: '<div id="CGJE_Chart_chartContainer2">正在装载...</div>'
                   }]
               }]
           },
           refreshChart:function(){
        	   setTimeout(function(){
            	   
	         	  var CGJE_Chart_chartReference1 = FusionCharts("CGJE_Chart_chartId1");
	         	  if(CGJE_Chart_chartReference1){
	         		 CGJE_Chart_chartReference1.setJSONData(CGJE_Chart_data1);
	         		 CGJE_Chart_chartReference1.render("CGJE_Chart_chartContainer1");
	         	  } else {
	         		 var CGJE_Chart_chart1 = new FusionCharts("FusionCharts/MSCombi2D.swf",
	         			      "CGJE_Chart_chartId1", "95%", "550", "0", "1" );
		         	 CGJE_Chart_chart1.setJSONData(CGJE_Chart_data1);
		         	 CGJE_Chart_chart1.render("CGJE_Chart_chartContainer1");
	         	  }
	         	  
	         	  var CGJE_Chart_chartReference2 = FusionCharts("CGJE_Chart_chartId2");
	         	  if(CGJE_Chart_chartReference2){
	         		 CGJE_Chart_chartReference2.setJSONData(CGJE_Chart_data2);
	         		 CGJE_Chart_chartReference2.render("CGJE_Chart_chartContainer2");
	         	  } else {
	         		 var CGJE_Chart_chart2 = new FusionCharts("FusionCharts/Doughnut2D.swf",
	         			      "CGJE_Chart_chartId2", "95%", "550", "0", "1" );
		         	 CGJE_Chart_chart2.setJSONData(CGJE_Chart_data2);
		         	 CGJE_Chart_chart2.render("CGJE_Chart_chartContainer2");
	         	  }
	         	  
        	   },1000); 

           }
});