import React from 'react';
import logo from '../../images/logo.png';

import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Modal
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PcHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    };
  }

  componentWillMount() {
    if (localStorage.userid !== '') {
      this.setState({hasLogined: true});
      this.setState({userNickName: localStorage.userNickName, userid: localStorage.userid});
    }
  }

  setModalVisible(value) {
    this.setState({modalVisible: value});
  }

  handleClick(e) {
    if (e.key === 'register') {
      this.setState({current: 'register'});
      this.setModalVisible(true);
    } else {
      this.setState({current: e.key});
    }
  }

  handleSubmit(e)
	{
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
    var formData = this.props.form.getFieldsValue();
    console.log(formData)
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
			localStorage.userid= json.UserId;
			localStorage.userNickName = json.NickUserName;
    });
    console.log(localStorage.userNickName)
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	};
  callback(key) {
    if (key === 1) {
      this.setState({action: 'login'});
    } else if (key === 2) {
      this.setState({action: 'register'});
    }
  };
  logout() {
    localStorage.userid = '';
    localStorage.userNickName = '';
    this.setState({hasLogined: false});
  };

  render() {
    let {getFieldDecorator} = this.props.form
    const userShow = this.state.hasLogined
      ? <Menu.Item
          key="logout"
          className="register"
          style={{
          float: 'right'
        }}>
          <div>
            {/*<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
      &nbsp;&nbsp;*/}
            <Link target="_blank" to={`/usercenter`}>
              <Button type="dashed" htmlType="button">个人中心</Button>
            </Link>
            &nbsp;&nbsp;
            <Button
              type="ghost"
              htmlType="button"
              onClick={this
              .logout
              .bind(this)}>退出</Button>
          </div>
        </Menu.Item>
      : <Menu.Item
        key="register"
        className="register"
        style={{
        float: 'right'
      }}>
        <Icon type="user"/>注册/登录
      </Menu.Item>
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={logo} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu
              mode="horizontal"
              multiple
              onClick={this
              .handleClick
              .bind(this)}
              selectedKeys={[this.state.current]}>
              <Menu.Item key="top" className="pc-header-menu-item">
                头条
              </Menu.Item>
              <Menu.Item key="shehui" className="pc-header-menu-item">
                社会
              </Menu.Item>
              <Menu.Item key="keji" className="pc-header-menu-item">
                科技
              </Menu.Item>
              <Menu.Item key="yule" className="pc-header-menu-item">
                娱乐
              </Menu.Item>
              <Menu.Item key="tiyu" className="pc-header-menu-item">
                体育
              </Menu.Item>
              <Menu.Item key="caijing" className="pc-header-menu-item">
                财经
              </Menu.Item>
              {userShow}
            </Menu>
            <Modal
              title="用户中心"
              wrapClassName="vertical-center-modal"
              visible={this.state.modalVisible}
              onCancel=
              {()=>this.setModalVisible(false)}
              onOk=
              {()=>this.setModalVisible(false)}
              okText="关闭">
              <Tabs
                type="Card"
                onChange={this
                .callback
                .bind(this)}>
                <TabPane tab="登录" key="1">
                  <Form
                    horizontal="true"
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <FormItem label="账户">
                      {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号"/>)}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码"/>)}
                    </FormItem>
                    <Button type="primary" htmlType="submit">登录</Button>
                  </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                  <Form
                    horizontal="true"
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <FormItem label="账户">
                      {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号"/>)}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码"/>)}
                    </FormItem>
                    <FormItem label="确认密码">
                      {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入您的账号"/>)}
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
export default PcHeader = Form.create({})(PcHeader);