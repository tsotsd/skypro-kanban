import { Link } from "react-router-dom";
import { ContainerSignin, LoginButton, LoginWrapper, LoginModal, LoginModalBlock, LoginModalTtl, LoginModalForm, LoginModalInput } from "./Login.styled";

const Login = ({login}) => {
    return (
        <LoginWrapper >
            <ContainerSignin>
                <LoginModal>
                    <LoginModalBlock>
                        <LoginModalTtl>
                            <h2>Вход</h2>
                        </LoginModalTtl>
                        <LoginModalForm id="formLogin" action="#" onSubmit={login}>
                            <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <input className="modal__input" type="passport" name="passport" id="formpassport" placeholder="Пароль" />
                            <LoginButton type="submit">Войти</LoginButton>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </div>    
                        </LoginModalForm>
                    </LoginModalBlock>
                </LoginModal>
            </ContainerSignin>
        </LoginWrapper> 
    );
};

export default Login;