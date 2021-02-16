import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-chartjs-2';

export default function LineGraph(graphDataArray, pastDay, nowDay) { 

    const selectedData = useSelector((store) => store.search);
    
    useEffect(() => {
        const context = document.getElementById('myChart');
        new Chart(context,{
            type: 'line',
            data: {
                labels: [ pastDay, nowDay], 
                datasets: [
                {
                    label: '전체',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 3,
                    data: [graphDataArray[0], graphDataArray[1]],
                    fill: false
                },
                {
                    label: '무기',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 3,
                    data: [graphDataArray[2], graphDataArray[3]],
                    fill: false
                },
                {
                    label: '마약',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 0.2)',
                    borderWidth: 3,
                    data: [graphDataArray[4], graphDataArray[5]],
                    fill: false
                },
                {
                    label: '해킹',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 3,
                    data: [graphDataArray[6], graphDataArray[7]],
                    fill: false
                },
                {
                    label: '포르노',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 0.2)',
                    borderWidth: 3,
                    data: [graphDataArray[8], graphDataArray[9]],
                    fill: false
                },
            ]
            },
            options: {
                responsive: false,
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: '불법거래 종류(날짜)'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '불법 거래량'
                        }
                    }]
                }
            }
    
        })
    }, [selectedData.continent, selectedData.date]);

    return <canvas id="myChart"></canvas>
}