import React from 'react'
import d from './Login.module.css'

const Login = (props) => {

    return(
        <div className={d.wrap}>
            <h1>Авторизируйтесь</h1>
        <form action="">
            <div className={d.field}>
                <label htmlFor="login">Ваш Логин</label>
                <input type="text" id="login"/>
            </div>
            <div className={d.field}>
                <label htmlFor="mail">Ваша Почта</label>
                <input type="email" id="mail"/>
            </div>
            <div className={d.field}>
                <input type="submit" placeholder="Войти"/>
            </div>
        </form>
        </div>
    )
}

export default Login;