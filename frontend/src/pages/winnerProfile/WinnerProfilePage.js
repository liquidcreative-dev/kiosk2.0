// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
// import StatsComponent from './StatsComponent';
// import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';
// // import { config } from '../components/constants';
// import { config } from './constants';
// const URL = config.url

// const WinnerProfilePage = () => {
//   const location = useLocation();
//   const { awardId, yearId } = location.state;
//   const [winner, setWinner] = useState({});
//   const navigate = useNavigate();
//   const { athleteId } = useParams();

//   useEffect(() => {
//     fetch(`${URL}/api/athletes/${athleteId}?populate=*`)
//       .then((res) => res.json())
//       .then((data) => {
//         setWinner(data.data.attributes);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, [athleteId]);

//   const [showStats, setShowStats] = useState(true);


//   console.log(winner)

//   return (
//     <div className="container-fluid bg-dark yearWinnerImage" style={{ backgroundImage: `url(${winner?.imageLink})`, backgroundSize: 'cover' }}>
//       <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
//       <div className="row justify-content-between">
//         <div className="col-md-4">
//           <div className="card text-white yearWinnerBanner">
//             <div className="card-body d-flex justify-content-between align-items-center">
//               <div>
//                 <h1 className="yearBannerText athleticFont pt-3">{winner.award?.data?.attributes?.name}</h1>
//                 <div>
//                   <p className="card-text d-inline yearBannerYear">WINNER {winner.years?.data[0]?.attributes?.awardYear}</p>
//                   <img className='text-uppercase bannerIcon d-inline' src={winner.award?.data?.attributes?.iconLink} alt="icon" />
//                 </div>
//               </div>
//               <img src={winner.award?.data?.attributes?.sponsorLogoLink} alt="sponsor-logo" className="my-4 img-fluid sponsorLogo" style={{ maxWidth: 'fit-content' }} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-md-4 text-white text-uppercase text-center">
//           <img src={winner.schoolLogoLink} alt="school-logo" className="my-4 img-fluid schoolLogo" />
//           <p className="yearWinnerText athleticFont text-center">{winner.firstName} {winner.lastName}</p>
//           <p className="yearWinnerSubText text-center">{winner.positionFullName}</p>
//         </div>
//         <div className="col-md-7">
//           {showStats && <StatsComponent trophyWinner={winner} onClose={() => setShowStats(false)} />}

//         </div>
//       </div>
//       <div className="row">

//       <div className="col-md-4 text-white text-uppercase profileContainer athleticFont ">
//         <button className="btn mb-2 btnStyle winnerButton1" onClick={() => setShowStats(false)}>Stats</button>
//         {/* <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => navigate('/awards')}>Menu</button> */}
//         <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => { navigate(`/awards/${awardId}/years/${yearId}`) }}>Back</button>

//         <Link to="/" className="btn mb-2 btnStyle yellowBtnProfile">start over</Link>
//       </div>
//       </div>

//     </div>
//   );

// };

// export default WinnerProfilePage;


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import StatsComponent from './StatsComponent';
import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';
import { config } from './constants';

const URL = config.url;

const WinnerProfilePage = () => {
  const location = useLocation();
  const { awardId, yearId } = location.state;
  const [winner, setWinner] = useState({});
  const navigate = useNavigate();
  const { athleteId } = useParams();

  const [showStats, setShowStats] = useState(true);
  const [showHighlights, setShowHighlights] = useState(false);

  useEffect(() => {
    fetch(`${URL}/api/athletes/${athleteId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setWinner(data.data.attributes);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [athleteId]);

  return (
    <div className="container-fluid bg-dark yearWinnerImage" style={{ backgroundImage: `url(${winner?.imageLink})`, backgroundSize: 'cover' }}>
      <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="card text-white yearWinnerBanner">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h1 className="yearBannerText athleticFont pt-3">{winner.award?.data?.attributes?.name}</h1>
                <div>
                  <p className="card-text d-inline yearBannerYear">WINNER {winner.years?.data[0]?.attributes?.awardYear}</p>
                  <img className='text-uppercase bannerIcon d-inline' src={winner.award?.data?.attributes?.iconLink} alt="icon" />
                </div>
              </div>
              <img src={winner.award?.data?.attributes?.sponsorLogoLink} alt="sponsor-logo" className="my-4 img-fluid sponsorLogo" style={{ maxWidth: 'fit-content' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-white text-uppercase text-center">
          <img src={winner.schoolLogoLink} alt="school-logo" className="my-4 img-fluid schoolLogo" />
          <p className="yearWinnerText athleticFont text-center">{winner.firstName} {winner.lastName}</p>
          <p className="yearWinnerSubText text-center">{winner.positionFullName}</p>
        </div>
        <div className="col-md-7">
          {showStats && <StatsComponent trophyWinner={winner} onClose={() => setShowStats(false)} />}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-white text-uppercase profileContainer athleticFont ">
          <button className="btn mb-2 btnStyle winnerButton1" onClick={() => setShowStats(!showStats)}>Stats</button>
          <button className="btn mb-2 btnStyle winnerButton1" onClick={() => setShowHighlights(true)}>Highlights</button>
          <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => { navigate(`/awards/${awardId}/years/${yearId}`) }}>Back</button>
          <Link to="/" className="btn mb-2 btnStyle yellowBtnProfile">Start Over</Link>
        </div>
      </div>
      {showHighlights && 
        <HighlightsModal 
          onClose={() => setShowHighlights(false)} 
          ceremonyVideo={winner.ceremonyVideo} 
          highlightsVideo={winner.highlightsVideo} 
        />
      }
    </div>
  );
};
export default WinnerProfilePage;

const HighlightsModal = ({ onClose, ceremonyVideo, highlightsVideo }) => (
  <div className="modalBackdrop">
    <div className="modalContent">
      <h2>Highlights</h2>
      {ceremonyVideo && <div><h3>Ceremony Video</h3><video src={ceremonyVideo} controls /></div>}
      {highlightsVideo && <div><h3>Highlights Video</h3><video src={highlightsVideo} controls /></div>}
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);