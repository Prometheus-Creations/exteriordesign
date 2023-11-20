import React, {useEffect, useState} from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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

