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
  console.log(highlights);
  return (
    <div className="card highlight-component mb-3 text-white" style={{ backgroundColor: '#dca101', borderRadius: '25px 0 0 25px', color: 'white', fontSize: '20px' }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body position-relative">
            <button className="btn btn-light position-absolute top-0 end-0 componentButton" onClick={onClose}>X</button>
            <h5 className="statsTitle text-center athleticFont">-HIGHLIGHTS-</h5>
            <div className="row historyScroll" style={{ overflowY: 'auto', maxHeight: '500px' }}>
              {highlights.map((highlight, index) => (
                <div className="col-md-4 highlight-item mb-3" key={index} onClick={() => handleVideoClick(highlight.videoLink)}>
                  <div className="d-flex justify-content-center align-items-center my-2">
                    {/* <img className='img-fluid' src={highlight.videoLink} alt="video" /> */}
                    <div className="col">
                    <div className="row">
                        <video className='img-fluid video-thumb' src={highlight.videoLink} alt="video" />
                    </div>
                    <div className="row">
                        <p className="highlight-title text-capitalize">{highlight.name}</p>
                    </div>
                    </div>
                  </div>
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
