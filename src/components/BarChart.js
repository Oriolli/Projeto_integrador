import React from 'react'
import { Line, defaults} from 'react-chartjs-2'
import '../pages/Home/chart.css'
import Chart from 'chart.js'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

var grafic1;
var grafic2;
var grafic3;
var grafic4;



const BarChart = (vau) => {

 
  grafic(vau);

  function grafic(vau, vad, vat, vac){
    grafic1 = vau;
    grafic2 = vad;
    grafic3 = vat;
    grafic4 = vac;
   
  }

  
  return (
    <div className='chart'>
      <Line
        data={{
          labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7', 'Dua 8', 'Dia 9', 'Dia 10'],
          datasets: [         
            {
              tension: 0.1,
              borderDash: [20],
             
              label: 'Evolução',
              data: [(vau)],
              
              borderWidth: 3,

              backgroundColor: [
                'rgba(78, 235, 230, 0.4)',
              ],
              borderColor: [
                'rgba(255, 38, 38, 1)',

              ],
               } ,
            
           
           
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={410}
        width={1200}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
    
  )
 
}


export default BarChart
