import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../css-styling/Vehicle.css"
import { Link } from 'react-router-dom';

function Vehicle({ isLogged, setIsLogged }){
    
    const navigate = useNavigate();

    const [cars, setCars] = useState([])
    const sortBy = [
         "Year: Old to New", "Year: New to Old", "Make: A - Z", "Color: A - Z", "Price: Low to High", "Price: High to Low", "Mileage: Low to High", "Mileage: High to Low",
    ]

    useEffect(() => {
        fetchCars()
    }, [])

    const fetchCars = async () => {
        try {
            const response = await axios.get('/inventory');
            setCars(response.data);
        }
        catch(error) {
            console.error("Error Fetching Data:", error);
        }
    }

    const deleteCar = async (id) => {
        try {
            const deletedCar = await axios.delete(`/delete/${id}`);
            console.log("Deleted Car:", deletedCar);
            fetchCars();
        } catch (error) {
            console.error("Error Deleting Data:", error);
        }
    }

    const editCar = async (id) => {
        try {
            const response = await axios.get(`/inventory/${id}`);
            const carData = response.data;
            navigate(`/edit/${id}`, { state: { carData} });
        } catch (error) {
            console.error("Error Fetching Car Data:", error);
        }
    }

    return (
        <div>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <h1 className="inventory-heading ">Vehicle Inventory</h1>
            <div className="section">
                <div className="filter-side">
                    <div>
                        <select className="sort">
                            <option value="" disabled selected>
                                Sort By
                            </option>
                            {sortBy.map((field, index) => (
                                <option key={index} value={field}>
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div>
                            <h4 className="side-input">Year</h4>    
                        </div>           
                        <div className="side-by-side">
                            <div>
                                <h5 className="subtitle">Min</h5>
                                <input placeholder="Oldest"></input>
                            </div>
                            <div>
                                <h5 className="subtitle">Max</h5>
                                <input placeholder="Newest"></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Make</h4>
                    </div>
                    <div>
                        <h4>Model</h4>
                    </div>
                        <div>
                            <div>
                                <h4 className="side-input">Mileage</h4>    
                            </div>           
                            <div className="side-by-side">
                                <div>
                                    <h5 className="subtitle">Min</h5>
                                    <input placeholder="Oldest"></input>
                                </div>
                            <div>
                                <h5 className="subtitle">Max</h5>
                                <input placeholder="Newest"></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Exterior Color</h4>
                    </div>
                    <div>
                        <h4>Interior Color</h4>
                    </div>
                    <div>
                        <h4>Fuel Type</h4>
                    </div>
                </div>
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

export default Vehicle;