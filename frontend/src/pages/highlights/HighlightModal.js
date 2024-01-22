import React from 'react';
import VideoModal from './VideoModal';

const HighlightModal = ({ highlights, onClose }) => {
  const [currentVideo, setCurrentVideo] = React.useState(null);

  const handleVideoClick = (videoLink) => {
    setCurrentVideo(videoLink);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="card mb-3 statsComponent">
      <div className="row g-0">
        <div className="col-md-4 goldStats">
          <div className="card-body position-relative">
            <button className="btn btn-light position-absolute top-0 end-0" onClick={onClose}>X</button>
            <h5 className="card-title athleticFont statsTitle">-HIGHLIGHTS-</h5>
            <div className="historyScroll" style={{ overflowY: 'auto', maxHeight: '400px' }}>
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item mb-3" onClick={() => handleVideoClick(highlight.videoLink)}>
                  <h5 className="highlight-title">{highlight.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {currentVideo && <VideoModal videoLink={currentVideo} onClose={handleCloseVideo} />}
    </div>
  );
};

export default HighlightModal;
