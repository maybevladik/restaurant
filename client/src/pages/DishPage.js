import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useParams} from 'react-router-dom'
import {fetchOneDish} from "../http/dishAPI";
import {Context} from "../index";

const DishPage = () => {
    const {dish} = useContext(Context)
    const params = useParams()
    console.log("Id: " + params.dishId)
//    const {dish} = useContext(Context)
   /* const dish = {
        id: 1, nameOfDish: 'Борщ', description: 'Український традиційний борщ з пампушками', calories: 122,
        price: 200, img: 'https://media.istockphoto.com/id/624207602/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%B1%D0%BE%D1%80%D1%89%D0%BE%D0%B2%D1%8B%D0%B9-%D1%81%D1%83%D0%BF-%D0%B8-%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D0%BB%D0%BE%D1%87%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.jpg?b=1&s=612x612&w=0&k=20&c=VjzTO3y_SSdihjzloWqFSAjZFgS_lF1uwa08Gfbjgww='
    }*/
    const [selectDish, setDish] = useState('')
    //const {'1'} = useParams()

    useEffect( () => {
        fetchOneDish(params.dishId).then( data => setDish(data))
    }, [])

    const addOrder = () =>{
        dish.setOrder(selectDish)
        console.log(dish.orders)
    }

    //console.log("id: " + dishId)
   // console.log("data: " + dish)
    return (
        <Container className="mt-5">
            <Row className="justify-content-end">
                <Col md = {4} className="align-items-center">
                    <Image height={240} src={'http://localhost:4500/'+  selectDish.img} />
                </Col>
                <Col md = {4}>
                    <Row>
                        <h2>{selectDish.nameOfDish}</h2>
                        <div>{selectDish.description}</div>
                        <div>Енергетична цінність: {selectDish.calories} ккал</div>
                    </Row>
                </Col>
                <Col md = {4}>
                    <Card
                        style = {{border: "2px solid green", width: 200}}
                        className="d-flex align-items-center mt-5 p-2">
                        <Button className="mb-3" variant={"outline-dark"} onClick={addOrder} >Додати в кошик</Button>
                        <h6>Ціна: {selectDish.price} UAH</h6>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DishPage;