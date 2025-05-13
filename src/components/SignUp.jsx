import React from 'react'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../slices/AuthSlice'

const SignUp = ({ onOk }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const { error, loading, isLoggedIn, user } = useSelector((state) => state.auth)

    const onFinish = async (values) => {
        try {
            await dispatch(register(values)).unwrap()
            messageApi.open({
                type: "success",
                content: 'Registration successful'
            })
            navigate('/shop')
            if (onOk) onOk();
        } catch (error) {
            messageApi.open({
                type: "error",
                content: error || 'Registration failed'
            })
        }
    }

    return (
        <div className="flex flex-col gap-5 items-center font-farsi w-full px-14">
            {contextHolder}
            {error && <div className='text-red-500'>خطایی رخ داد{error}</div>}
            {loading && <div>....loading</div>}
            <h1>ایجاد حساب کاربری</h1>
            <Form
                className="flex flex-col gap-2 w-full"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    label="نام کاربری:"
                    name="userName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="ایمیل:"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="رمز عبور:"
                    name="passWord"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="تایید رمز عبور:"
                    name="confirmPassword"
                    dependencies={['passWord']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('passWord') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject(new Error('The two passwords do not match!'))
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="w-full"
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                    >
                        ارسال
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUp
