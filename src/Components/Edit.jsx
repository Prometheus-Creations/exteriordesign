/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable prefer-destructuring */
import React, { useState }  from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import '../css-styling/Edit.css'
import axios from "axios";

function Edit({ isLogged, setIsLogged }) {
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();

	const carData = location.state.carData;
	
	const [vehicleData, setVehicleData] = useState({
		Title: carData ? carData.Title : '',
		Mileage: carData? carData.Mileage : 0,
		Engine: carData ? carData.Engine : '',
		Exterior_color: carData ? carData.Exterior_color : '',
		Interior_color: carData ? carData.Interior_color : '',
		Vin: carData ? carData.Vin : '',
		Description: carData ? carData.Description : '',
		Price: carData? carData.Price : '',
		Image: carData ? carData.Image : '',
	});



	 const handleChange = (e) => {
		const { name, value } = e.target;
		setVehicleData((prevData) => ({
			...prevData, 
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
    		const response = await axios.put(`http://54.177.239.211:3000/edit/${id}`, vehicleData, {
    			headers: {
      				'Content-Type': 'application/json',
    			},
  			});
			if(response.status === 200) {
				setVehicleData({});
				navigate('/inventory');
			}
			else {
				console.error('Update failed with status:', response.status);
			}
		} 
		catch (error) {
			console.error('Error Updating Car:', error);
			if (error.response) {
				console.error('Response Data:', error.response.data);
				console.error('Response Status:', error.response.status);
				console.error('Response Headers:', error.response.headers);
			} else if (error.request) {
				console.error('No Response Received');
			} else {
				console.error('Error Message:', error.message);
			}
		}
	};

	return (
				<div>
					<Header  isLogged={isLogged} setIsLogged={setIsLogged}/>
						<h1 className="edit-heading">Edit Vehicle</h1>
						<div>
							<form className="editform">
								<label  htmlFor="title" className="input-label" > Title: </label>
								<input id="title"  type="text" name="Title" className="vehicle-info" placeholder="Year Make Model"  onChange={handleChange} value={vehicleData.Title}/>
								<label htmlFor="miles" className="input-label" > Mileage: </label>
								<input id="miles" name="Mileage" className="vehicle-info" placeholder="0000" onChange={handleChange} value={vehicleData.Mileage}/>
								<label htmlFor="engine" className="input-label" > Engine: </label>
								<input id="engine" name="Engine" className="vehicle-info" placeholder="3.4L 6 Cylinders" onChange={handleChange} value={vehicleData.Engine} />
								<label htmlFor="exterior" className="input-label" > Exterior Color: </label>						
								<input id="exterior" name="Exterior_color" className="vehicle-info" placeholder="Exterior Color" onChange={handleChange} value={vehicleData.Exterior_color}/>
								<label htmlFor="interior" className="input-label" > Interior Color: </label>			
								<input id="interior" name="Interior_color" className="vehicle-info" placeholder="Interior Color" onChange={handleChange} value={vehicleData.Interior_color}/>
								<label htmlFor="vin" className="input-label" > Vin: </label>						
								<input id="vin" name="Vin" className="vehicle-info" placeholder="Vin Number" onChange={handleChange} value={vehicleData.Vin}/>						
								<label htmlFor="description" className="input-label"> Description: </label>			
								<textarea name="Description" id="description" className="vehicle-description" placeholder="Description" onChange={handleChange} value={vehicleData.Description}/>
								<label htmlFor="price" className="input-label" > $ Price: </label>						
								<input name="Price" id="price" className="vehicle-price" placeholder="$$$$$" onChange={handleChange} value={vehicleData.Price}/>
								<label htmlFor="image" className="input-label"> Upload Image: </label>
								<input name="Image" id="image" type="text"  onChange={handleChange} className="vehicle-info" value={vehicleData.Image} placeholder="Image Url/Path"/>
								<button onClick={handleSubmit} className="update-button" type="submit">Update</button>
							</form>
						</div>
					<Footer />
				</div>
			)
	
	
}

export default Edit;