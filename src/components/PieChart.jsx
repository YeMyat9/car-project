import React, { useEffect, useRef } from 'react';  
import Chart from 'chart.js/auto';  

const PieChart = ({ data }) => {  
  const chartRef = useRef(null);  

  useEffect(() => {  
    const brands = {};  
    data.forEach(car => {  
      brands[car.brand] = (brands[car.brand] || 0) + 1;  
    });  

    const chart = new Chart(chartRef.current, {  
      type: 'pie',  
      data: {  
        labels: Object.keys(brands),  
        datasets: [{  
          data: Object.values(brands),  
          backgroundColor: [  
            '#F94449',   
            '#36A2EB', 
            '#89F336',   
            '#4BC0C0',    
            '#9966FF',   
            '#FF9F40',    
            '#F88379',    
            '#FFFF00'    
          ],  
        }]  
      },  
      options: {  
        responsive: true,  
        maintainAspectRatio: false,  
      }  
    });  

    return () => {  
      chart.destroy();  
    };  
  }, [data]);  

  return <canvas ref={chartRef} style={{ width: '400px', height: '400px' }}></canvas>;  

};  

export default PieChart;