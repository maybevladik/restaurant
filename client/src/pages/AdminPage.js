import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDish from "../components/modals/CreateDish";
import DeleteDish from "../components/modals/DeleteDish";

const AdminPage = () => {
    const [dishVisible, setDishVisible] = useState(false)
    const [dishDeleteVisible, setDishDeleteVisible] = useState(false)
    return (
        <Container style = {{textAlign: 'center'}} className="block ">
            <Button style={{width: "50%"}}  variant={"outline-dark"} className="mt-2" onClick={() => setDishVisible(true)}>Додати страву</Button>
            <Button style={{width: "50%"}} className="mt-2" onClick={() => setDishDeleteVisible(true)} >Видалити страву</Button>
            <CreateDish show={dishVisible} onHide={() => setDishVisible(false)} />
            <DeleteDish show={dishDeleteVisible} onHide={() => setDishDeleteVisible(false)} />
        </Container>
    );
};
export default AdminPage;