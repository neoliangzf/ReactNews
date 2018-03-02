import React, {Component} from 'react';
import PcIndex from './PcIndex';
import MobileIndex from './MobileIndex';
import MediaQuery from 'react-responsive';
import PcNewsDetails from './PcNewsDetails'
import MobileNewsDetails from './MobileNewsDetails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MediaQuery query='(min-device-width: 1224px)'>
          <PcIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
