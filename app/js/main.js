// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }\

// adds social-square class to get square social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social-square";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdBMHistory = document.getElementById("chart-container-bear-market-history");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdBMHistory.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-bear-market-history");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdBMHistory, {
        chart: {
            type: 'variwide',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingTop: 15,
            marginLeft: 40
        }, 
        title: {
            text: null
        },
        series: [{
            data: [
                ["May 1946 – October '46",-26.6,4.4],
                ["June 1948 – June '49",-20.6,12.1],
                ["July 1957 – Oct. '57",-20.7,3.3],
                ["Dec. 1961 – June '62",-28.0,6.5],
                ["Feb. 1966 – Oct. '66",-22.2,8.0],
                ["Nov. 1968 – May '70",-36.1,18.1],
                ["Jan. 1973 – Oct. '74",-48.2,21.0],
                ["Nov. 1980 – Aug. '82",-27.1,20.7],
                ["Aug. 1987 – Dec. '87",-33.5,3.4],
                ["March 2000 – Oct. '02",-49.1,31.0],
                ["Oct. 2007 – March '09",-56.8,17.2],
            ],
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    // useHTML: true,  
                    format: '{point.z:,.0f}',
                    allowOverlap: true,
                    verticalAlign: 'top',
                    align: 'center'
                },
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'Duration of bear market, in months',
                align: 'low',
                y: -260
            },
            type: 'category',
            labels: {
                enabled: false,
                overflow: 'allow',
                padding: 20,
                style: {
                    whiteSpace: 'wrap'
                },
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            pointFormat: '<b>Percent loss:</b> {point.y:.1f}%<br>' +
                '<b>Duration:</b> {point.z} months<br>'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}