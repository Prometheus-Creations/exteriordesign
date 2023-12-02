/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "../css-styling/Vehicle.css";

import axios from "axios";

function Vehicle({ isLogged, setIsLogged }){
    
    const navigate = useNavigate();

    const [cars, setCars] = useState([])

    const fetchCars = async () => {
        try {
            const response = await axios.get('https://akbarsengine.com/inventory');
            console.log('Data retrieved', response.data)
            setCars(response.data.data);
        } catch (error) {
            console.error("Error Fetching Data:", error);
        }
    };

      useEffect(() => {
        fetchCars()
    }, [])


    const deleteCar = async (id) => {
        try {
            await axios.delete(`https://akbarsengine.com/delete/${id}`);
            fetchCars(); 
        } 
        catch (error) {
            console.error("Error Deleting Data:", error);
        }
    };

    const editCar = async (id) => {
        try {
            const response = await axios.get(`https://akbarsengine.com/inventory/${id}`);
            const carData = response.data.data; 
            navigate(`/edit/${id}`, { state: { carData} });
            
        } 
        catch (error) {
            console.error("Error Fetching Car Data:", error);
        }
    }

    return (
        <>
			{!isLogged ? (
				<div>
                    <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <h1 className="inventory-heading ">Vehicle Inventory</h1>
            <div className="section">
                <div className="vehicles-side">
                    {Array.isArray(cars) && cars.length > 0 ? (
                        cars.map((car) => (
                            <div className="vehicles" >
                                <img className="image" src={car.Image} alt="vehicle_image" />
                                <div className="info">
                                    <h4>{car.Title}</h4>
                                    <h5>Mileage:</h5>
                                    <p className="paragraph">{car.Mileage} Miles</p>
                                    <h5>Engine:</h5>
                                    <p className="paragraph">{car.Engine}</p>
                                    <h5>Exterior Color:</h5>
                                    <p className="paragraph">{car.Exterior_color}</p>
                                    <h5>Interior Color:</h5>
                                    <p className="paragraph">{car.Interior_color}</p>
                                    <h5>Vin Number:</h5>
                                    <p className="paragraph">{car.Vin}</p>
                                    <h5>Description:</h5>
                                    <p className="paragraph">{car.Description}</p>
                                    <h5 className="price">Price: ${car.Price}</h5>
                                </div>
                            </div>
                        ))
                    ) : (
                        <Link to="/signin" className="post-button"> No Cars In Inventory! <br /> Want to post a car? <br /> Sign In Here!</Link>
                    )}
                </div>
            </div>
            <Footer />
        </div>
				) : (
        <div>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <h1 className="inventory-heading ">Vehicle Inventory</h1>
            <div className="section">
                <div className="vehicles-side">
                    {Array.isArray(cars) && cars.length > 0 ? (
                        cars.map((car) => (
                            <div className="vehicles" >
                                <img className="image" src={car.Image} alt="vehicle_image" />
                                <div className="info">
                                    <h4>{car.Title}</h4>
                                    <h5>Mileage:</h5>
                                    <p className="paragraph">{car.Mileage} Miles</p>
                                    <h5>Engine:</h5>
                                    <p className="paragraph">{car.Engine}</p>
                                    <h5>Exterior Color:</h5>
                                    <p className="paragraph">{car.Exterior_color}</p>
                                    <h5>Interior Color:</h5>
                                    <p className="paragraph">{car.Interior_color}</p>
                                    <h5>Vin Number:</h5>
                                    <p className="paragraph">{car.Vin}</p>
                                    <h5>Description:</h5>
                                    <p className="paragraph">{car.Description}</p>
                                    <h5 className="price">Price: ${car.Price}</h5>
                                    <button onClick={() => deleteCar(car._id)}>Delete</button>
                                    <button onClick={() => editCar(car._id)}>Edit</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <Link to="/post" className="post-button">No Cars In Inventory! <br /> Want to post a car?</Link>
                    )}
                </div>
            </div>
            <Footer />
        </div>
        )
			}
		</>
    )
}

export default Vehicle;