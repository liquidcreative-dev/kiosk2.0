
import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as MSHFWhiteLogo } from '../../public/images/sports_hall_logo_white.svg';
import { config } from './constants';
const URL = config.url


const AwardsPage = () => {
  const [awards, setAwards] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/api/awards?populate=*`)
      .then((res) => res.json())
      .then((awards) => {
        setAwards(awards)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])
  console.log(awards);


  return (
    <div className="awardPage bg-dark">
      <div className="bg-dark awardBackground">
        <Link to={`https://lobster-app-6xzrh.ondigitalocean.app/strapi/admin`} className="text-decoration-none" >
          <MSHFWhiteLogo className="img-fluid whiteLogoAwards" />
        </Link>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 awards" >
          {awards.data && awards.data.length > 0 && awards.data.map((award) => (
            <div key={award.id} className="col" style={{ margin: "0", padding: "0" }}>
              <Link to={`/awards/${award.id}`} className="text-decoration-none" >
                <div className="bg-dark img-fluid awardBanner" style={{ backgroundImage: `url(${award?.attributes.selectImageLink})` }}>
                  <img src={award.attributes.iconLink} className="awardIcon" alt="award-icon"  style={{  backgroundSize: 'cover' }} />
                  <div className="trophyName text-uppercase text-white display-flex">
                    <p className="awardNameFull athleticFont">{award.attributes.name}</p>
                    <p className="firstNameText d-inline mb-5">Trophy</p>
                  </div>

                </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
      <div className="flex-container">
        <div className="row text-center text-uppercase text-white forMargin">
        <button className="btn my-2 btnStyle backBtn flex-start" onClick={() => navigate('/')}>Back</button>
          <p className="mt-3 awardPageText">touch a trophy to start</p>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;
