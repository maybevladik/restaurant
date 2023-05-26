import React from 'react';
import {Container} from "react-bootstrap";

const Come = () => {
    return (
            <Container className="container-fluid" style ={{marginTop: -20}} >
                <div className="p-5" style={{textAlign: "center"}}>
                <h5 style={{color: "green", lineHeight: 2 }} >Ласкаво просимо до нашого ресторану, де ваші смакові рецептори зануряться у світ смаків,
                    а ваші втома та суєта знайдуть пристань у спокійній та затишній атмосфері.
                    </h5>
                <h5 style={{color: "green", lineHeight: 2 }} >Наш ресторан - це справжня гастрономічне пригода, яка запрошує вас на чарівну подорож у світ
                    смаків та ароматів. Ви зможете насолодитися розкішними стравами, які створені з використанням найсвіжіших та найякісніших інгредієнтів. </h5>
                </div>
            </Container>
    );
};

export default Come;