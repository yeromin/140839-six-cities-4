import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Property from '../property/property.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };

    this.handleOfferCardTitleClick = this.handleOfferCardTitleClick.bind(this);
  }

  handleOfferCardTitleClick(currCard) {
    this.setState({active: currCard});
    /* eslint-disable-next-line */ // disable console.log wanring
    console.log(`The handle-Offer-Card-Title-Click function fired!`);
  }

  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Main
              mockData={this.props.mockData}
              onClickOfferCardTitle={this.handleOfferCardTitleClick}
            />
          </Route>

          <Route exact path="/dev-property/:title">
            <Property
              currCard={this.state.active}
            />
          </Route>

        </Switch>

      </BrowserRouter>
    );
  }
}

// for some reason, ESLint shows error if I don't validate mockData below
App.propTypes = {
  mockData: PropTypes.shape({
    offerCard: PropTypes.array.isRequired
  })
};

export default App;
