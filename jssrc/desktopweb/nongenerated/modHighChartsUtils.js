function lineChartDashboard(widgetModel, id, widgetName) {
    kony.print("inside lineChartDashboard widgetModel:::" + JSON.stringify(widgetModel));
    kony.print("inside lineChartDashboard id:::" + JSON.stringify(id));
    kony.print("inside lineChartDashboard widgetName:::" + JSON.stringify(widgetName));
    var calTextbox = '<div id="' + id + '" style="' + widgetModel.chartStyle + '" >Line Chart</div>';
    $("#" + widgetName).html(calTextbox);
    //$("#frmLanding_lcone").html(calTextbox); 
    //$("#frmLanding_lctwo").html(calTextbox); 
    //$("#frmLanding_lcthree").html(calTextbox); 
    chart = new Highcharts.Chart({
        chart: {
            renderTo: id,
            type: 'line',
            style: widgetModel['chartStyle'],
            //width:widgetModel['width']
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            labels: {
                enabled: false
            },
            visible: false
        },
        yAxis: {
            gridLineWidth: 0,
            title: {
                // text: widgetModel['yAxisTitle'],
                text: null
            },
            labels: {
                enabled: false
            }
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            line: {
                animation: false,
                marker: {
                    enabled: false
                }
            },
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        series: widgetModel['seriesValue']
    });
    chart.redraw();
}

function lineChartUpdate(widgetModel, id) {
    var calTextbox = '<div id="' + id + '" style="' + widgetModel['chartStyle'] + '" >Line Chart</div>';
    $("#frmLanding_lcone").html(calTextbox);
    chart = new Highcharts.Chart({
        chart: {
            renderTo: id,
            type: 'line',
            style: widgetModel['chartStyle'],
            // width:widgetModel['width']
        },
        legend: {
            enabled: false
        },
        title: {
            text: null, //widgetModel['titleText']
        },
        xAxis: {
            //categories: widgetModel['xAxisArray'],
            labels: {
                enabled: false
            },
            visible: false
        },
        yAxis: {
            gridLineWidth: 0,
            title: {
                // text: widgetModel['yAxisTitle'],
                text: null
            },
            labels: {
                enabled: false
            }
        },
        tooltip: {
            enabled: widgetModel['enableToolTip'],
            formatter: function() {
                return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: widgetModel['enableDataLabel']
                },
                enableMouseTracking: widgetModel['enableMouseTracking']
            }
        },
        series: widgetModel['seriesValue']
    });
    chart.redraw();
}

function chartColoumUpdate(widgetModel, id) {
    var chart;
    var calTextbox = '<div id="' + id + '" style="' + widgetModel['chartStyle'] + '" >Bar Chart</div>';
    $("#frmInitialDashboard-" + id + "_tpwPlaceHolder").html(calTextbox);
    if (widgetModel['hasLegend']) {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: id,
                type: widgetModel['chartType'],
                marginBottom: widgetModel['marginBottom'],
                style: widgetModel['chartStyle'],
                width: widgetModel['width']
            },
            colors: widgetModel['columnColors'],
            xAxis: {
                categories: widgetModel['xAxisText'],
                title: {
                    text: widgetModel['xAxisTitleText']
                },
                labels: {
                    style: {
                        fontSize: '7px',
                        fontWeight: 'normal'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: widgetModel['yAxisText']
                }
            },
            legend: {
                layout: 'horizontal',
                align: widgetModel['lgndAlign'],
                verticalAlign: widgetModel['lgndvAlign'],
                x: widgetModel['lgndxVal'],
                y: widgetModel['lgndyVal'],
                maxHeight: widgetModel['maxHeight'],
                floating: true,
                width: widgetModel['legendWidth'],
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return '' + this.x + ': ' + this.y;
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: widgetModel['seriesValue']
        });
    } else {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: id,
                type: widgetModel['chartType'],
                style: widgetModel['chartStyle'],
                width: widgetModel['width']
            },
            title: {
                text: widgetModel['titleText']
            },
            colors: widgetModel['columnColors'],
            xAxis: {
                categories: widgetModel['xAxisText']
            },
            yAxis: {
                min: 0,
                title: {
                    text: widgetModel['yAxisText']
                }
            },
            legend: {
                enabled: 0
            },
            tooltip: {
                formatter: function() {
                    return '' + this.x + ': ' + this.y;
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: widgetModel['seriesValue']
        });
    }
    chart.redraw();
}

function chartPieUpdate(widgetModel, id) {
    var calTextbox = '<div id="' + id + '" style="' + widgetModel['chartStyle'] + '" >Line Chart</div>';
    $("#frmInitialDashboard-" + id + "_tpwPlaceHolder").html(calTextbox);
    Highcharts.getOptions().plotOptions.pie.colors = (function() {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;
        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());
    chart = new Highcharts.Chart({
        chart: {
            renderTo: id,
            plotBackgroundColor: widgetModel['bgColor'],
            plotBorderWidth: widgetModel['borderWidth'],
            plotShadow: widgetModel['plotShadow'],
            type: 'pie',
            style: widgetModel['chartStyle'],
            width: widgetModel['width']
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: widgetModel['hasPointSelect'],
                cursor: widgetModel['cursorType'],
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || widgetModel['pieColor']
                    }
                }
            }
        },
        series: widgetModel['seriesValue']
    });
    chart.redraw();
}