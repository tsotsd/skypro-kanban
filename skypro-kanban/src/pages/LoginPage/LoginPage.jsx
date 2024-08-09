import Login from "../../components/Login/Login";
import { GlobalStyleSignIn, Wrapper } from "../../components/Login/Login.styled"

export const LoginPage = ({login}) => {
    return (
           <>
            <GlobalStyleSignIn />
            <Wrapper />
            <Login login={login}/>
            <Wrapper />
            </>
    )
}

export default LoginPage;