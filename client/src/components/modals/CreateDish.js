import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createDish, fetchDishes, fetchType} from "../../http/dishAPI";
import {observer} from "mobx-react-lite";

const CreateDish = observer( ({show, onHide}) => {
    const {dish} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [calories, setCalories] = useState(0)
    const [file, setFile] = useState(null)

    useEffect( () => {
        fetchType().then(data => dish.setTypes(data))
       // fetchDishes().then(data => dish.setDishes(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDish = () => {
        const formData = new FormData()
        formData.append('nameOfDish', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('calories', `${calories}`)
        formData.append('typeDish', dish.selectedType.typeId)
        formData.append('img', file)
        createDish(formData).then(data => onHide())
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
                    Додати страву
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{dish.selectedType.name || "Виберіть тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {dish.types.map(type =>
                                <Dropdown.Item
                                    onClick={ () => dish.setSelectedType(type)}
                                    key={type.typeId}
                                >{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2"
                        placeholder="Введіть назву страви"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-2"
                        placeholder="Зробіть опис страви"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2"
                        placeholder="Введіть ціну"
                    />
                    <Form.Control
                        value={calories}
                        onChange={e => setCalories(Number(e.target.value))}
                        className="mt-2"
                        placeholder="Введіть кількість калорій"
                    />
                    <Form.Control
                        className="mt-2"
                        type = "file"
                        onChange={selectFile}
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

export default CreateDish;