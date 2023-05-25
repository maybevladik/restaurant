import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DishList from "../components/DishList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDishes, fetchType} from "../http/dishAPI";
import Pages from "../components/Pages";
import Basket from "./Basket";

const Menu = observer( () => {
    const {dish} = useContext(Context)
    const [order, setOrder] = useState(null)

    useEffect( () => {
        fetchType().then(data => dish.setTypes(data))
        fetchDishes(null, 1, 5).then(data =>{
            dish.setDishes(data.rows)
            dish.setTotalCount(data.count)
        })
    }, [])

    useEffect( () => {
        fetchDishes(dish.selectedType.typeId, dish.page, 5).then(data =>{
            dish.setDishes(data.rows)
            dish.setTotalCount(data.count)
        })
    }, [dish.page, dish.selectedType])

    return (
        <div className="bg">
        <Container>
          <Row className="mt-4">
              <Col md = {3}>
                <TypeBar />
              </Col>
              <Col md = {9}>
                <DishList />
                  <Pages />
                  <Basket />
              </Col>
          </Row>
        </Container>
            </div>
    );
});

export default Menu;