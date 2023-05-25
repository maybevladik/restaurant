import React, {useContext} from 'react';
import Nav from 'react-bootstrap/Nav'
import {Button, Container, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CONTACT_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    MENU_ROUTE,
    ORDER_ROUTE
} from "../utils/constants";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const NavbarPage = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{textDecoration: 'none'}} to = {HOME_ROUTE}>Головна</NavLink>
                <NavLink style={{textDecoration: 'none'}} to = {MENU_ROUTE}>Меню</NavLink>
                <NavLink style={{textDecoration: 'none'}} to = {CONTACT_ROUTE}>Контакти</NavLink>
                <NavLink style={{textDecoration: 'none'}} to = {ORDER_ROUTE}>Кошик</NavLink>
                {user.isAuth ?
                    <Nav className="">
                        <Button className="me-2" onClick={() => history.push(ADMIN_ROUTE)}>Адмін панель</Button>
                        <Button onClick={() => logOut()} className="">Вийти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavbarPage;