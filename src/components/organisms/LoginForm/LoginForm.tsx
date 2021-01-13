import React from 'react'
import { Alert, Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import useMember from '../../../hooks/useMember'

export interface ILoginForm {
    email: string
    password: string
}

function LoginForm() {
    const methods = useForm<ILoginForm>()
    const { loginSubmit, error } = useMember()
    return (
        <div>
            <Form onFinish={methods.handleSubmit(loginSubmit)}>
                <Controller
                    name={'email'}
                    control={methods.control}
                    as={
                        <Form.Item
                            label="이메일"
                            rules={[
                                {
                                    type: 'email',
                                    message: '유효하지 않은 이메일 형식입니다.',
                                },
                                {
                                    required: true,
                                    message: '이메일을 입력해주세요.',
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                name={'email'}
                                placeholder="email"
                            />
                        </Form.Item>
                    }
                />
                <Controller
                    name={'password'}
                    control={methods.control}
                    as={
                        <Form.Item
                            label="패스워드"
                            rules={[
                                {
                                    required: true,
                                    message: '비밀번호를 입력해주세요.',
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                    }
                />

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        로그인
                    </Button>
                    또는 <Link to={'/sign-up'}>가입하기</Link>
                    <a
                        href={
                            'http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth2/redirect'
                        }
                    >
                        카카오 로그인하기
                    </a>
                </Form.Item>
            </Form>
            {error && (
                <Alert
                    message={error.message}
                    type={error.type}
                    banner={true}
                    closable={true}
                    showIcon={true}
                />
            )}
        </div>
    )
}

export default LoginForm
