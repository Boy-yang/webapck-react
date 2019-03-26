import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { getUserInfo } from "../../actions";
import "./Register.scss";
@connect(
  state => ({
    userInfo: state.base.userInfo
  }),
  {
    getUserInfo
  }
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    };
    this.props.getUserInfo();
  }
  render() {
    const { userInfo } = this.props;
    return (
      <div className="register">
        <Form className="register-form">
          <Form.Item label="username">
            <Input type="username"/>
          </Form.Item>
          <Form.Item label="Password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Register;
