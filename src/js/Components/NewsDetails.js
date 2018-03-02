import React, { Component } from 'react';
import PcIndex from './PcIndex';
import MobileIndex from './MobileIndex';
import MediaQuery from 'react-responsive';
import PcNewsDetails from './PcNewsDetails'
import MobileNewsDetails from './MobileNewsDetails'
import PcUserCenter from './PcUserCenter'
import MobileUserCenter from './MobileUserCenter'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class NewsDetails extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
        <Route path='/usercenter' component={PcUserCenter}/>
 
        <Route path='/details/:uniquekey' component={PcNewsDetails}/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
        <Route path='/usercenter' component={MobileUserCenter}/>
        <Route path='/details/:uniquekey' component={MobileNewsDetails}/>
        </MediaQuery>
      </div>
    );
  }
}

export default NewsDetails;
