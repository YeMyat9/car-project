import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CarTable = ({ data }) => {
  const brands = {};

  data.forEach(car => {
    if (!brands[car.brand]) {
      brands[car.brand] = { count: 0, models: {}, totalPrice: 0 };
    }
    brands[car.brand].count++;
    brands[car.brand].totalPrice += car.value;
    brands[car.brand].models[car.model] = (brands[car.brand].models[car.model] || 0) + 1;
  });

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Number</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(brands).map(brand => (
          <React.Fragment key={brand}>
            <tr>
              <td>{brand}</td>
              <td></td>
              <td>{brands[brand].count}</td>
              <td>฿{brands[brand].totalPrice.toFixed(2)}</td>
            </tr>
            {Object.keys(brands[brand].models).map(model => (
              <tr key={model}>
                <td></td>
                <td>{model}</td>
                <td>{brands[brand].models[model]}</td>
                <td>฿{(brands[brand].totalPrice / brands[brand].count).toFixed(2)}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default CarTable;
