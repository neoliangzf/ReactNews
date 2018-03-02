import React from 'react'
import {Row, Col, BackTop} from 'antd'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import CommonComments from './CommonComments'
export default class MobileNewsDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      newsItem: ''
    }
  }
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({newsItem: json});
        document.title = this.state.newsItem.title
      })
  }
  createMarkup() {
    return {__html: this.state.newsItem.pagecontent}
  }
  render() {
    return (
      <div id="MobileDetailsContainer">
        <MobileHeader/>
        <div className="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
              <CommonComments uniquekey={this.props.match.params.uniquekey}/>
            </Col>
          </Row>
          <MobileFooter/>
          <BackTop/>
        </div>
      </div>
    )
  }
}