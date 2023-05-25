import React from 'react';
import './ContactStyle.css'
import Card from "react-bootstrap/Card";
import {Button, Container, Form, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <div className="bg">
            <Container
                className="d-flex justify-content-center align-items-center"
                style = {{height: window.innerHeight - 50}}
            >
                <Card style = {{width: 850, height: 300 }} className = "p-4">
                   <div className="d-flex justify-content-between m-5 ">
                    <div className=" " style = {{textAlign: "center"}}>
                        <div style = {{fontFamily: "Georgia", fontWeight: "bold", fontSize: 18}}>ТЕЛЕФОН</div>
                        <div className="mt-3"><div style={{borderLeft: "2px solid green", height: 40, marginLeft: "50%"}}></div></div>
                        <div className="mt-3" style = {{fontFamily: "fantasy", fontSize: 17}}>+380 (995662708)</div>
                        <div className="mt-2" style = {{fontFamily: "fantasy", fontSize: 17}}>+380 (671947240)</div>
                    </div>

                    <div style = {{textAlign: "center"}}>
                        <div style = {{fontFamily: "Georgia", fontWeight: "bold", fontSize: 18}}>СОЦІАЛЬНІ МЕРЕЖІ</div>
                        <div className="mt-3"><div style={{borderLeft: "2px solid green", height: 40, marginLeft: "50%"}}></div></div>
                        <div className="mt-3">
                        <a className="m-2" href = "https://www.instagram.com/lobodaofficial/">
                            <img
                            style = {{width: 50}}
                            src = "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"
                        /></a>
                        <a className="m-2" href = "https://www.instagram.com/lobodaofficial/">
                            <img
                                style = {{width: 50}}
                                src = "data:image/jpeg;base64,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"
                            /></a>
                            </div>
                    </div>
                       <div style = {{textAlign: "center"}}>
                           <div style = {{fontFamily: "Georgia", fontWeight: "bold", fontSize: 18}}>МИ ПРАЦЮЄМО</div>
                           <div className="mt-3"><div style={{borderLeft: "2px solid green", height: 40, marginLeft: "50%"}}></div></div>
                           <div className="mt-3" style = {{fontFamily: "fantasy", fontSize: 15}}>Пн - Нд</div>
                           <div style = {{fontFamily: "fantasy", fontSize: 18}}>12:00 - 23:00</div>
                       </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default Contact;