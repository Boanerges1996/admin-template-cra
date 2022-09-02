import React, { useState } from 'react'
import { Row, Col, Button, Form, Typography, Input, Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PhubieLogo from '../../assets/images/logoB.png'
// import { loginLoadingAdminSelector } from '../redux/selectors'
// import { loginActionThunk } from '../redux/thunks'

const { Title } = Typography

export default function Login(props) {
  const [form] = Form.useForm()
  // const loading = useSelector(loginLoadingAdminSelector)
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    // dispatch(loginActionThunk(values))
  }

  const onFinishFailed = (errorInfo) => {}

  if (props.logged) {
    return <Navigate to="/main/dashboard" />
  }
  return (
    <div
      style={{
        backgroundColor: '#cfd8dc',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{ width: '100vw', height: '100vh' }}
      >
        <Col
          xs={22}
          sm={16}
          md={12}
          lg={10}
          xl={8}
          xxl={7}
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            minHeight: '450px',
            // paddingTop: "30px",
            textAlign: 'center',
            paddingBottom: '30px',
          }}
        >
          <div
            style={{
              backgroundColor: '#000',
              minHeight: '200px',
              borderRadius: '10px 10px 0px 0px',
              paddingTop: '30px',
            }}
          >
            <img
              src={PhubieLogo}
              alt="luxstek  logo2"
              style={{
                width: '150px',
                height: '150px',
                marginBottom: '20px',
                marginTop: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </div>

          <br />
          <br />
          <Title level={3} style={{ color: 'black' }}>
            Sign in your account
          </Title>
          <br />
          <div style={{ paddingInline: '50px' }}>
            <Form
              form={form}
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please email requred',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address',
                  },
                ]}
                label={
                  <Typography.Text
                    style={{
                      color: '#757575',
                      fontSize: '16px',
                      fontWeight: 'bolder',
                    }}
                  >
                    Email
                  </Typography.Text>
                }
              >
                <Input placeholder="example@123.com" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Password required ',
                  },
                ]}
                label={
                  <Typography.Text
                    style={{
                      color: '#757575',
                      fontSize: '16px',
                      fontWeight: 'bolder',
                    }}
                  >
                    Password
                  </Typography.Text>
                }
              >
                <Input.Password placeholder="**********" />
              </Form.Item>
              <Form.Item>
                <Row>
                  <Col span={12} style={{ textAlign: 'left' }}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ textAlign: 'right' }}>
                    <a
                      className="login-form-forgot"
                      href="/"
                      style={{ textAlign: 'right' }}
                    >
                      Forgot password
                    </a>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ width: '100%' }}
                  htmlType="submit"
                  // loading={loading}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
