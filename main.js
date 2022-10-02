
//HIV
//BROJ NA NOVOINFICIRANI SO HIV OD 2009 DO 2018 (CHART 1)
Chart.register(ChartDeferred);

const ctx1 = document.getElementById('Chart1');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    title: 'Број на новодијагностицирани со ХИВ (2009-2018)',
    data: {
        labels: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets: [{
            label: 'Број на новодијагностицирани со ХИВ (2009-2018)',
            data: [6,5,1,15,15,30,25,30,44,45],
            backgroundColor: [
                'rgba(33, 0, 0, 0.2)',
                'rgba(28, 0, 0, 0.2)',
                'rgba(5, 0, 0, 0.2)',
                'rgba(84, 0, 0, 0.2)',
                'rgba(84, 0, 0, 0.2)',
                'rgba(168, 0, 0, 0.2)',
                'rgba(140,0,0,0.2)',
                'rgba(168, 0, 0, 0.2)',
                'rgba(246,0,0,0.2)',
                'rgba(245,0,0,0.2)'
            ],
            borderColor: '#777777',
            borderWidth: 1,
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }]
    },
    plugins: [ChartDeferred],
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        }
    }
});

//BROJ NA NOVODIJAGNOSTICIRANI SPORED POL 2009-2018
const ctx2 = document.getElementById('Chart2');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets: [{
            label: 'Машки',
            data: [6,5,0,10,15,29,24,28,44,45],
            fill: false,
            tension: 0.1,
            borderColor: 'rgba(237, 0, 0, 0.7)',
            borderWidth: 2.5,
            hoverBackgroundColor: '#ffffff',
            hoverBorderWidth: 4 },
            {
                label: 'Женски',
                data: [0,0,0,4,0,0,1,1,0,0],
                fill: false,
                tension: 0.1,
                borderColor: 'rgba(155, 42, 221, 0.7)',
                borderWidth: 3,
                hoverBackgroundColor: '#ffffff',
                hoverBorderWidth: 5
            },
            {
                label: 'Непознато',
                data: [0,0,1,1,0,1,0,1,0,0],
                fill: false,
                tension: 0.1,
                borderColor: '#777777',
                borderWidth: 3,
                hoverBorderColor: '#000000',
                hoverBorderWidth: 5
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: 'Број на новодијагностицирани со ХИВ според пол (2009-2018)'
                }
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        }
    }
});

//BROJ NA NOVODIJAGNOSTICIRANI SPORED POL KUMULATIVNO
const ctx3 = document.getElementById('Chart3');
const myChart3 = new Chart(ctx3, {
    type: 'polarArea',
    data: {
        labels: ['Машки','Женски','Непознато'],
        datasets: [{
            data: [221,18,7],
            backgroundColor: [
                'rgba(237, 0, 0, 0.7)',
                'rgba(155, 42, 221, 0.7)',
                'rgba(119,119,119,0.79)',
            ],
            //spacing: 2,
            //borderColor: '#777777',
            //borderWidth: 1,
            //hoverBorderColor: '#000000',
            //hoverBorderWidth: 2,
            hoverOffset: 8
        }]

    },
    options: {
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: 'Број на новодијагностицирани со ХИВ според пол кумулативно од 1993'
                }
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        }
    }
});

//hiv novodijagnosticirani spored nachin na transmisija (2009-2018)
const ctx4 = document.getElementById('Chart4');
const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets: [{
            label: 'МСМ (мажи кои имале секс со мажи)',
            data: [3,5,1,7,13,26,21,18,34,37],
            backgroundColor: 'rgba(155, 42, 221, 0.7)',
            //borderColor: '#777777',
            //borderWidth: 1,
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }, {
            label: 'Инјектирање на дроги',
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: 'rgba(0, 193, 158, 0.7)',
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }, {
            label: 'Хетеросексуален однос',
            data: [2,0,0,7,2,4,4,10,8,6],
            backgroundColor: 'rgba(237, 0, 0,0.7)',
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }, {
            label: 'Пренос од мајка на дете',
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: 'rgba(237, 177, 49,0.7)',
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }, {
            label: 'Непознато',
            data: [1,0,0,1,0,0,0,2,2,2],
            backgroundColor: 'rgba(119,119,119,0.79)',
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }]
    },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        },
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: 'Број на новодијагностицирани со ХИВ според начин на трансмисија (2009-2018)'
                }
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        }
    }
});

//hiv novodijagnosticirani spored nachin na transmisija kumulativno
const ctx5 = document.getElementById('Chart5');
const myChart5 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['МСМ','Инјектирање на дроги', 'Хетеро', 'Пренос од мајка на дете','Непознато'],
        datasets: [{
            data: [173,2,59,2,10],
            backgroundColor: [
                'rgba(155, 42, 221, 0.7)',
                'rgba(0, 193, 158,0.7)',
                'rgba(237, 0, 0, 0.7)',
                'rgba(237, 177, 49,0.7)',
                'rgba(119,119,119,0.79)'
            ],
            //spacing: 2,
            //borderColor: '#777777',
            //borderWidth: 1,
            //hoverBorderColor: '#000000',
            //hoverBorderWidth: 2,
            hoverOffset: 8
        }]

    },
    options: {
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: '# новодијагностицирани со ХИВ според начин на трансмисија кумул. од 1993'
                }
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            },
            labels: {
                render: 'percentage',
                fontColor: 'white'
            }
        }
    }
});


