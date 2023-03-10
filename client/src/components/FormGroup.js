import React from 'react';
import { Form } from 'react-bootstrap';

const FormGroup = ({ controlId, type, label, placeholder, value, onChange }) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </Form.Group>
    );
};

export default FormGroup;
