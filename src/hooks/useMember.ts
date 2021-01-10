import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import {
    authActions,
    createMemberActions,
} from '../store/modules/member/reducer'
import { useForm } from 'react-hook-form'
import { ILoginForm } from '../components/organisms/LoginForm/LoginForm'
import { ISignupForm } from '../components/organisms/SignupForm'
import { useTypedSelector } from '../store'

export default function useMember() {
    const dispatch = useDispatch()
    const error = useTypedSelector((state) => state.member.error)
    const signupSubmit = useCallback((dto: ISignupForm) => {
        dispatch(
            createMemberActions.REQUEST({
                email: dto.email,
                password: dto.password,
                username: dto.username,
            }),
        )
    }, [])

    const loginSubmit = useCallback((dto: ILoginForm) => {
        dispatch(authActions.REQUEST(dto))
    }, [])
    return { loginSubmit, signupSubmit, error }
}
