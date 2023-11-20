import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../css-styling/GetInTouch.css'
import screenshot from '../Screenshot 2023-11-11 at 2.57.29 PM.png';

function GetInTouch({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }){
    const scheduleData = [
        { day: "Monday", sales: "10:00 A.M. - 7:00 P.M.", service: "10:00 A.M. - 7:00 P.M." },
        { day: "Tuesday", sales: "10:00 A.M. - 7:00 P.M.", service: "10:00 A.M. - 7:00 P.M." },
        { day: "Wednesday", sales: "10:00 A.M. - 7:00 P.M.", service: "10:00 A.M. - 7:00 P.M." },
        { day: "Thursday", sales: "10:00 A.M. - 7:00 P.M.", service: "10:00 A.M. - 7:00 P.M." },
        { day: "Friday", sales: "10:00 A.M. - 7:00 P.M.", service: "10:00 A.M. - 7:00 P.M." },
        { day: "Saturday", sales: "10:00 A.M. - 7:00 P.M.", service: "Closed" },
        { day: "Sunday", sales: "10:00 A.M. - 7:00 P.M.", service: "Closed" },
    ];
    return (
        <div>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <div className="body">
                <h1 className="heading">Get In Touch</h1>
                <div className="flex-container">
                    <form className="contact-box">
                        <input className="custom-input" placeholder="Name" />
                        <input className="custom-input" placeholder="Email" />
                        <input className="custom-input" placeholder="Phone" />
                        <input className="custom-input" placeholder="Subject" />
                        <textarea className="custom-input" placeholder="Message" />
                        <button className="button" type="submit">Send</button>
                    </form>
                    <div className="maps-hours-side">
                        <div className="hours-box">
                            <h3 className="caption">Buisness Hours</h3>
                            <table className="schedule-table">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Sales</th>
                                        <th>Service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scheduleData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.day}</td>
                                            <td>{row.sales}</td>
                                            <td>{row.service}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="maps-box">
                            <a href="https://www.google.com/maps?q=3917+W+1187th+st+Torrance,+ca+90504" target="_blank" rel="noopener noreferrer">
                                <img className="map-image" src={screenshot} alt="Screenshot" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GetInTouch;