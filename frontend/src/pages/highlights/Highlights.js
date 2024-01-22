// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { config } from './constants';
// import VideoModal from './VideoModal';
// import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';

// const URL = config.url;

// const Highlights = () => {
//   const { athleteId } = useParams();
//   const [athlete, setAthlete] = useState(null);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${URL}/api/athletes/${athleteId}?populate=*`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAthlete(data.data.attributes);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, [athleteId]);

//   const handleVideoClick = (videoLink) => {
//     setCurrentVideo(videoLink);
//   };
//   console.log(athlete);
//   return (
//     <div className="container-fluid bg-dark yearWinnerImage" style={{ backgroundImage: `url(${athlete?.imageLink})`, backgroundSize: 'cover' }}>
//     <div className="col">
//       <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
//       <div className="row justify-content-between">
//         <div className="col-md-4">
//           <div className="card text-white yearWinnerBanner">
//             <div className="card-body d-flex justify-content-between align-items-center">
//               <div>
//                 <h1 className="yearBannerText athleticFont pt-3">{athlete?.award?.data?.attributes?.name}</h1>
//                 <div>
//                   <p className="card-text d-inline yearBannerYear">WINNER {athlete?.years?.data[0]?.attributes?.awardYear}</p>
//                   <img className='text-uppercase bannerIcon d-inline' src={athlete?.award?.data?.attributes?.iconLink} alt="icon" />
//                 </div>
//               </div>
//               <img src={athlete?.award?.data?.attributes?.sponsorLogoLink} alt="sponsor-logo" className="my-4 img-fluid sponsorLogo" style={{ maxWidth: 'fit-content' }} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Highlights Content */}
//         <div className="row">
//           <div className="col-md-4 text-white text-uppercase text-center">
//             <img src={athlete?.schoolLogoLink} alt="school-logo" className="my-4 img-fluid schoolLogo" />
//             <p className="yearWinnerText athleticFont text-center">{athlete?.firstName} {athlete?.lastName}</p>
//             <p className="yearWinnerSubText text-center">{athlete?.positionFullName}</p>
//           </div>
//         </div>
//         <div className="rowcard-deck bg-dark text-white">
//         {athlete?.Highlights?.map((highlight, index) => (
//           <div key={index} className="card" onClick={() => handleVideoClick(highlight.videoLink)}>
//             <h5>{highlight.name}</h5>
//           </div>
//         ))}
//         </div>
//         <div className='row justify-content-left'>
//         {/* Back Button */}
//         <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => navigate(-1)}>Back</button>

//         {/* Menu Button */}
//         <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => navigate('/awards')}>Start Over</button>
//         </div>
//       </div>
//       {/* Video Modal */}
//       {currentVideo && <VideoModal videoLink={currentVideo} onClose={() => setCurrentVideo(null)} />}
//       </div>
//   );
// };

// export default Highlights;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import HighlightModal from './HighlightModal';
import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';
import { config } from './constants';

const URL = config.url;

const Highlights = () => {
  const navigate = useNavigate();
  const { athleteId } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [showHighlightModal, setShowHighlightModal] = useState(true);

  useEffect(() => {
    fetch(`${URL}/api/athletes/${athleteId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setAthlete(data.data.attributes);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [athleteId]);

  const toggleHighlightModal = () => {
    setShowHighlightModal(!showHighlightModal);
  };

  return (
    <div className="container-fluid bg-dark yearWinnerImage" style={{ backgroundImage: `url(${athlete?.imageLink})`, backgroundSize: 'cover' }}>
      <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="card text-white yearWinnerBanner">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h1 className="yearBannerText athleticFont pt-3">{athlete?.award?.data?.attributes?.name}</h1>
                <div>
                  <p className="card-text d-inline yearBannerYear">HIGHLIGHTS {athlete?.years?.data[0]?.attributes?.awardYear}</p>
                  <img className='text-uppercase bannerIcon d-inline' src={athlete?.award?.data?.attributes?.iconLink} alt="icon" />
                </div>
              </div>
              <img src={athlete?.award?.data?.attributes?.sponsorLogoLink} alt="sponsor-logo" className="my-4 img-fluid sponsorLogo" style={{ maxWidth: 'fit-content' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-white text-uppercase text-center">
          <img src={athlete?.schoolLogoLink} alt="school-logo" className="my-4 img-fluid schoolLogo" />
          <p className="yearWinnerText athleticFont text-center">{athlete?.firstName} {athlete?.lastName}</p>
          <p className="yearWinnerSubText text-center">{athlete?.positionFullName}</p>
        </div>
        
      </div>

      <div className="row">
        <div className="col-md-4 text-white text-uppercase profileContainer athleticFont ">
          {/* <button className="btn w-75 mb-2 btnStyle winnerButton" onClick={() => navigate(`/profile/${athlete.id}`, { state: { awardId, yearId } })}>Profile</button> */}
          <button className="btn mb-2 btnStyle winnerButton1" onClick={toggleHighlightModal}>Highlights</button>
          <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => navigate(-1)}>Back</button>
          <Link to="/awards" className="btn mb-2 btnStyle yellowBtnProfile">Start Over</Link>
        </div>
      </div>

      {showHighlightModal && (
        <HighlightModal highlights={athlete?.Highlights || []} onClose={toggleHighlightModal} />
      )}
    </div>
  );
};

export default Highlights;