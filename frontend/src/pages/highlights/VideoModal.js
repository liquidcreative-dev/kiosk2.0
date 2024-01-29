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
    <div className="video-modal" style={{  zIndex: 1000 }}>
      {/* <div className="video-modal-content" style={{ height: '100%', position: 'relative' }}>
        <div 
          dangerouslySetInnerHTML={{ __html: embedCode }}
          style={{ height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        /> */}
        {/* <button className="btn btn-light position-absolute" onClick={onClose}>X</button> */}
        <iframe width="560" height="315" src={embedCode} title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <button className="btn btn-light position-absolute top-0 end-0 componentButton" style={{ top: '10px', right: '10px', zIndex: 1001 }} onClick={onClose}>X</button>
      {/* </div> */}
    </div>
  );
};

export default VideoModal;

