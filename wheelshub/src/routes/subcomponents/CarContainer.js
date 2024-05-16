import React from "react";
import { buyCar } from "../../api/index";

function CarContainer( {car} ) {

    const handleButtonClic = async () => {

        const userId = localStorage.getItem('userId');
        const userName = localStorage.getItem('userName');
        

        if (!userId || !userName) {
            alert("No puede comprar, inicie sesión primero");
            return;
        }
        
        const carId = car._id;
        const carName = `${car.brand} ${car.model}`;
        const price = car.price;
        const discount = car.discount;

        const status = await buyCar(userId, carId, userName, carName, price, discount);

        if (status >= 400) {
            console.log("Error al comprar el auto");
            return;
        }
        
        console.log('Compra de auto exitosa');
        window.location.reload();
    };

    return (
        <div className="CarTable">
            <div style={{display: "flex", justifyContent:"center"}}>
                <div className="CarPhoto">
                    <img className="CarPhoto" src={car.image} alt={car.model}/>
                </div>
            </div>
            <h2>{car.brand} {car.model} - {car.year}</h2>
            <div className="CarType">{car.type}</div>
            <p>{car.description}</p>
            <div className="BuyingInfo">
                <h2 style={{ color:"white", fontSize: "20px"}}>US${car.price}</h2>
                <button className="buy-button" onClick={handleButtonClic}>Comprar</button>
            </div>
        </div>
    );
}

export default CarContainer;
