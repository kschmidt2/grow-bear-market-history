let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}});let chartIdBMHistory=document.getElementById("chart-container-bear-market-history");function drawHighcharts(){Highcharts.chart(chartIdBMHistory,{chart:{type:"variwide",styledMode:!0,spacingBottom:25,spacingRight:100,marginLeft:40},title:{text:null},series:[{data:[["May 1946 – October '46",26.6,4.4],["June 1948 – June '49",20.6,12.1],["July 1957 – Oct. '57",20.7,3.3],["Dec. 1961 – June '62",28,6.5],["Feb. 1966 – Oct. '66",22.2,8],["Nov. 1968 – May '70",36.1,18.1],["Jan. 1973 – Oct. '74",48.2,21],["Nov. 1980 – Aug. '82",27.1,20.7],["Aug. 1987 – Dec. '87",33.5,3.4],["March 2000 – Oct. '02",49.1,31],["Oct. 2007 – March '09",56.8,17.2]]}],plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.z:,.0f}",allowOverlap:!0,verticalAlign:"top",align:"center"}}},legend:{enabled:!1},xAxis:{title:{text:"Duration of bear market, in months",align:"low"},type:"category",labels:{enabled:!1,overflow:"allow",padding:20,style:{whiteSpace:"wrap"}}},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,pointFormat:"<b>Percent loss:</b> {point.y:.1f}%<br><b>Duration:</b> {point.z} months<br>"},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})}setTimeout(function(){if(""===chartIdBMHistory.innerHTML){let e=document.getElementsByClassName("chart-area-bear-market-history");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}},500),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZEJNSGlzdG9yeSIsImRyYXdIaWdoY2hhcnRzIiwiY2hhcnQiLCJ0eXBlIiwic3R5bGVkTW9kZSIsInNwYWNpbmdCb3R0b20iLCJzcGFjaW5nUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGl0bGUiLCJ0ZXh0Iiwic2VyaWVzIiwiZGF0YSIsInBsb3RPcHRpb25zIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJmb3JtYXQiLCJhbGxvd092ZXJsYXAiLCJ2ZXJ0aWNhbEFsaWduIiwiYWxpZ24iLCJsZWdlbmQiLCJ4QXhpcyIsImxhYmVscyIsIm92ZXJmbG93IiwicGFkZGluZyIsIndoaXRlU3BhY2UiLCJ5QXhpcyIsInVzZUhUTUwiLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBvaW50Rm9ybWF0IiwicmVzcG9uc2l2ZSIsInJ1bGVzIiwiY29uZGl0aW9uIiwibWF4V2lkdGgiLCJjaGFydE9wdGlvbnMiLCJ4Iiwic2V0VGltZW91dCIsImlubmVySFRNTCIsImNoYXJ0QXJlYSIsImRpc3BsYXkiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBZUEsSUFBQUEsUUFBQUMsU0FBQUMsdUJBQUEsaUJBQ0FDLFNBQUFGLFNBQUFHLGVBQUEsY0FDQSxJQUFBRCxTQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBTCxRQUFBTSxPQUFBRCxJQUNBTCxRQUFBSyxHQUFBRSxNQUFBQyxXQUFBLE1BSUFDLFdBQUFDLFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BSUEsSUFBQUMsaUJBQUFaLFNBQUFHLGVBQUEsdUNBaUJBLFNBQUFVLGlCQUNBTCxXQUFBTSxNQUFBRixpQkFBQSxDQUNBRSxNQUFBLENBQ0FDLEtBQUEsV0FDQUMsWUFBQSxFQUNBQyxjQUFBLEdBQ0FDLGFBQUEsSUFDQUMsV0FBQSxJQUVBQyxNQUFBLENBQ0FDLEtBQUEsTUFFQUMsT0FBQSxDQUFBLENBQ0FDLEtBQUEsQ0FDQSxDQUFBLHlCQUFBLEtBQUEsS0FDQSxDQUFBLHVCQUFBLEtBQUEsTUFDQSxDQUFBLHVCQUFBLEtBQUEsS0FDQSxDQUFBLHVCQUFBLEdBQUEsS0FDQSxDQUFBLHVCQUFBLEtBQUEsR0FDQSxDQUFBLHNCQUFBLEtBQUEsTUFDQSxDQUFBLHVCQUFBLEtBQUEsSUFDQSxDQUFBLHVCQUFBLEtBQUEsTUFDQSxDQUFBLHVCQUFBLEtBQUEsS0FDQSxDQUFBLHdCQUFBLEtBQUEsSUFDQSxDQUFBLHdCQUFBLEtBQUEsU0FHQUMsWUFBQSxDQUNBRixPQUFBLENBQ0FHLFdBQUEsQ0FDQUMsU0FBQSxFQUVBQyxPQUFBLGlCQUNBQyxjQUFBLEVBQ0FDLGNBQUEsTUFDQUMsTUFBQSxZQUlBQyxPQUFBLENBQ0FMLFNBQUEsR0FFQU0sTUFBQSxDQUNBWixNQUFBLENBQ0FDLEtBQUEscUNBQ0FTLE1BQUEsT0FFQWYsS0FBQSxXQUNBa0IsT0FBQSxDQUNBUCxTQUFBLEVBQ0FRLFNBQUEsUUFDQUMsUUFBQSxHQUNBN0IsTUFBQSxDQUNBOEIsV0FBQSxVQUlBQyxNQUFBLENBQ0FqQixPQUFBLEVBQ0FhLE9BQUEsQ0FDQUssU0FBQSxFQUNBSixTQUFBLFVBR0FLLFFBQUEsQ0FDQWIsU0FBQSxHQUVBYyxRQUFBLENBQ0FDLFFBQUEsRUFDQU4sUUFBQSxHQUNBTyxZQUFBLGdGQUdBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBakMsTUFBQSxDQUNBSSxhQUFBLElBRUFhLE9BQUEsQ0FDQUQsTUFBQSxPQUNBa0IsR0FBQSxJQUVBUixRQUFBLENBQ0FkLFNBQUEsU0FyR0F1QixXQUFBLFdBQ0EsR0FBQSxLQUFBckMsaUJBQUFzQyxVQUFBLENBRUEsSUFBQUMsRUFBQW5ELFNBQUFDLHVCQUFBLGtDQUNBLElBQUEsSUFBQUcsRUFBQSxFQUFBQSxFQUFBK0MsRUFBQTlDLE9BQUFELElBQ0ErQyxFQUFBL0MsR0FBQUUsTUFBQThDLFFBQUEsT0FHQXBELFNBQUFHLGVBQUEsa0JBQUErQyxXQUFBLDRJQUlBLEtBaUdBLGFBQUFsRCxTQUFBcUQsWUFBQSxnQkFBQXJELFNBQUFxRCxXQUNBeEMsaUJBRUFiLFNBQUFzRCxpQkFBQSxtQkFBQXpDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XFxcblxuLy8gYWRkcyBzb2NpYWwtc3F1YXJlIGNsYXNzIHRvIGdldCBzcXVhcmUgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsLXNxdWFyZVwiO1xuLy8gfVxuXG4vLyBib2xkcyB0aGUgc3ViaGVhZCBpZiB0aGVyZSBpcyBubyBoZWFkbGluZVxubGV0IHN1YmhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtc3ViaGVhZFwiKSxcbiAgICBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtaGVhZFwiKTtcbiAgICBpZiAoIWhlYWRsaW5lKSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdWJoZWFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJoZWFkW2ldLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiO1xuICAgICAgICB9ICAgICAgIFxuICAgICB9XG5cbkhpZ2hjaGFydHMuc2V0T3B0aW9ucyh7XG4gICAgbGFuZzoge1xuICAgICAgdGhvdXNhbmRzU2VwOiAnLCdcbiAgICB9XG59KTtcblxubGV0IGNoYXJ0SWRCTUhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWNvbnRhaW5lci1iZWFyLW1hcmtldC1oaXN0b3J5XCIpO1xuXG4vLyBjaGVja3MgZm9yIHRoZSBjaGFydCBJRCBhbmQgZGlzcGxheXMgYSBiYWNrdXAgaW1hZ2UgaWYgdGhlIGJyb3dzZXIgY2FuJ3QgZmluZCBpdFxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZihjaGFydElkQk1IaXN0b3J5LmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbm9JZCcpO1xuICAgICAgICBsZXQgY2hhcnRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWEtYmVhci1tYXJrZXQtaGlzdG9yeVwiKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoYXJ0QXJlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hhcnRBcmVhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gaW5zZXJ0IGNoYXJ0IHNjcmVlbnNob3QgaGVyZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWZhbGxiYWNrXCIpLmlubmVySFRNTCArPSAnPGltZyBzcmM9XCJodHRwczovL2ZtLXN0YXRpYy5jbmJjLmNvbS9hd3NtZWRpYS9jaGFydC8yMDE5LzEwLzA4L2NoYXJ0LWVycm9yX3dpZGUuMTU3MDU2OTMzMTI1Mi5wbmdcIiBzdHlsZT1cIndpZHRoOiAxMDAlO21heC13aWR0aDo2NjBweFwiPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3llc0lkJylcbiAgICB9XG59LDUwMCk7XG5cbmZ1bmN0aW9uIGRyYXdIaWdoY2hhcnRzKCkge1xuICAgIEhpZ2hjaGFydHMuY2hhcnQoY2hhcnRJZEJNSGlzdG9yeSwge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdHlwZTogJ3Zhcml3aWRlJyxcbiAgICAgICAgICAgIHN0eWxlZE1vZGU6IHRydWUsXG4gICAgICAgICAgICBzcGFjaW5nQm90dG9tOiAyNSxcbiAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTAwLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogNDBcbiAgICAgICAgfSwgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICBbXCJNYXkgMTk0NiDigJMgT2N0b2JlciAnNDZcIiwyNi42LDQuNF0sXG4gICAgICAgICAgICAgICAgW1wiSnVuZSAxOTQ4IOKAkyBKdW5lICc0OVwiLDIwLjYsMTIuMV0sXG4gICAgICAgICAgICAgICAgW1wiSnVseSAxOTU3IOKAkyBPY3QuICc1N1wiLDIwLjcsMy4zXSxcbiAgICAgICAgICAgICAgICBbXCJEZWMuIDE5NjEg4oCTIEp1bmUgJzYyXCIsMjguMCw2LjVdLFxuICAgICAgICAgICAgICAgIFtcIkZlYi4gMTk2NiDigJMgT2N0LiAnNjZcIiwyMi4yLDguMF0sXG4gICAgICAgICAgICAgICAgW1wiTm92LiAxOTY4IOKAkyBNYXkgJzcwXCIsMzYuMSwxOC4xXSxcbiAgICAgICAgICAgICAgICBbXCJKYW4uIDE5NzMg4oCTIE9jdC4gJzc0XCIsNDguMiwyMS4wXSxcbiAgICAgICAgICAgICAgICBbXCJOb3YuIDE5ODAg4oCTIEF1Zy4gJzgyXCIsMjcuMSwyMC43XSxcbiAgICAgICAgICAgICAgICBbXCJBdWcuIDE5ODcg4oCTIERlYy4gJzg3XCIsMzMuNSwzLjRdLFxuICAgICAgICAgICAgICAgIFtcIk1hcmNoIDIwMDAg4oCTIE9jdC4gJzAyXCIsNDkuMSwzMS4wXSxcbiAgICAgICAgICAgICAgICBbXCJPY3QuIDIwMDcg4oCTIE1hcmNoICcwOVwiLDU2LjgsMTcuMl0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9XSxcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlSFRNTDogdHJ1ZSwgIFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICd7cG9pbnQuejosLjBmfScsXG4gICAgICAgICAgICAgICAgICAgIGFsbG93T3ZlcmxhcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0R1cmF0aW9uIG9mIGJlYXIgbWFya2V0LCBpbiBtb250aHMnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnbG93J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2FsbG93JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnd3JhcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2FsbG93J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgcG9pbnRGb3JtYXQ6ICc8Yj5QZXJjZW50IGxvc3M6PC9iPiB7cG9pbnQueTouMWZ9JTxicj4nICtcbiAgICAgICAgICAgICAgICAnPGI+RHVyYXRpb246PC9iPiB7cG9pbnQuen0gbW9udGhzPGJyPidcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgeDogLTE4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICBkcmF3SGlnaGNoYXJ0cygpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBkcmF3SGlnaGNoYXJ0cyk7XG59Il19
