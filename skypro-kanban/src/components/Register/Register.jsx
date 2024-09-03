import { Link } from "react-router-dom";
import { ContainerSignin, LoginButton, LoginWrapper, LoginModal, LoginModalBlock, LoginModalTtl, LoginModalForm, LoginModalInput, LoginModalFormGroup } from "./Register.styled";

const Login = ({login}) => {
    return (
        <LoginWrapper >
            <ContainerSignin>
                <LoginModal>
                    <LoginModalBlock>
                        <LoginModalTtl>
                            <h2>Регистрация</h2>
                        </LoginModalTtl>
                        <LoginModalForm id="formLogin" action="#" onSubmit={login}>
                            <LoginModalInput type="text" name="name" id="formname" placeholder="Имя" /> 
                            <LoginModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" /> 
                            <LoginModalInput type="passport" name="passport" id="formpassport" placeholder="Пароль" />
                            <LoginButton type="submit">Зарегистрироваться</LoginButton>
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


