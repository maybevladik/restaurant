import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createDish, deleteDish, fetchDishes, fetchType} from "../../http/dishAPI";
import {observer} from "mobx-react-lite";

const DeleteDish = observer( ({show, onHide}) => {
    const {dish} = useContext(Context)
    const [deleteId, setDeleteId] = useState('')
    const addDish = () => {
        const formData = new FormData()
        formData.append('nameOfDish', deleteId)
        deleteDish(formData).then(data => onHide())
        //dish.selectedType.name = null
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Видалити страву
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={deleteId}
                        onChange={e => setDeleteId(e.target.value)}
                        className="mt-2"
                        placeholder="id delete"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addDish}>Додати</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteDish;