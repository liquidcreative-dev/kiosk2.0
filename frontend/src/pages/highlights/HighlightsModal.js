// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { config } from '../components/constants';
// import { config } from './constants';
// const URL = config.url

// const HighlightsModal = () => {
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

// export default HighlightsModal;

import React from 'react';


const HighlightsModal = ({ onClose, ceremonyVideo, highlightsVideo }) => (
  <div className="modalBackdrop">
    <div className="card mb-3 statsComponent">
      <div className="row g-0">
        <div className="col-md-12 goldStats">
          <div className="card-body position-relative">
            <h5 className="card-title athleticFont statsTitle">Highlights</h5>
            <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
              {ceremonyVideo && (
                <div>
                  <h3 className="athleticFont">Ceremony Video</h3>
                  <video src={ceremonyVideo} controls style={{ width: '100%' }} />
                </div>
              )}
              {highlightsVideo && (
                <div>
                  <h3 className="athleticFont">Highlights Video</h3>
                  <video src={highlightsVideo} controls style={{ width: '100%' }} />
                </div>
              )}
              <button className="btn btn-light position-absolute top-0 end-0 statComponentButton" onClick={onClose}>X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HighlightsModal;

