import React from 'react'
import { Alert, Button, Checkbox, Form, Input, Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { history } from '../../store'
import { Link } from 'react-router-dom'
import useMember from '../../hooks/useMember'

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
}

export interface ISignupForm {
    email: string
    password: string
    confirm: string
    agreement: boolean
    username: string
}

function SignupForm() {
    const { signupSubmit, error } = useMember()
    return (
        <div>
            <Form {...formItemLayout} name={'signup'} onFinish={signupSubmit}>
                <Form.Item
                    name="email"
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
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="비밀번호"
                    rules={[
                        {
                            required: true,
                            message: '패스워드를 확인해주세요.',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="패스워드 확인"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '패스워드를 확인해주세요.',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (
                                    !value ||
                                    getFieldValue('password') === value
                                ) {
                                    return Promise.resolve()
                                }
                                return Promise.reject(
                                    '패스워드 확인이 일치하지 않습니다.',
                                )
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="username"
                    label={
                        <span>
                            이름&nbsp;
                            <Tooltip title="프로필에 나타나는 이름입니다.">
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: '이름을 입력해주세요.',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject('Should accept agreement'),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>동의합니다.</Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        가입하기
                    </Button>
                    <Button
                        type={'primary'}
                        htmlType={'button'}
                        onClick={() => history.goBack()}
                    >
                        뒤로가기
                    </Button>
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

export default SignupForm
