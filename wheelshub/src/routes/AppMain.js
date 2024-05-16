import React, { useState, useEffect } from 'react';
import CarCarousel from "./subcomponents/CarCarousel";
import CarContainer from "./subcomponents/CarContainer";
import { getCars } from '../api/index';

function AppMain() {

  const [Cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const fetchedCars = await getCars();
      setCars(fetchedCars);
    };

    fetchCars();
  }, []);

  return (
      <main>
          <div className="App-main">
              <h1 className="App-main-title">¡Bienvenidos a WheelsHub!</h1>
              <div className="Code-Text">
                  <span className="fast">Donde compras los mejores carros, </span>
                  <span className="slow">al mejor precio.</span>
              </div>
              <div className="Car-Carousel"> 
                  <CarCarousel />
              </div>
              <h1>Carros en venta</h1>
              <div className="Cars-Container">
                {Cars.filter(car => car.available === true).map(car => <CarContainer key={car._id} car={car} />)}
              </div>
          </div>
      </main>
    )
}

export default AppMain;