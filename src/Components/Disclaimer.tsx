import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css-styling/Disclaimer.css"

function Disclaimer({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<div>
			<Header isLogged={isLogged} setIsLogged={setIsLogged} />
			<div>
				<h1 className="disclaimer-heading">Disclaimer Notice</h1>
				<p className="paragraph">
					All advertised prices exclude government fees and taxes, any finance charges, any dealer document preparation charge, and any emission testing charge. The price for listed vehicles as equipped does not include charges such as: License, Title, Registration Fees, State or Local Taxes, Smog Fees, or any upgrades installed by dealer such as but not limited to (luxury Tint,upgraded wheels package, Upgraded sound systems, etc..) .  While we try to make sure that all prices posted here are accurate at all times, we cannot be responsible for typographical and other errors that may appear on the site. If the posted price for a vehicle or service is incorrect due to typographical or other error (e.g., data transmission), this dealership and their representatives are only responsible for the correct price, which we will endeavor to provide to you as soon as we become aware of the error. We make every effort to provide you the most accurate, up-to-the-minute information;however it is your responsibility to verify with the Dealer that all details listed are accurate. Vehicle images and descriptions posted on our website pages are the representations provided by our suppliers. Please note that actual vehicle may differ slightly from specifications and/or the pictures. The dealership makes no representations, expressed or implied, to any actual or prospective purchaser or owner of this vehicle as to the existence, ownership,accuracy, description or condition of the listed vehicle's equipment,accessories, price or any warranties. Any and all differences must be addressed prior to the sale of this vehicle. The dealership is not responsible for typographical, pricing, product information, advertising or shipping errors.Advertised prices and available quantities are subject to change without notice. In the event a vehicle is listed at an incorrect price due to typographical, photographic, or technical error or error in pricing information received from our suppliers, the dealership shall have the right to refuse or cancel any orders placed for vehicle listed at the incorrect price.				
				</p>
			</div>
			<Footer />
		</div>
	)
}

export default Disclaimer;