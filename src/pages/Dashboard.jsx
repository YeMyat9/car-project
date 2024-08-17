import React, { useState } from 'react';  
import CarTable from '../components/CarTable';  
import PieChart from '../components/PieChart';  
import BarChart from '../components/BarChart'; 
import carsData from '../data/cars.json';  
import logo from '../assets/logo.png';   

const Dashboard = () => {  
  const [searchTerm, setSearchTerm] = useState('');  

  const handleSearch = (event) => {  
    setSearchTerm(event.target.value);  
  };  

  const downloadCSV = () => {  
    const csvContent = "data:text/csv;charset=utf-8," +   
      carsData.map(e => e.join(",")).join("\n");  
    const encodedUri = encodeURI(csvContent);  
    const link = document.createElement("a");  
    link.setAttribute("href", encodedUri);  
    link.setAttribute("download", "cars_data.csv");  
    document.body.appendChild(link); 
    link.click();  
  };  

  return (  
    <div className="container">  
      <div className="d-flex align-items-center mb-4">  
        <h1 className="display-4">Dashboard</h1>  
      </div>  

      {/* <div className="mb-4">  
        <input   
          type="text"   
          placeholder="Search cars..."   
          value={searchTerm}   
          onChange={handleSearch}   
          className="form-control"   
        />  
      </div>  

      <div className="mb-4">  
        <button onClick={downloadCSV} className="btn btn-primary">  
          Download Data as CSV  
        </button>  
      </div>   */}

      <h2>Table of Cars</h2>  
      <div className="card mb-4">  
        <div className="card-body">  
          <CarTable data={carsData} />  
        </div>  
      </div>  

      <h2>Pie Chart</h2>  
      <div className="card mb-4">  
        <div className="card-body">  
          <PieChart data={carsData} />  
        </div>  
      </div>  

      <h2>Bar Chart</h2>  
      <div className="card mb-4">  
        <div className="card-body">  
          <BarChart data={carsData} />  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Dashboard;