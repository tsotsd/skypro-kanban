import { Link } from "react-router-dom";
import { LogginButton, LogginWrapper } from "./Login.styled";

const Login = ({login}) => {
    return (
        <LogginWrapper >
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal_ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogin" action="#" onSubmit={login}>
                            <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <input className="modal__input" type="passport" name="passport" id="formpassport" placeholder="Пароль" />
                            <LogginButton type="submit">Войти</LogginButton>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        </LogginWrapper> 
    );
};

export default Login;