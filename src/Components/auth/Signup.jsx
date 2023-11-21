/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React, {useState} from "react";
import {Form, Button, Card, Container} from "react-bootstrap"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import { auth } from "../../firebase";


function SignUp ({isLogged, setIsLoggedIn}) {
	const [email, setEmail ] = useState('')
	const [password, setPassword] = useState('')


	const signUp = (e) =>{
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential)
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
										<h2 className="text-center mb-4">Register</h2>
										<Form onSubmit={signUp}>
											<input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
											<input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
											<Button className="w-100" type="submit">
												Register
											</Button>
										</Form>
									</Card.Body>
									<div className="w -100 text-center mt-2">
										<Link to="/signin" >Already have an account? Log In</Link>
									</div>
								</div>
							</Container>
					<Footer />
				</div>
			) }
		</>

	)
}

export default SignUp