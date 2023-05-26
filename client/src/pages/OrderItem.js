import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {DISH_ROUTE} from "../utils/constants";
import Card from "react-bootstrap/Card";
import {Button, Col, Container, Image} from "react-bootstrap";
import {Context} from "../index";
import "./OrderItem.css"

const OrderItem = observer( ({order}) => {
    const {dish} = useContext(Context)
    const cancelOrder = () =>{
        dish.setDeletedOrder(order.dishId)
        console.log("del id: " + order.dishId)
    }

    console.log("dsds:" + dish.orders.dishId)
    return (
        <div>
        <div className="d-flex" style={{borderBottom: "1px solid gray", height: 100, paddingTop: 25}}>
            <div style={{marginLeft: 10}}>
                <img className="delB" onClick={cancelOrder} style={{width: 40, cursor: "pointer"}}
                     src = "https://cdn.icon-icons.com/icons2/1522/PNG/96/crosscirclelinear_106172.png"
                />
            </div>
            <div style={{marginLeft: 35}}>
                <Image height={50} src = {'http://localhost:4500/' + order.img} />
                </div>
            <div style={{marginLeft: 20, width: 460, textAlign: "left"}}>
                <h6>{order.nameOfDish}</h6>
            </div>
            <div style={{marginLeft: 50}}>
                <p>{order.price} &#8372;</p>
            </div>
        </div>
        </div>
    );
});

export default OrderItem;