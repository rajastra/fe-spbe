import { Button } from "react-bootstrap";
import './Login.css'
import { Form, Input } from "antd";

const Login = () => {
  const [form] = Form.useForm();
  return (
    <div className="login-container">
      <div className="container">
        <div className="login-box">
          <img src='/assets/img/logo.png' alt='spbe Logo' />
          <hr />
          <Form form={form} layout='vertical' className='full-form'>
            <div className='first-form'>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Harap diisi" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Harap diisi" }]}
              >
                <Input.Password />
              </Form.Item>
            </div>
          </Form>
          <Button type='primary' className='login-button'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login