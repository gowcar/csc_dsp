var cailiaojiage_gufengongsi_options = {
      chart: {
         renderTo: 'cailiaojiage_gufengongsi_chartContainer',
         defaultSeriesType: 'spline',
      },
      title: {
         text: '中建股份下半年度材料价格趋势表（2011年度）'
      },
      xAxis: {
         categories: ["五月","六月","七月","八月","九月","十月"]
      },
      yAxis: {
         title: {
            text: '价格（千万）',
            style: {
               color: '#4572A7'
            }
         },
         labels: {
            formatter: function() {
               return this.value;
            },
            style: {
               color: '#4572A7'
            }
         }
      },
      tooltip: {
         formatter: function() {
            return '<b>' + this.series.name + ' ' + this.x + '</b><br/>' + this.y + '千万';
         }
      },
      legend: {
         layout: 'horizontal',
         align: 'center',
         verticalAlign: 'bottom',
         backgroundColor: '#FFFFFF'
      },
      plotOptions: {
         spline: {
            dataLabels: {
               enabled: true
            },
            enableMouseTracking: true
         }
      },
      series: [{
         name: '中建一局',
         data:[8.2, 9.1, 10.1, 11, 11.5, 10.3]   
      
      }, {
         name: '中建二局',
         data: [10.2, 11.1, 11.1, 12, 12.5, 9.3]
      }, {
         name: '中建三局',
         data: [8.2, 8.1, 9.1, 9, 9.5, 9.3]
      }, {
         name: '中建四局',
         data: [12.5, 13.5, 13.2, 14.1, 14.6, 16]
      }, {
         name: '中建八局',
         data: [8.8, 8.9, 9.3, 9, 9.9, 9.4]
      }, {
         name: '中建地产',
         data: [3.8, 3.9, 4.3, 4, 4.9, 3.4]
      }]
   };
   
var cailiaojiage_gongchengju_options = {
      chart: {
         renderTo: 'cailiaojiage_gongchengju_chartContainer',
         defaultSeriesType: 'column'
      },
      title: {
         text: '中建股份历年材料价格趋势表'
      },
      xAxis: {
         categories: ["2005年","2006年","2007年","2008年","2009年","2010年"]
      },
      yAxis: {
         title: {
            text: '价格（千万）',
            style: {
               color: '#4572A7'
            }
         },
         stackLabels: {
            enabled: true,
            style: {
               fontWeight: 'bold',
               color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
         }
      },
      tooltip: {
         formatter: function() {
            return '<b>'+ this.series.name + ' ' + this.x + '</b><br/>'+ this.y + '千万';
         }
      },
      plotOptions: {
         column: {
            stacking: 'normal',
            dataLabels: {
               enabled: true,
               color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
         }
      },
      legend: {
         layout: 'horizontal',
         align: 'center',
         verticalAlign: 'bottom',
         backgroundColor: '#FFFFFF'
      },
      series: [{
         name: '中建一局',
         data:[8.4, 9.6, 10, 11, 11, 10]   
      
      }, {
         name: '中建二局',
         data: [10.2, 11.1, 11.1, 12, 12.5, 9.3]
      }, {
         name: '中建三局',
         data: [8.3, 8, 9.1, 9, 9.5, 9.3]
      }, {
         name: '中建四局',
         data: [12.5, 13.5, 13.2, 14.1, 14.6, 16]
      }, {
         name: '中建八局',
         data: [8.8, 8.9, 9.3, 9, 9.9, 9.4]
      }, {
         name: '中建地产',
         data: [3.8, 3.9, 4.3, 4, 4.9, 3.4]
      }]
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
                	   html: '<div id="cailiaojiage_gufengongsi_chartContainer"></div>'
                   },{
                	   html: '<div id="cailiaojiage_gongchengju_chartContainer"></div>'
                   }]
               }]
           },
           refreshChart:function(toolbarHeight){
        	   setTimeout(function(){
			   var chartWidth = Ext.getBody().getWidth()-270;
			   var chartHeight = Ext.getBody().getHeight() - toolbarHeight - 100;
        		   $('#cailiaojiage_gufengongsi_chartContainer').width(chartWidth);
        		   $('#cailiaojiage_gufengongsi_chartContainer').height(chartHeight);
				   
			       $('#cailiaojiage_gongchengju_chartContainer').width(chartWidth);
        		   $('#cailiaojiage_gongchengju_chartContainer').height(chartHeight);				   
				   
				   var cailiaojiage_gufengongsi_chart = new Highcharts.Chart(cailiaojiage_gufengongsi_options);
				   var cailiaojiage_gongchengju_chart = new Highcharts.Chart(cailiaojiage_gongchengju_options);
					
					//$('#cailiaojiage_container').orbit({timer: false,bullets: true});
        	   },500); 

           }
});
