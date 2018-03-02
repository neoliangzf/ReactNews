import React from 'react'
import {Row, Col} from 'antd'
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Modal,
  Card,
  List
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: ''
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({comments: json});
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formdata = this
      .props
      .form
      .getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      })
  }

  render() {
    let {getFieldDecorator} = this.props.form;
    const {comments} = this.state
    console.log(comments)
    const commentList = comments.length
      ? comments.map((comment, index) => (
        <Card
          key={index}
          title={comment.UserName}
          extra={<a href = "#" > 发布于 {comment.datetime} </a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      : '没有加载到评论'
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            <div style={{height: '300px', overflowY:'scroll'}}>
              {commentList}
            </div>
            <Form onSubmit={this
              .handleSubmit
              .bind(this)}>
              <FormItem label="添加评论">
                {getFieldDecorator('remark')(<input type="textarea" placeholder="评论一下吧" style={{width: "100%"}}/>)}
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommonComments = Form.create({})(CommonComments)