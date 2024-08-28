import { Link } from "react-router-dom";

const Login = ({login}) => {
    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal_ttl">
                            <h2>Регистрация</h2>
                        </div>
                        <form className="modal__form-login" id="formLogin" action="#" onSubmit={login}>
                            <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <input className="modal__input" type="passport" name="passport" id="formpassport" placeholder="Пароль" />
                            <button className="modal__btn-enter _hover01" id="btnEnter" type="submit">Войти</button>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Login;