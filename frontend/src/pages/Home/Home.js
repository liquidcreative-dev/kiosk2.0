import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartImg from './kioskOpenPic.png'
import { ReactComponent as MSHFColorLogo } from './sports_hall_logo_color.svg';

const Home = () => {
    const navigate = useNavigate();

    return (
    <>
        <div className="container-fluid position-relative" style={{height: '100vh'}}>
            <div className="row h-100 position-absolute w-100 homeBackground">
                <div className="col-md-12 p-0">
                    <img src={StartImg} className="img-fluid h-100 w-100" alt="Girl Athlete" />
                </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
                <div className="text-white">
                    
                    <button className="btn btnStyle btnHome athleticFont" onClick={() => navigate("/awards")}>Let's Go</button>
                </div>
            </div>
        </div>
    </>
    );
};

export default Home;
