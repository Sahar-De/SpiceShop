import { Button, Input, Form, Alert, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../slices/AuthSlice'
import React, { useEffect, useState } from 'react'

const SignIn = ({ onOk }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);
  const [messageApi, contextHolder] = message.useMessage();




  const onFinish = async (values) => {
    try {
      await dispatch(login({ userName: values.userName, passWord: values.passWord })).unwrap();
      messageApi.open({
        type: "success",
        content: "باموفقیت وارد شدید'"
      })
      navigate('/shop');
      onOk();
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "نام کاربری یا رمز ورود اشتباه است"
      })
    }
  }



  return (

    <div className='flex flex-col gap-5 items-center font-farsi w-full px-24'>
      {contextHolder}
      <h1 className=''>ورود</h1>
      <Form initialValues={{ remember: true }} className='flex flex-col gap-10 w-full' onFinish={onFinish}>
        <div className='flex flex-col items-start justify-between gap-5  font-farsi'>
          <label>اطلاعات کاربری خود را وارد کنید</label>

          <Form.Item
            className='w-full'
            name="userName"
            rules={[{ required: true, message: 'لطفا نام کاربری را وارد کنید' }]}
          >
            <Input className='p-2 border border-gray rounded-sm w-full' placeholder="Username" />
          </Form.Item>
          <Form.Item
            className='w-full'
            name="passWord"
            rules={[{ required: true, message: 'لطفا رمز عبور را وارد کنید' }]}
          >
            <Input.Password className='p-2 border border-gray rounded-sm w-full' placeholder="Password" />
          </Form.Item>
          <Button style={{ padding: "0px", color: "var(--color-mint-500)" }} type='link'>پسورد را فراموش کرده اید؟</Button>
          <Button className='w-full' type="primary" htmlType="submit" loading={loading}>ورود</Button>
        </div>
      </Form>
    </div>
  )
}

export default SignIn
