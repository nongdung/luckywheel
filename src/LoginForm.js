import React, { useState } from 'react';
import styled from 'styled-components';
import jwt_decode from "jwt-decode";
import { Button, Modal, Form, Input } from 'antd';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


import RegisterForm from './RegisterForm';


const Wrapper = styled.div`
  .ant-form-item {
    color: white;
  }
  .register {
    display: inline-block;
    width: 100%;
    margin-top: 15px;
  }

  a:link {
    color: white !important;
    text-decoration: underline;
  }

  a:hover {
    color: hotpink;
  }
`;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = (e) => {
    e && e.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} là trường bắt buộc!',
    types: {
      email: '${label} không hợp lệ!',
    },
    string: {
      min: '${label} phải có ít nhất ${min} ký tự',
    }
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <Wrapper>
      <Form
        name="login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Email"
          placeholde="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              min: 8,
            },
          ]}
          extra={
            <span>Tôi <a href="# " style={{ color: 'white' }}>quên mật khẩu!</a></span>
          }
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          extra={
            <span className="register">Bạn chưa có tài khoản?&nbsp;
              <a
                href="# "
                style={{ color: 'white' }}
                onClick={showModal}
              >Đăng ký ngay!</a>
            </span>
          }
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <GoogleOAuthProvider clientId="810136024283-pi5dm1ahvp4a0m3q10q3aukf3eiv4krg.apps.googleusercontent.com">
        <GoogleLogin
          auto_select
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            const decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Register</h3>
        <RegisterForm />
      </Modal>
    </Wrapper>
  );
};
export default App;
