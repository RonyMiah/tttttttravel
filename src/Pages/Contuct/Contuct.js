import React from 'react';
import { Form } from 'react-bootstrap';
import './Contuct.css';

const Contuct = () => {
    return (
        <div className="countuct">
        
              <Form>
                   
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> Contuct Us </Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" />
                     
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                    <Form.Control type="email" placeholder="Enter your email" />
                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                    <Form.Control type="submit" value="Submit" className="btn btn-warning" />
                    </Form.Group>
              </Form>
                    

          </div>
    );
};

export default Contuct;