import { useState } from "react";
import "../css/addNote.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Container, Row, Col, Card, FloatingLabel, Form } from "react-bootstrap";

function Addnote () {

    const navigation = useNavigate();
      const [post, setPost] = useState({
        title: '',
        description: ''
      })

    const handleInput = (e) => {
      setPost({...post, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
      e.preventDefault()
      console.log(post)
      axios.post('http://localhost:6400/api/note', post)
      .then(result => {
        console.log('data API', result);
        alert("Note has Post");
        navigation('/')
      })
      .catch(err => {
        alert(err.response.data.error)
      })
    }

    return(
      <>

      <Container className= "my-5">
        <Row>
          <Col>
          <Card>
            <Card.Header as="h3">Add Note</Card.Header>
            <Card.Body>

              <Card.Title>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Title..."
                  className="mb-3"
                >
                  <Form.Control  onChange={handleInput} name="title" type="text" placeholder="Title..." />
                </FloatingLabel>
              </Card.Title>

              <Card.Text>
                <FloatingLabel 
                controlId="floatingPassword" 
                label="Description..."
                >
                  <Form.Control onChange={handleInput} name="description" type="text" placeholder="Description..." />
                </FloatingLabel>
              </Card.Text>

              <Button onClick={handleSubmit} variant="outline-primary" value="submit">Save</Button>
              {' '}
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
  
  export default Addnote;