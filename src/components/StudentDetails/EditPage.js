import React, { Component } from 'react';
import { Row, Form ,Col, Button } from "react-bootstrap";


class EditPage extends Component {
   
    render() {
        return (
            <div>
                <h1>Edit Student Page</h1>
                 <Row>
                     <Col sm={6}>
                      <Form>
                          <Form.Group controlId="studentName">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control
                               type="text"
                               name="studentName"
                               placeholder="StudentName"
                               />
                          </Form.Group>
                          <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                              type="text"
                              name="age"
                              placeholder="Age"
                            />
                          </Form.Group>
                          <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                              type="text"
                              name="email"
                              placeholder="Email"
                            />
                          </Form.Group>
                          <Form.Group controlId="phnNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                              type="text"
                              name="phnNumber"
                              placeholder="Phone Number"
                            />
                          </Form.Group>
                          <Form.Group controlId="branch">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control 
                              type="number"
                              name="branch"
                              placeholder="Branch"
                            />
                          </Form.Group>
                          <Form.Group>
                              <Button type='submit'>Save</Button>
                          </Form.Group>
                      </Form>
                     </Col>
                 </Row>
            </div>
        );
    }
}

export default EditPage;