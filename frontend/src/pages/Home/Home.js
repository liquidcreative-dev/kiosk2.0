import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartImg from './kioskOpenPic.png'
import { ReactComponent as MSHFColorLogo } from './sports_hall_logo_color.svg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid" style={{height: '100vh'}}>
                    <img src={StartImg} className="img-fluid" alt="sports background" />
                </div>
            <div className="row justify-content-center align-items-center text-center">
                <div className="text-white">
                    // <MSHFColorLogo className="img-fluid colorLogo" />
                    // <div >
                    //     <span className="theWord">The</span>
                    //     <span className=" text-uppercase homeText athleticFont">Outstanding</span>
                    //     <h4 className="text-uppercase homeText athleticFont">Player Awards</h4>
                    // </div>
                    <button className="btn btnStyle btnHome athleticFont" onClick={() => navigate("/awards")}>Let's Go</button>
                </div>
            </div>
    );
};

export default Home;
