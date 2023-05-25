import React, {useContext} from 'react';
import {Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import OrderItem from "./OrderItem";

const Order = observer( () => {
    const {dish} = useContext(Context)

    return (
        <Row>
            {dish.orders ?
                <div>
                    {dish.orders.map(order =>
                        < OrderItem key = {order.dishId} order = {order}/>
                    )}
                </div>
                :
                <div>
                    Ваш кошик пустий
                </div>
            }
        </Row>
    );
});

export default Order;