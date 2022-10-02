//SIDA

Chart.register(ChartDeferred);

const ctx6 = document.getElementById('Chart6');
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
        },
        plugins:{
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
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
            borderColor: 'rgba(237, 0, 0, 0.7)',
            backgroundColor: 'rgba(237, 0, 0,0.1)',
            borderWidth: 2.5,
            hoverBackgroundColor: '#ffffff',
            hoverBorderWidth: 4
        },
            {
                label: 'Женски',
                data: [0,0,0,2,1,3,1,2,0,0],
                fill: true,
                tension: 0.1,
                borderColor: 'rgba(155, 42, 221, 0.7)',
                backgroundColor: 'rgba(155, 42, 221,0.1)',
                borderWidth: 3,
                hoverBackgroundColor: '#ffffff',
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
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        }
    }
});

//sida novodijagnosticirani spored pol kumulativno
const ctx8 = document.getElementById('Chart8');
const myChart8 = new Chart(ctx8, {
    type: 'polarArea',
    data: {
        labels: ['Машки','Женски','Непознато'],
        datasets: [{
            data: [127,36,7],
            backgroundColor: [
                'rgba(237, 0, 0, 0.7)',
                'rgba(155, 42, 221, 0.7)',
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
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
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
            label: '',
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
                'rgba(0, 193, 158, 0.7)',
                'rgba(237,0,0,0.75)',
                'rgba(237,0,0,0.75)',
                'rgba(0, 193, 158, 0.7)',
                'rgba(237,0,0,0.75)',
                'rgba(0, 193, 158, 0.7)',
                'rgba(0, 193, 158, 0.7)',
                'rgba(0, 193, 158, 0.7)',
                'rgba(237,0,0,0.75)',
                'rgba(237,0,0,0.75)'
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
                beginAtZero: false,
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
            },
            tooltip: {
                enabled: false
            },
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        }
    }
});