import React, {useContext} from 'react';
import {ListGroup} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const TypeBar = observer( () => {
    const {dish} = useContext(Context)
    return (
        <ListGroup>
            {dish.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={type.typeId === dish.selectedType.typeId}
                    onClick={() => dish.setSelectedType(type)}
                    key = {type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;