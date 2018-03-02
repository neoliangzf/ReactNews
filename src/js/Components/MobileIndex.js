import React from 'react';
import MobileHeader from './MobileHeader';
import '../../style/mobile.css'
import MobileFooter from './MobileFooter'
import {Tabs, Carousel} from 'antd'
import MobileList from './MobileList'
import carousel_1 from '../../images/carousel1.jpg'
import carousel_2 from '../../images/carousel2.jpg'
import carousel_3 from '../../images/carousel3.jpg'
import carousel_4 from '../../images/carousel4.jpg'
const TabPane = Tabs.TabPane
class MobileIndex extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return (
      <div>
        <MobileHeader/>
        <div className="carousel">
          <Carousel {...settings}>
            <div><img src={carousel_1}/></div>
            <div><img src={carousel_2}/></div>
            <div><img src={carousel_3}/></div>
            <div><img src={carousel_4}/></div>
          </Carousel>
        </div>
        <Tabs>
          <TabPane tab="头条" key="1"><MobileList count={20} type="top"/></TabPane>
          <TabPane tab="社会" key="2"><MobileList count={20} type="shehui"/></TabPane>
          <TabPane tab="科技" key="3"><MobileList count={20} type="keji"/></TabPane>
          <TabPane tab="娱乐" key="4"><MobileList count={20} type="yule"/></TabPane>
          <TabPane tab="体育" key="5"><MobileList count={20} type="tiyu"/></TabPane>
          <TabPane tab="财经" key="6"><MobileList count={20} type="caijing"/></TabPane>
        </Tabs>
        <MobileFooter/>
      </div>
    );
  }
}

export default MobileIndex;
