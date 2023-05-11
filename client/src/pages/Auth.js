import React from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

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
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        <Button
                            className="mt-3"
                            variant={"outline-primary"}>
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
};

export default Auth;