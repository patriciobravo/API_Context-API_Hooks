import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';


const GifsData = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(data => [inputValue]);
        setInputValue('')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="col-sm-6 col-xs-1">
                <Form.Label>Nombre Gif</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Gifs a buscar"
                    value={inputValue}
                    onChange={handleInputChange}
                />

            </Form.Group>

            <Button variant="primary ml-3 btn-sm" type="submit">
                Buscar
            </Button>
        </Form>
    )
}
GifsData.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default GifsData;