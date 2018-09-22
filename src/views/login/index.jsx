import React, { Component } from 'react';
import { Form, Icon, Input, Button, Avatar } from 'antd';
import './login.less';
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/index');
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <div style={{textAlign: "center"}}>
                <Avatar size="large" icon="user" />
                <p className="title">用户登录</p>
              </div>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <div className="login-pro">
                <a href="" className="register">马上注册</a>
                <a href="">忘记密码</a>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

Login = Form.create({})(Login);
export default Login;