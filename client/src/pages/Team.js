import React from 'react';
import {Container} from "react-bootstrap";
import './Team.css'

const photos = [
    'https://st3.depositphotos.com/12982378/16705/i/450/depositphotos_167054852-free-stock-photo-barista-holding-coffee-beans.jpg',
    'https://st3.depositphotos.com/12985790/19363/i/450/depositphotos_193631908-free-stock-photo-male-chef-holding-frying-pan.jpg',
    'https://images.pexels.com/photos/4485370/pexels-photo-4485370.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://st3.depositphotos.com/12985790/19363/i/450/depositphotos_193636520-free-stock-photo-smiling-multicultural-chefs-cooking-together.jpg',
    'https://images.pexels.com/photos/4254266/pexels-photo-4254266.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/1218174006/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%84%D1%96%D1%86%D1%96%D0%B0%D0%BD%D1%82%D0%BA%D0%B0-%D1%82%D1%80%D0%B8%D0%BC%D0%B0%D1%94-%D0%B2-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%96-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D1%83-%D1%82%D0%B0%D1%80%D1%96%D0%BB%D0%BA%D1%83-%D0%B7-%D1%8F%D0%BB%D0%BE%D0%B2%D0%B8%D1%87%D0%B8%D0%BC-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=6X3aJm3fVfiWFu8uWB6HG0caJfJs5dteYEQNJOSae4Y=',
    'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6205639/pexels-photo-6205639.jpeg?auto=compress&cs=tinysrgb&w=600'
];
const Team = () => {
    return (
        <Container className="mb-3">
            <div>
            <hr />
            <h2>Наша команда</h2>
            <hr/>
            </div>
            <div className="photo-gallery">
                <div className="photo-container">
                    {photos.map((photo, index) => (
                        <div className="photo-item" key={index}>
                            <img src={photo} alt={`Фото ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </Container >
    );
};

export default Team;