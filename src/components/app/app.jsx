import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {mockData} = props;

  const handleOfferCardTitleClick = (evt) => {
    evt.preventDefault();
    /* eslint-disable-next-line */ // disable console.log wanring
    console.log(`The REAL function fired!`, evt.target);
  };

  return (
    <React.Fragment>
      <Main
        mockData={mockData}
        onClickOfferCardTitle={handleOfferCardTitleClick}
      />
    </React.Fragment>
  );
};

// for some reason, ESLint shows error if I don't validate mockData below
App.propTypes = {
  mockData: PropTypes.shape({
    offerCard: PropTypes.array.isRequired
  })
};

export default App;
