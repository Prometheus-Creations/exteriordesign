import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css-styling/Finance.css"

function Finance({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }){
    const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];
    return(
        <div>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <h1 className="finance-heading">Apply For Financing</h1>
            <form className="form">
                <h3 className="section-title">Applicant Information</h3>
                    <div className="name">
                        <input placeholder="First Name" />
                        <input placeholder="Middle Initial" />
                        <input placeholder="Last Name" />
                        <input placeholder="Suffix" />
                    </div>
                    <div className="contact">
                        <input placeholder="Contact Number" />
                        <input placeholder="Email Address" />
                    </div>
                    <div className="personal-info">
                        <input placeholder="Social-Security-Number" />
                        <input placeholder="Drivers License" />
                        <label className="select-container">
                            <select placeholder="State">
                                {states.map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <input placeholder="Birth Date(mm//dd/yyyy)" />
                    </div>
                <hr  />
                <h3 className="section-title">Residency</h3>
                <div className="address">
                    <input placeholder="Address" />
                    <input placeholder="Apt,etc" />
                    <input placeholder="City" />
                </div>
                <div className= "address-2">
                    <input placeholder="State" />
                    <input placeholder="Zipcode" />
                    <input placeholder="Monthly Payment ($)" />
                    <input placeholder="Years at Residence" />
                </div>
                <hr  />
                <h3 className="section-title">Employment</h3>
                    <div className="employer">
                        <input placeholder="Company Name" />
                        <input placeholder="Emplyers Number" />
                    </div>
                    <div className="employer-2">
                        <input placeholder="Job Title" />
                        <input placeholder="Months At Company" />
                        <input placeholder="Gross Monthly Salary ($)" />
                    </div>
                <hr  />
                <h3 className="section-title">Vehicle Of Intrest</h3>
                    <div className="vehicle">
                        <input placeholder="Year" />
                        <input placeholder="Make" />
                        <input placeholder="Model" />
                        <input placeholder="Vin" />
                    </div>
                     <div className="down">
                        <input placeholder="$ Down Payment" />
                    </div>
                    <button className="button" type="submit">Submit</button>
            </form>
            <Footer />
        </div>

    )

}

export default Finance