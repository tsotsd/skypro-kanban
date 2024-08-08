import Login from "../../components/Login/Login";
import { GlobalStyleSignIn, Wrapper } from "../../components/Login/Login.styled"

export const LoginPage = () => {
    return (
        <>
            <GlobalStyleSignIn />
            <Wrapper>
                <Login />
            <Wrapper/>
        </>
    );
};


export default LoginPage;