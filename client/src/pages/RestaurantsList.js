import React from 'react';
import './RestaurantsList.css'
import Come from "./Come";
import {Container} from "react-bootstrap"; // Стилі для блоків

const Block = ({ image, text, url }) => (
    <div className="block">
        <div className="image-container">
            <img src={image} alt="Фото" className="image" />
            <div className="overlay"></div>
            <div className="text">{text}</div>
        </div>
        <div className="mt-2">
            <h6>Адреса:</h6>
            <a style={{textDecoration: "none", color: "#7A0000"}}
                href={url}><h6>Переглянути на <img className="mb-1" style={{height: "20px"}} src = 'https://emojio.ru/images/apple-b/1f449.png' /> Google Maps</h6></a>
        </div>
    </div>
);

const App = () => {
    const blocksData = [
        { image: 'https://st.depositphotos.com/1301843/4493/i/450/depositphotos_44930803-stock-photo-restaurant-interior.jpg', text: 'Видубичі', url: 'https://www.google.com.ua/maps/place/%D0%96%D0%9A+Sky+Hill/@50.4049023,30.5552402,19z/data=!4m6!3m5!1s0x40d4cf5ec53b4b8f:0x963ac0febbce4cf1!8m2!3d50.40487!4d30.5563395!16s%2Fg%2F11g724jdlj?hl=ru' },
        { image: 'https://st4.depositphotos.com/21035578/22973/i/450/depositphotos_229739118-stock-photo-wooden-table-modern-interior.jpg', text: 'Лісний масив', url: 'https://www.google.com.ua/maps/place/%D0%90%D0%A2%D0%91-%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@50.4680067,30.6180087,16z/data=!4m19!1m9!2m8!1z0JPQvtGB0YLQuNC90LjRhtGL!3m6!1z0JPQvtGB0YLQuNC90LjRhtGL!2z0JvQtdGB0L0uINC80LDRgdGB0LjQsiwg0JrQuNC10LIsIDAyMDAw!3s0x40d4d00dae79b121:0xf5be7f3be15707a6!4m2!1d30.6307969!2d50.4724642!3m8!1s0x40d4d00f9b1c565d:0x369d8519a25e904e!5m2!4m1!1i2!8m2!3d50.4702778!4d30.6255556!16s%2Fg%2F1tdp3kml?hl=ru' },
        { image: 'https://static5.depositphotos.com/1010643/509/i/450/depositphotos_5092519-stock-photo-restaurant-interior.jpg', text: 'Русанівка', url: 'https://www.google.com.ua/maps/place/%D0%9C%D1%83%D1%88%D0%BB%D1%8F/@50.4398923,30.5933452,17.27z/data=!4m18!1m11!3m10!1s0x40d4cf8bbbffff83:0x5f48c87f9586e9f2!2z0KDRg9GB0LDQvdC-0LLQutCwLCDQmtC40LXQsiwgMDIwMDA!3b1!5m2!4m1!1i2!8m2!3d50.4387555!4d30.5967533!16zL20vMDg0OGRf!3m5!1s0x40d4cf9a5a13124d:0x4899185c180819a0!8m2!3d50.4387482!4d30.5923016!16s%2Fg%2F11h8w2nj66?hl=ru' },
        { image: 'https://static7.depositphotos.com/1021014/788/i/950/depositphotos_7888251-stock-photo-cafe-with-stone-wall.jpg', text: 'Троєщина', url: 'https://www.google.com.ua/maps/place/%D0%90%D0%A2%D0%91-%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@50.5049918,30.585448,15.23z/data=!4m15!1m8!3m7!1s0x40d4d1101cf34fe7:0x9d5091b9baa5f66f!2z0KLRgNC-0LXRidC40L3QsCwg0JrQuNC10LIsIDAyMDAw!3b1!8m2!3d50.5161781!4d30.6053597!16s%2Fm%2F027zbnc!3m5!1s0x40d4d1b107a42193:0xc31f3c0402205514!8m2!3d50.5008605!4d30.5856995!16s%2Fg%2F1tdw6ksf?hl=ru' },
        { image: 'https://st.depositphotos.com/1389715/3021/i/450/depositphotos_30211631-stock-photo-luxury-restaurant-in-european-style.jpg', text: 'Святошин', url: 'https://www.google.com.ua/maps/place/%D0%90%D0%A2%D0%91-%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@50.4565224,30.3848067,16.37z/data=!4m15!1m8!3m7!1s0x40d4ccb59b334939:0xb7aef764610cf1ee!2z0KHQstGP0YLQvtGI0LjQvdGB0LrQuNC5INGA0LDQudC-0L0sINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.464301!4d30.3451381!16zL20vMDZxeWZj!3m5!1s0x40d4cc89fd97aa4b:0x2f1be9b19d3941c6!8m2!3d50.4534017!4d30.3850989!16s%2Fg%2F11cnc5y7yx?hl=ru' },
        { image: 'https://static3.depositphotos.com/1009905/260/i/450/depositphotos_2600844-stock-photo-interior-of-the-restaurant.jpg', text: 'Теремки', url: 'https://www.google.com.ua/maps/place/%D0%90%D0%A2%D0%91/@50.3671722,30.4478144,15z/data=!4m15!1m8!3m7!1s0x40d4c8576244a213:0xf68cc7093048ca5!2z0KLQtdGA0LXQvNC60LgsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.3654125!4d30.4587324!16s%2Fm%2F010hs2_v!3m5!1s0x40d4c858fd406121:0x35abd9c000358a8a!8m2!3d50.3658211!4d30.4624818!16s%2Fg%2F1pp2vkq5p?hl=ru' },
    ];

    return (
        <Container>
            <div>
                <hr />
                <h2>Заклади</h2>
                <hr/>
            </div>
        <div className="container">
            {blocksData.map((block, index) => (
                <Block key={index} image={block.image} text={block.text} url={block.url} />
            ))}
        </div>
        </Container>
    );
};

export default App;

