/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Container } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function Home({ isLogged, setIsLogged }: { isLogged: boolean; setIsLogged: React.Dispatch<React.SetStateAction<boolean>> }){
    return (
        <div style={{background: 'black'}}>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <h1 style={{color:'white', textAlign: 'center', fontFamily: 'papyrus', fontSize: '40px', paddingTop: '40px'}}>Akbars Auto</h1>
            <Container className="container" >
                <iframe title="Porsche" width="100%" height='500px' src="https://www.youtube.com/embed/da5x-__kvGY" allowFullScreen />
                <iframe title="Ferrari" width="100%" height='500px' src="https://www.youtube.com/embed/IEQkph1dmmo" allowFullScreen />
                <iframe title="R8" width="100%" height='500px' src="https://www.youtube.com/embed/u_wB9JiIGy4" allowFullScreen />
            </Container>
            <Footer />
        </div>
    )
}
export default Home;