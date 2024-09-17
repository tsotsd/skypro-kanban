import { Link } from "react-router-dom";
import { ContainerSignin, LoginButton, LoginWrapper, LoginModal, LoginModalBlock, LoginModalTtl, LoginModalForm, LoginModalInput, LoginModalFormGroup } from "./Login.styled";
import { useState } from "react";

const Login = ({login}) => {

    const [authData, setAuthData] = useState({login: "", password: ""})

    const hendleInputChange = event => {
        event.preventDefault()
        const {name, value} = event.target
        setAuthData({...authData, [name]:value})
    }

    return (
        <LoginWrapper >
            <ContainerSignin>
                <LoginModal>
                    <LoginModalBlock>
                        <LoginModalTtl>
                            <h2>Вход</h2>
                        </LoginModalTtl>
                        <LoginModalForm id="formLogin" action="#" onSubmit={(e) => login(e, authData.login, authData.password)}>
                            <LoginModalInput type="text" onChange={hendleInputChange} value={authData.login} name="login" id="formlogin" placeholder="Эл. почта" /> 
                            <LoginModalInput type="password" onChange={hendleInputChange} value={authData.password} name="password" id="formpassport" placeholder="Пароль" />
                            <LoginButton type="submit">Войти</LoginButton>
                            <LoginModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </LoginModalFormGroup>    
                        </LoginModalForm>
                    </LoginModalBlock>
                </LoginModal>
            </ContainerSignin>
        </LoginWrapper> 
    );
};

export default Login;