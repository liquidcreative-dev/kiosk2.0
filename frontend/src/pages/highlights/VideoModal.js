import React from 'react';

// const VideoComponent = ({ videoUrl, onClose }) => {
//   return (
//     <div className="video-player">
//       <button className="close-button" onClick={onClose}>X</button>
//       <video controls autoPlay src={videoUrl}></video>
//     </div>
//   );
// };
const VideoModal = ({ videoLink, onClose }) => {
  if (!videoLink) return null;

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <video src={videoLink} controls autoPlay style={{ width: '100%' }}></video>
        <button className="btn btn-danger" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VideoModal;