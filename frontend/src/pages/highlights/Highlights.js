// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { config } from '../components/constants';
// import { config } from './constants';
// const URL = config.url

// const Highlights = () => {
//   const { athleteId } = useParams();
//   const [athlete, setAthlete] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${URL}/api/athletes/${athleteId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAthlete(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, [athleteId]);

//   return (
//     <div className="card-deck bg-dark text-white">
//       <h1>Highlights Page</h1>
//       <button className="btn btn-danger btnStyle w-100 mb-2" onClick={() => navigate('/awards')}>Menu</button>
//       {athlete?.images?.map((image, index) => (
//         <div key={index} className="card">
//           <img src={image.data.attributes.url} className="card-img-top" alt="Athlete" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Highlights;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { config } from './constants';
import VideoModal from './VideoModal';

const URL = config.url;

const Highlights = () => {
  const { athleteId } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/api/athletes/${athleteId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setAthlete(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [athleteId]);

  const handleVideoClick = (videoLink) => {
    setCurrentVideo(videoLink);
  };
  console.log(athlete)
  return (
    <div className="card-deck bg-dark text-white">
      <h1>Highlights Page</h1>
      
      {athlete?.highlights?.map((highlight, index) => (
        <div key={index} className="card" onClick={() => handleVideoClick(highlight.videoLink)}>
          <h5>{highlight.name}</h5>
        </div>
      ))}
      {/* <button className="btn mb-2 btnStyle yellowBtnProfile" onClick={() => { navigate(`/awards/${awardId}/years/${yearId}`) }}>Back</button> */}
      <button className="btn btn-danger btnStyle h-25 w-50 mb-5" onClick={() => navigate('/awards')}>Menu</button>
      {currentVideo && <VideoModal videoLink={currentVideo} onClose={() => setCurrentVideo(null)} />}
    </div>
  );
};

export default Highlights;