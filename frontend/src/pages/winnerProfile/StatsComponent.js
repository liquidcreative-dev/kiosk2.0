import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const StatsComponent = ({ trophyWinner, onClose }) => {
 
  return (
    <div className="card mb-3 statsComponent">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="card-body position-relative redStats text-white">
            <img src={trophyWinner.award?.data?.attributes?.jerseyIconLink} alt="football-icon" className="img-fluid jerseyStyle" />
            {/* <h2 className="jerseyNum text-center mt-5 athleticFont">{trophyWinner.jerseyNum}</h2> */}
            <h2 className={`jerseyNum text-center mt-5 athleticFont ${trophyWinner.sport === 'baseball' ? 'jerseyNumWhite' : ''}`}>{trophyWinner.jerseyNum}</h2>

            <p className= "athleticFont athleteName">{trophyWinner.firstName} {trophyWinner.lastName}</p>

            <div className="" style={{overflow: 'auto', maxHeight: '200px'}}>

            {trophyWinner.class && trophyWinner.class !== "null" && <p className="playerStatTitles quote mt-1">Class: <span className="statStyle mt-1">{trophyWinner.class}</span></p>}

            {trophyWinner.heightInFeet && trophyWinner.heightInFeet !== "null" && trophyWinner.heightInInches && trophyWinner.heightInInches !== "null" && trophyWinner.heightInInches && <p className="playerStatTitles quote">Height: <span className="statStyle ">{trophyWinner.heightInFeet}'</span><span className="statStyle ">{trophyWinner.heightInInches}"</span></p>}

            {trophyWinner.weight && trophyWinner.weight !== "null" && <p className="playerStatTitles quote">Weight: <span className="statStyle ">{trophyWinner.weight}</span></p>}

            {trophyWinner.hometown && trophyWinner.hometown !== "null" && <p className="playerStatTitles quote">Hometown: <span className="statStyle ">{trophyWinner.hometown}</span></p>}

            {trophyWinner.prevSchool && trophyWinner.prevSchool !== "null" && <p className="playerStatTitles quote">Previous School: <span className="statStyle ">{trophyWinner.prevSchool}</span></p>}
            {trophyWinner.position && trophyWinner.position !== "null" && <p className="playerStatTitles quote">Position: <span className="statStyle ">{trophyWinner.position}</span></p>}
            {trophyWinner.highschool && trophyWinner.highschool !== "null" && <p className="playerStatTitles quote">Highschool: <span className="statStyle ">{trophyWinner.highschool}</span></p>}
            {trophyWinner.major && trophyWinner.major !== "null" && <p className="playerStatTitles quote">Major: <span className="statStyle ">{trophyWinner.major}</span></p>}
            </div>
          </div>
        </div>
        <div className="col-md-8 goldStats">
          <div className="card-body  position-relative ">
            <h5 className="card-title athleticFont statsTitle">-STATS-</h5>
          <div className="historyScroll " style={{ overflowY: 'auto', maxHeight: '400px' }}>

            <button className="btn btn-light position-absolute top-0 end-0 statComponentButton" onClick={onClose}>X</button>
            {/* <ReactMarkdown className="card-text statsText" style={{overflow: 'auto', maxHeight: '400px'}}>
              {trophyWinner.stats}
            </ReactMarkdown> */}
            {trophyWinner.stats && trophyWinner.stats !== "null" && <ReactMarkdown className="card-text">{trophyWinner.stats}
            </ReactMarkdown>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
