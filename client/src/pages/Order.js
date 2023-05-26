import React, {useContext, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import OrderItem from "./OrderItem";

const Order = observer( () => {
    const {dish} = useContext(Context)
    let endPrice = 0;
    const [nameEndRes, setNameEndRes ] = useState('')
    const [firstNameEndRes, setFirstNameEndRes ] = useState(null)

    {dish.orders.map(order =>
        endPrice = endPrice + order.price
    )}

    const confirmOrder = () => {
        alert("Вітаємо, " + nameEndRes + "е, ваше онлайн замовлення прийнято")
        setFirstNameEndRes('')
        dish.setDeleteAllOrder()
    }

    return (
        <div>
        <div className="mt-3" style={{textAlign: "-webkit-center"}}>
            {dish.orders.length !==0 ?
                <div className="d-flex" style={{width: "60%", border: "1px solid gray", background: "gray" }}>
                <div style={{marginLeft: 155, textAlign: "left",  width: 509}}>Товар</div>
                <div style={{}}>Ціна</div>
                </div>
                :
                <div>
                </div>
            }
        <div style={{width: "60%",}}>
            {dish.orders.length !==0 ?
                <div>
                    {dish.orders.map(order =>
                        < OrderItem key = {order.dishId} order = {order}/>
                    )}
                </div>
                :
                <div style={{marginTop: '15%', textAlign: "center"}}>
                    <h4>Ваш кошик пустий</h4>
                </div>
            }
        </div>
        </div>
            <div className="mt-4" style={{textAlign: "-webkit-center"}}>
                {dish.orders.length !==0 ?
                    <div>
                    <div>
                        <h3>Підсумковий результат</h3>
                    </div>
                    <div className="mt-3" style={{width: 500, border: "1px solid gray"}}>
                        <div style={{borderBottom: "1px solid gray"}} className="d-flex mt-2">
                            <div style={{marginLeft: 5, width: 200}}>
                                <strong>Проміжний підсумок:</strong>
                            </div>
                            <div style = {{}}>
                                <p>{endPrice} &#8372;</p>
                            </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div style={{marginLeft: -1, width: 200}}>
                            <strong>Прізвище та ім'я:</strong>
                        </div>
                        <div>
                            <input style={{width: 220}}
                            onChange={e => setNameEndRes(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                        <div className="d-flex mt-2" style={{borderTop: "1px solid gray"}}>
                            <div className="mt-2">
                                <strong><p>Замовлення буде готове через 30-60хв після того, як ви його підтвердите.
                                    З турботою про вас!</p></strong>
                            </div>
                        </div>
            </div>
                        <Button className="mt-2" variant={"outline-danger"} onClick={confirmOrder}>Підтвердити</Button>
                    </div>

                    :
                    <div>
                    </div>
                }
            </div>
        </div>
    );
});

export default Order;