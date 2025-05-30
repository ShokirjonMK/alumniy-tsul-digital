import React from 'react';
import auth_image from "../../assets/auth-img2.svg"
import { Button, Form, Input } from 'antd';
import { useAuth } from '../../store';

const Login: React.FC = (): React.JSX.Element => {
  const { login } = useAuth();

  function handleSubmit(values: any) {
    login(values);
  }

  return (
    <div className="h-screen grid grid-cols-3 gap-12 px-20- ">
      <div className="col-span-2 bg-gray-50 flex-center">
        <img src={auth_image} alt="" className='w-2/3' />
      </div>
      <div className="flex-center flex-col bg-gray-500/10- rounded-2xl ">
        <div className="flex items-end gap-2 mb-6 text-3xl font-bold">
          <h1 className='text-blue-500'>Alumni</h1>
          {/* <p className='text-xl'>Sign In</p> */}
        </div>
        <Form
          layout='vertical'
          onFinish={handleSubmit}
          className='w-72 xl:w-96 font-medium'
        >
          <Form.Item name={"username"} label={"Foydalanuvchi nomi"}>
            <Input size='large' placeholder='Foydalanuvchi nomingizni kiriting ...' className='w-full' />
          </Form.Item>
          <Form.Item name={"password"} label={"Parol"}>
            <Input.Password size='large' className='rounded-2xl w-full' placeholder='Parolingizni kiriting ...' />
          </Form.Item>

          {/* <Form.Item>
              <Checkbox>Meni eslab qol</Checkbox>
            </Form.Item> */}

          <Button type='primary' size='large' block htmlType='submit' className='mt-4 w-full' >Kirish</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;