//SIDA
//sida novodijagnosticirani 2009-2018
/*const ctx6 = document.getElementById('Chart6');
const myChart6 = new Chart(ctx6, {
    type: 'bar',
    title: 'Број на новодијагностицирани со СИДА (2009-2018)',
    data: {
        labels: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets: [{
            label: 'Број на новодијагностицирани со СИДА (2009-2018)',
            data: [2,6,8,10,10,16,6,9,2,4],
            backgroundColor: [
                'rgba(32, 0, 0, 0.2)',
                'rgba(96, 0, 0, 0.2)',
                'rgba(127, 0, 0, 0.2)',
                'rgba(159, 0, 0, 0.2)',
                'rgba(159, 0, 0, 0.2)',
                'rgba(255, 0, 0, 0.2)',
                'rgba(96,0,0,0.2)',
                'rgba(143, 0, 0, 0.2)',
                'rgba(32,0,0,0.2)',
                'rgba(64,0,0,0.2)'
            ],
            borderColor: '#777777',
            borderWidth: 1,
            hoverBorderColor: '#000000',
            hoverBorderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

//sida novodijagnosticirani spored pol 2009-2018
const ctx7 = document.getElementById('Chart7');
const myChart7 = new Chart(ctx7, {
    type: 'line',
    data: {
        labels: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets: [{
            label: 'Машки',
            data: [2,6,5,8,9,13,5,6,2,4],
            fill: true,
            tension: 0.1,
            borderColor: 'rgba(243, 133, 36, 0.7)',
            backgroundColor: 'rgba(243,133,36,0.1)',
            borderWidth: 2.5,
            hoverBackgroundColor: 'rgba(150,78,14,0.94)',
            hoverBorderWidth: 4
        },
            {
                label: 'Женски',
                data: [0,0,0,2,1,3,1,2,0,0],
                fill: true,
                tension: 0.1,
                borderColor: 'rgba(52, 190, 224, 0.7)',
                backgroundColor: 'rgba(52,190,224,0.1)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(43,94,107,0.87)',
                hoverBorderWidth: 5
            },
            {
                label: 'Непознато',
                data: [0,0,3,0,0,0,0,1,0,0],
                fill: true,
                tension: 0.1,
                borderColor: '#777777',
                borderWidth: 3,
                hoverBorderColor: '#000000',
                hoverBorderWidth: 5
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: 'Број на новодијагностицирани со СИДА според пол (2009-2018)'
                }
            }
        }
    }
});

//sida novodijagnosticirani spored pol kumulativno
const ctx8 = document.getElementById('Chart8');
const myChart8 = new Chart(ctx8, {
    type: 'doughnut',
    data: {
        labels: ['Машки','Женски','Непознато'],
        datasets: [{
            data: [127,36,7],
            backgroundColor: [
                'rgba(243, 133, 36, 0.7)',
                'rgba(52, 190, 224, 0.7)',
                'rgba(119,119,119,0.79)',
            ],
            spacing: 2,
            hoverOffset: 8
        }]

    },
    options: {
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: 'Број на новодијагностицирани со СИДА според пол кумулативно од 1993'
                }
            }
        }
    }
});

//smrtni sluvhai povrzani so sida
const ctx9 = document.getElementById('Chart9');
const myChart9 = new Chart(ctx9, {
    type: 'bubble',
    title: 'Број на новодијагностицирани со СИДА (2009-2018)',
    data: {
        labels: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        datasets: [{
            label: 'asd',
            //showLabel: false,
            data: [
                {x:2009, y:0, r:3},
                {x:2010, y:1, r:5},
                {x:2011, y:4, r:20},
                {x:2012, y:0, r:3},
                {x:2013, y:3, r:15},
                {x:2014, y:0, r:3},
                {x:2015, y:0, r:3},
                {x:2016, y:0, r:3},
                {x:2017, y:2, r:10},
                {x:2018, y:1, r:5}
            ],
            backgroundColor: [
                'rgba(62,245,19,0.83)',
                'rgba(245,0,0,0.75)',
                'rgba(245,0,0,0.75)',
                'rgba(62,245,19,0.83)',
                'rgba(245,0,0,0.75)',
                'rgba(62,245,19,0.83)',
                'rgba(62,245,19,0.83)',
                'rgba(62,245,19,0.83)',
                'rgba(245,0,0,0.75)',
                'rgba(245,0,0,0.75)'
            ],
            // borderColor: '#777777',
            // borderWidth: 1,
            // hoverBorderColor: '#000000',
            // hoverBorderWidth: 2,
            // barPercentage: 0.9,
            // categoryPercentage: 0.9
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: false
            }
        },
        plugins: {
            legend: {
                title: {
                    font: {
                        weight: 700,
                        size: 13
                    },
                    display: true,
                    text: 'Број на смртни случаи поврзани со СИДА'
                },
                labels: {
                    boxColor: 'rgba(245,0,0,0.75)'
                }
            }
        }
    }
});*/
