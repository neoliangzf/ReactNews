import React from 'react'
import {Row, Col} from 'antd'
import PcNewsBlock from './PcNewsBlock'
import PcNewsImageBlock from './PcNewsImageBlock'
import {Tabs, Carousel} from 'antd'
import carousel_1 from '../../images/carousel1.jpg'
import carousel_2 from '../../images/carousel2.jpg'
import carousel_3 from '../../images/carousel3.jpg'
import carousel_4 from '../../images/carousel4.jpg'
const TabPane = Tabs.TabPane

export default class PcNewsContainer extends React.Component {
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
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src={carousel_1}/></div>
                  <div><img src={carousel_2}/></div>
                  <div><img src={carousel_3}/></div>
                  <div><img src={carousel_4}/></div>
                </Carousel>
              </div>
              <PcNewsImageBlock
                count={6}
                type="guoji"
                width="400px"
                cardTitle="国际头条"
                imageWidth="112px"/>
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="国内新闻" key="1">
                <PcNewsBlock count={21} type="guonei" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国际新闻" key="2">
                <PcNewsBlock count={21} type="guoji" width="100%" bordered="false"/>
              </TabPane>
            </Tabs>
            <div style={{marginTop: '20px'}}>
              <PcNewsImageBlock
                count={8}
                type="caijing"
                width="100%"
                cardTitle="财经新闻"
                imageWidth="132px"/>
              <PcNewsImageBlock
                count={16}
                type="keji"
                width="100%"
                cardTitle="科技新闻"
                imageWidth="132px"/>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}