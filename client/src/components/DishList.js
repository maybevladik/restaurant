import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import DishItem from "./DishItem";

const DishList = observer( () => {
    const {dish} = useContext(Context)
    return (
        <Row>
            {dish.dishes.map( dish =>
                <DishItem key = {dish.dishId} dish = {dish} />
            )}
        </Row>
    );
});

export default DishList;