import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../css-styling/About.css'

function About({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <h1 className="about-heading">About Us</h1>
            <img src="https://c1.wallpaperflare.com/preview/508/250/386/porsche-oldtimer-m%C3%BChlheim-mulhouse.jpg" alt="About Us" className="about-image" />
            <div className="about-paragraph">
                <p>
                    Since 1965, our staff has been dedicated to providing our customers with the commitment of excellence that they deserve. Striving to provide you with affordable pre-owned luxury and exotic vehicles we maintain our inventory with makes such as BMW, Mercedes-Benz, Land Rover, Porsche, Ferrari, Bentley, Maserati and more. We are passionate in our search for the highest quality pre-owned vehicles that we hand pick from only reputable resources. It is our mission to provide you with a superior purchase and ownership experience resulting in a happy customer who will tell their friends and family about us. Friendly customer service is our promise and we take pride in exceeding your expectations. Need help financing? We can handle that. Having solid relationships with many financial institutions we will find the best option available for you. If you're wondering about getting your new car to your door, we're experts at that as well. We've facilitated the transport of luxury and exotic vehicles all over the world, including most of Europe, the Middle East, Russia, Asia, and all over North America. We'll make sure your car arrives at your door in the same excellent condition as it left ours. We will exceed your expectations!Please come by and visit our dealership and friendly staff. See for yourself why we have such a high percentage of return and referral customers.We offer quality pre-owned vehicles that must first meet our qualification standards prior to being offered for sale. All vehicles go through a rigorous 128 point inspection process.  Once completed we will fully service and detail it. Only 50% of the vehicles we buy actually make it on our lot.We also offer warranty on every vehicle we sell. Our friendly sales staff is ready to handle any of you automotive needs. Call us today to see how we set ourselves apart from the rest!
                </p>
            </div>
            <h3 className="team-heading">Meet Our Team</h3>
            <div className= "team-images">
                <img src="	https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/deadmemer1/phpTnabRz.jpg" alt="Ceo" />
                <img src="	https://1.bp.blogspot.com/-865MLoxIlcw/W83LUX_HB0I/AAAAAAAA19g/e6Jymmw_N6oRwBhNVPuWXUonUMyRWBM6QCLcBGAs/s1600/b11fb745ff50dde97c33b3298c8e0b8d.jpg" alt="Manager" />
                <img src="	https://static.wikia.nocookie.net/familyguy/images/e/ee/FamilyGuy_Single_ChrisText_R7.jpg" alt="Sales Rep" />
                <img src="	https://static.miraheze.org/greatcharacterswiki/7/7e/C--Users-cleme-Downloads-R_%282%29.jpg" alt="Sales Rep" />
                <img src="	https://static.wikia.nocookie.net/fanontubbies/images/4/4b/25-258966_stewie-griffin-hd-png-download.png" alt="Sales Rep" />
                <img src="  https://static.wikia.nocookie.net/simpsons/images/1/12/Brian_Griffin.png" alt="Mechanic" />
            </div>
            <div className="team-members">
                <p> Peter Griffin <span className="team-titles">Owner C.E.O.</span></p>
                <p> Louis Griffin <span className="team-titles">Manager</span></p>
                <p> Chris Griffin <span className="team-titles">Sales</span></p>
                <p> Megan Griffin <span className="team-titles">Sales</span></p>
                <p> Stewie Griffin <span className="team-titles">Sales</span></p>
                <p> Brian Griffin <span className="team-titles">Mechanic</span></p>
            </div> 
            < Footer />
        </div>
   
    );
}

export default About; 
