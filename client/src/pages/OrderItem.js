import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {DISH_ROUTE} from "../utils/constants";
import Card from "react-bootstrap/Card";
import {Button, Col, Container, Image} from "react-bootstrap";
import {Context} from "../index";

const OrderItem = observer( ({order}) => {
    const {dish} = useContext(Context)
    const cancelOrder = () =>{
        dish.setDeletedOrder(order.dishId)
        console.log("del id: " + order.dishId)
    }

    console.log("dsds:" + dish.orders.dishId)
    return (
        <Container className="mt-5">

        <Col className="d-flex">
            <div>
                <Image height={50} src = {'http://localhost:4500/' + order.img} />
                </div>
            <div style={{marginLeft: 15}}>
                <h6>{order.nameOfDish}</h6>
                <p>{order.price}грн</p>
            </div>
            <div className="">
                <Button onClick={cancelOrder}>Відмінити</Button>
            </div>
        </Col>
        </Container>
    );
});

export default OrderItem;