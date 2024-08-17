import React, { useEffect, useRef } from 'react';  
import { Chart, registerables } from 'chart.js';  

Chart.register(...registerables);  

const BarChart = ({ data }) => {  
  const chartRef = useRef(null);  

  useEffect(() => {  
    const brands = {};  
    data.forEach(car => {  
      if (!brands[car.brand]) {  
        brands[car.brand] = {};  
      }  
      brands[car.brand][car.model] = (brands[car.brand][car.model] || 0) + 1;  
    });  

    const chartColors = [  
      '#F94449',   
      '#36A2EB', 
      '#89F336',   
      '#4BC0C0',    
      '#9966FF',   
      '#FF9F40',    
      '#F88379',    
      '#FFFF00'  
    ];  

    const chart = new Chart(chartRef.current, {  
      type: 'bar',  
      data: {  
        labels: Object.keys(brands),  
        datasets: Object.keys(brands).map((brand, index) => ({  
          label: brand,  
          data: Object.values(brands[brand]),  
          backgroundColor: chartColors[index] || '#CCCCCC', 
        }))  
      },  
      options: {  
        responsive: true,  
        maintainAspectRatio: false,  
        scales: {  
          x: {  
            stacked: true,  
          },  
          y: {  
            stacked: true,  
          }  
        }  
      }  
    });  

    return () => {  
      chart.destroy();  
    };  
  }, [data]);  

  return <canvas ref={chartRef} style={{ width: '700px', height: '700px' }}></canvas>;   
};  

export default BarChart;