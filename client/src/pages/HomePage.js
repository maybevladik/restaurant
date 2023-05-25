import React, {useState} from 'react';
import {Carousel, Container} from "react-bootstrap";
import Title from "./Title";
import RestaurantsList from "./RestaurantsList";
import Come from "./Come";
import Team from "./Team";

const HomePage = () => {
    return (
        <div>
            <Title />
            <Come />
            <RestaurantsList />
            <Team />
       </div>
    );
};

export default HomePage;