import React from 'react'
import {Card} from 'antd'
import {Link, Route} from 'react-router-dom'
import PcNewsDetails from './PcNewsDetails'
export default class PcNewsBlock extends React.Component {
  constructor() {
    super()
    this.state = {
      news: ''
    }
  }

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({news: json}));
  }

  render() {
    const {news} = this.state
    const liStyle={
      listStyleType: 'none',
      paddingBottom: '5px'
    }
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <li key={index} style={liStyle}>
          <Link to={`/details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
          </Link>
        </li>
      ))
      : '没有加载到任何新闻'
    return (
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
        
      </div>
    )
  }
}