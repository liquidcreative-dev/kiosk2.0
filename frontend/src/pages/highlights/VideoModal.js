// import React from 'react';

// const VideoModal = ({ videoLink, onClose }) => {
//   return (
//     <div className="video-modal">
//       <div className="video-modal-content">
//         <iframe
//           width="100%"
//           height="100%"
//           src={videoLink}
//           title="Video modal"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
//           allowfullscreen
//         ></iframe>
//         <button className="btn btn-light position-absolute top-0 end-0 componentButton" onClick={onClose}>X</button>
//       </div>
//     </div>
//   );
// };

// export default VideoModal;

import React from 'react';

const VideoModal = ({ embedCode, onClose }) => {
  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <div 
          dangerouslySetInnerHTML={{ __html: embedCode }}
          style={{ width: '100%', height: '100%' }}
        />
        <button className="btn btn-light position-absolute top-0 end-0 componentButton" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default VideoModal;
