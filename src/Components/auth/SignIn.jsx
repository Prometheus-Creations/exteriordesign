/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from "react";
import {Form, Button, Card, Container} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../Header";
import Footer from "../Footer";
import { auth } from "../../firebase";
import "../../css-styling/Signin.css"


function SignIn ({ isLogged, setIsLogged }) {
	const [email, setEmail ] = useState('')
	const [password, setPassword] = useState('')


	const signIn = (e) =>{
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential)
			setIsLogged(true); 
		})
		.catch((error) =>{
			console.log(error)
		})
	}

	return (
		<>
		 	{isLogged ? (
				<div>
					<Header />
					<h1 className="login-heading" >You are logged in!</h1>
					<br />
						<Link to="/post" className="post-button">Want to post a car?</Link>
					<Footer />
				</div>
			) : (		
				<div>
			<Header />
					<Container className="d-flex align-items-center justify-content-center"  style={{ minHeight: "100vh" }}>
						<div className="w-100" style={{ maxWidth: '400px' }} >
							<Card.Body>
								<h2 className="text-center mb-4">Log In</h2>
								<Form onSubmit={signIn}>
									<input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
									<input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
									<Button className="w-100" type="submit">
										Log In
									</Button>
								</Form>
							</Card.Body>
							<div className="w -100 text-center mt-2">
								<Link to="/signup">Dont have an account? Register here!</Link>
							</div>
						</div>
					</Container>
			<Footer />

		</div>
		
		)}
		</>

	)
}

export default SignIn