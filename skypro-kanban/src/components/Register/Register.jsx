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



// import { Link } from "react-router-dom";

// const Login = ({login}) => {
//     return (
//         <div className="wrapper">
//             <div className="container-signin">
//                 <div className="modal">
//                     <div className="modal__block">
//                         <div className="modal_ttl">
//                             <h2>Регистрация</h2>
//                         </div>
//                         <form className="modal__form-login" id="formLogin" action="#" onSubmit={login}>
//                             <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
//                             <input className="modal__input" type="passport" name="passport" id="formpassport" placeholder="Пароль" />
//                             <button className="modal__btn-enter _hover01" id="btnEnter" type="submit">Войти</button>
//                             <div className="modal__form-group">
//                                 <p>Нужно зарегистрироваться?</p>
//                                 <Link to="/register">Регистрируйтесь здесь</Link>
//                             </div>    
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     );
// };

// export default Login;