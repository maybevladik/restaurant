import React from 'react';
import {Col, Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {DISH_ROUTE} from "../utils/constants";

const DishItem = ({dish}) => {
    const history = useHistory()
    return (
        <Col md = {3} className={"mt-2"} onClick={() => history.push(DISH_ROUTE + '/' + dish.dishId)}>
            <Card style = {{width: 160, height: 230, cursor: 'pointer', paddingTop: 3, marginBottom: 5}}
                  border = {"white"} className="d-flex align-items-center">
                <Image width = {150} height={150} src = {'http://localhost:4500/' + dish.img} />
                <div style={{textAlign: "center", marginTop: 2 }}>{dish.nameOfDish}</div>
            </Card>
        </Col>
    );
};

export default DishItem;