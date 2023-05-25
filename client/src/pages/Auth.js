import React, {useContext, useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import {NavLink, useLocation} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const Auth = observer( () => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(HOME_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style = {{height: window.innerHeight - 54}}
        >
            <Card style = {{width: 500}} className = "p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        <Button
                            className="mt-3"
                            variant={"outline-primary"}
                            onClick={click}
                        >
                            {isLogin ? 'Увійти' : 'Ок' }
                        </Button>
                        {isLogin ?
                        <div
                            className="mt-3 text-center"
                            style = {{fontSize: 15}}
                        >
                            Ваш перший вхід? <NavLink to = {REGISTRATION_ROUTE}>Зареєструватися</NavLink>
                        </div>
                            :
                            <div
                                className="mt-3 text-center"
                                style = {{fontSize: 15}}
                            >
                                Вже зареєстровані? <NavLink to = {LOGIN_ROUTE}>Увійти</NavLink>
                            </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;