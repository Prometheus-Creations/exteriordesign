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
            console.log('Client: Fetching data from server');
            const response = await axios.get('https://akbarsauto.com/inventory', {
                withCredentials: true
            });
            if(response.status === 200){
            console.log('Client: Successfully received data from server');
                setCars(response.data);
            }
        } catch (error) {
            console.error("Error Fetching Data:", error);
        }
    };

      useEffect(() => {
        fetchCars()
    }, [])


    const deleteCar = async (id) => {
        try {
            const response = await axios.delete(`https://akbarsauto.com/delete/${id}`, {
                withCredentials: true, 
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(response.status === 200) {
                fetchCars(); 
            }

        } 
        catch (error) {
            console.error("Error Deleting Data:", error);
        }
    };

    const editCar = async (id) => {
        try {
            const response = await axios.get(`https://akbarsauto.com/inventory/${id}`, {
                withCredentials: true, 
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(response.status === 200) {
                const carData = response.data;
                navigate(`/edit/${id}`, { state: { carData} });
            }
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
                    {cars.length === 0 ? (
                        <Link to="/post" className="post-button">No Cars In Inventory! <br /> Want to post a car?</Link>
                    ) : (
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
                    {cars.length === 0 ? (
                        <Link to="/post" className="post-button">No Cars In Inventory! <br /> Want to post a car?</Link>
                    ) : (
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