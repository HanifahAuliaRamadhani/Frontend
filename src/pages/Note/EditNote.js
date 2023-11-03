import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {Button, Container, Row, Col, Card, FloatingLabel, Form } from "react-bootstrap";


function EditNote () {
    const {id} = useParams();
    const navigation = useNavigate();
      const [post, setPost] = useState({
        id: 0,
        title: '',
        description: ''
      });

    useEffect(() => {
      console.log(id);
      axios.get(`http://localhost:6400/note/${id}`)
      .then((res) => {
        console.log(res.data)
        setPost(res.data)
      })
    }, )

    const handleInput = (e) => {
      setPost({...post, [e.target.name]: e.target.value})
    }

    
    function handleSubmit(e) {
      e.preventDefault()
      console.log(post)
      axios
      .put(`http://localhost:6400/note/${post.id}`, {
        title: post.title,
        description: post.description,
      })
      .then((result) => {
        console.log("data API", result);
        alert("Note has update");
        navigation("/");
      })
      .catch((err) => {
        alert(err.response.data.error);
      })
    }

    return(
      <>
      <Container className= "my-5">
        <Row>
          <Col>
          <Card>
            <Card.Header as="h3">Update Note</Card.Header>
            <Card.Body>

              <Card.Title>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Title..."
                  className="mb-3"
                >
                  <Form.Control value={post.title} onChange={handleInput} name="title" type="text" placeholder="Title..." />
                </FloatingLabel>
              </Card.Title>

              <Card.Text>
                <FloatingLabel ny
                controlId="floatingPassword" 
                label="Description..."
                >
                  <Form.Control value={post.description} onChange={handleInput} name="description" type="text" placeholder="Description..." />
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


export default EditNote;