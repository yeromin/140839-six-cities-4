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

          <Route exact path="/property/:id" >
            {(props) => <Property {...props} mockData={this.props.mockData}/>}
          </Route>

        </Switch>

      </BrowserRouter>
    );
  }
}

App.propTypes = {
  mockData: PropTypes.shape({
    offerCard: PropTypes.array.isRequired
  })
};

export default App;
