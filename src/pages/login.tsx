import React from "react";
import styled from "@emotion/styled";
import LoginForm from "../components/organisms/LoginForm";

function LoginPage () {
    return <Wrapper>
        <LoginForm/>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default LoginPage