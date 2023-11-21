/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

function AuthDetails({ isLogged, setIsLogged }) {
	const [authUser, setAuthUser] = useState(null);


	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if(user) {
				setIsLogged(true)
				setAuthUser(user)
			}
			else {
				setIsLogged(false);
				setAuthUser(null)
			}
		})

		return () => (
			unsubscribe()
		)
	},[setIsLogged])

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				setIsLogged(false)
				console.log('sign out succesful')
			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<div>
			{authUser ? <><p>{`Signed In ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button> </>: <p>Signed Out</p>}
		</div>
	)
}

export default AuthDetails;

