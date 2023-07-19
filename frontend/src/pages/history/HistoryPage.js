import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HistoryComponent from './HistoryComponent';
import YearComponent from './YearComponent';
import { ReactComponent as MSHFWhiteLogo } from './sports_hall_logo_white.svg';
// import { config } from '../components/constants';
import { config } from './constants';
const URL = config.url

const HistoryPage = () => {

  const [award, setAward] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL}/api/awards/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setAward(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id])

  const [componentToShow, setComponentToShow] = useState('');

  const onClose = () => setComponentToShow('');

  const ComponentToShow = componentToShow === 'history'
    ? () => <HistoryComponent award={award} onClose={onClose} />
    : componentToShow === 'year'
      ? () => <YearComponent award={award} onClose={onClose} />
      : null;

  const handleNavigation = () => {
    if (componentToShow) {
      setComponentToShow('');  // If a component is open, close it
    } else {
      navigate('/awards');  // If no component is open, navigate to '/awards'
    }
  }

  const getDisplayText = () => {
    if (componentToShow === 'history') return 'history';
    if (componentToShow === 'year') return 'finalists/winners';
    return '';
  };
  // console.log(award?.data.attributes.years.data)
console.log(award);

  return (
    <>
      <div className=' historyBackground'>
      <img src={award?.data.attributes.trophyImageLink} alt="" className="" />
  </div>
        <div className="container-fluid historyStuff" >

          <MSHFWhiteLogo className="img-fluid position-absolute top-0 end-0 whiteLogo" />
          <div className="row ">
            {award && award.data ?
              <>

                // <div className="card-body text-white historyBanner" >
                // <h1 className="card-title text-uppercase bannerFullName athleticFont">{award.data.attributes.name}</h1>
                //   <p className="text-uppercase bannerFirstName">Trophy</p>
                // </div>
        <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="card text-white yearWinnerBanner">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h1 className="yearBannerText athleticFont">{winner.award?.data?.attributes?.name}</h1>
              </div>
              <img src={winner.award?.data?.attributes?.sponsorLogoLink} alt="sponsor-logo" className="my-4 img-fluid sponsorLogo" style={{maxWidth: 'fit-content'}} />
            </div>
          </div>
        </div>
      </div>
                <div className={`iconContainer ${componentToShow ? 'stretchedIconContainer' : ''}`} >
                <p className="flex-start text-white text-uppercase historySport athleticFont">
  {award.data.attributes.sport.replace(/\s*\((M|W)\)/g, '')}
</p>

                  <p className='flex-start text-white text-uppercase historySubSport'>{getDisplayText()}</p>
                  <img src={award.data.attributes.iconLink} alt="trophyIcon" className="historyIcon img-fluid" />
                </div>

                <div className={`athleticFont buttonContainer ${componentToShow ? 'stretchedContainer' : ''}`}>
                  <button
                    className={`btn btnStyle mb-2 btnStyleHistory ${componentToShow ? 'stretched' : ''}`}
                    onClick={() => setComponentToShow('history')}>
                    History
                  </button>
                  <button
                    className={`btn mb-2 btnStyle btnStyleHistory ${componentToShow ? 'stretched' : ''}`}
                    onClick={() => setComponentToShow('year')}>
                    Year
                  </button>
                  <button
                    className={`btn btnStyle mb-2 btnStyleHistory1 ${componentToShow ? 'stretched' : ''}`}
                    onClick={handleNavigation}>
                    {componentToShow ? 'Back' : 'Menu'}
                  </button>
                </div>




                <div>
                  {ComponentToShow && <ComponentToShow />}
                </div>


              </>
              :
              <p>Loading...</p>
            }
          </div>
        </div>
    </>
  );
};

export default HistoryPage;
