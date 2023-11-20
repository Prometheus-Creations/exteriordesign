import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import '../css-styling/Post.css'
import axios from "axios";
import { Link } from "react-router-dom";


function Post({ isLogged, setIsLogged }) {
	const navigate = useNavigate();
	const [vehicleData, setVehicleData] = useState({
		Title: '',
		Mileage: 0,
		Engine: '',
		Exterior_color: '',
		Interior_color: '',
		Vin: '',
		Description: '',
		Price: 0,
		Image: '',
	})

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
			await axios.post('http://localhost:3000/post', vehicleData)
			setVehicleData({
				Title: '',
				Mileage: 0,
				Engine: '',
				Exterior_color: '',
				Interior_color: '',
				Vin: '',
				Description: '',
				Price: 0,
				Image: '',
			})
			 navigate('/inventory');
		}
		catch(error) {
			console.error('Error Adding Car:', error)
		}
	};

	return (
		<>
			{
				!isLogged ? (
					<div>
						<Header isLogged={isLogged} setIsLogged={setIsLogged} />
							<h1 className="post-heading">Post A Vehicle</h1>
							<div className="notlogged">
								<p>To post a car please log in</p>
								<Link to="/signin" className="login-button"> Sign In Here!</Link>
							</div>
						<Footer />
					</div>

				) : (
					<div>
						<Header isLogged={isLogged} setIsLogged={setIsLogged} />
							<h1 className="post-heading">Post A Vehicle</h1>
							<div>
								<form className="postform">
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
									<button onClick={handleSubmit} className="post-button">Post</button>
								</form>
							</div>
						<Footer />
					</div>
				)
			}
		</>
		
	)
}

export default Post;