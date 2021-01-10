import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Router } from 'react-router-dom'
import LoginForm from './LoginForm'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'

describe('LoginForm', function () {
    it('입력을 하지 않은 상태에서 로그인을 시도하면 입력하라는 문구가 출력된다', async () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <LoginForm />
            </Router>,
        )
        userEvent.click(screen.getByRole('button'))
        expect(
            await screen.findByText('비밀번호를 입력해주세요.'),
        ).toBeInTheDocument()
        expect(
            await screen.findByText('이메일을 입력해주세요.'),
        ).toBeInTheDocument()
    })
})
