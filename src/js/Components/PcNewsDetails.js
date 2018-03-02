import React from 'react'
import {Row, Col, BackTop} from 'antd'
import PcHeader from './PcHeader'
import PcFooter from './PcFooter'
import PcNewsImageBlock from './PcNewsImageBlock'
import CommonComments from './CommonComments'
export default class PcNewsDetails extends React.Component {
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
      <div>
        <PcHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            
            <CommonComments uniquekey={this.props.match.params.uniquekey}/>
          </Col>
          <Col span={6}>
            <PcNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PcFooter/>
        <BackTop/>
      </div>
    )
  }
}