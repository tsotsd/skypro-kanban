import Login from "../../components/Login/Login";
// import { Wrapper } from "../../components/shared.styled"

export const LoginPage = ({login}) => {
    return (
           <>
            {/* <Wrapper /> */}
            <Login login={login}/>
            {/* <Wrapper /> */}
            </>
    )
}

export default LoginPage;