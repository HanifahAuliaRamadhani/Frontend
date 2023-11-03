import "../css/home.css";
import { React, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Container, Form, InputGroup } from "react-bootstrap";
import {BiSearchAlt} from "react-icons/bi";

export default function Home() {
  const [noteData, setNoteData] = useState([])
  
 
  useEffect(() => {
    axios.get('http://localhost:6400/note')
    .then(result => {
        console.log('data API', result);
        setNoteData(result.data)
    })
    .catch(err => {
        console.log('error: ', err);
    })
  }, [])

 
  const deleteById = id => {
    axios.delete(`http://localhost:6400/note/${id}`)
    .then(() => {
      alert("Note Has Deleted")
      const newNote = noteData.filter((note) => {
        return note.id !== id;
      });
      setNoteData(newNote);
    })
    .catch(err => {
      console.log('error: ', err);
      alert("error: ", err)
    })
  }

const [search, setSearch] = useState("");

    return( 

      <>
      <div className="bs">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <BiSearchAlt/>
        </InputGroup.Text>
        <Form.Control
          placeholder="Search Note..."
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(event) => {
            setSearch(event.target.value);
          }}

        />
      </InputGroup>

        
        <br/>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {noteData.filter((val) => {
              if (search == "") {
                return val
              } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
            }).map((note, index) => {
            return (
            <>

                <Col>
                  <Card>
                    <Card.Header as="h5">{note.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>{note.description}</Card.Title>
                      <Card.Text>
                        
                        {note.createdat}
                      </Card.Text>
                      <Link to={`/editnote/${note.id}`}><Button variant="outline-primary">
                        Edit 
                        </Button></Link>{' '}
                      <Button variant="outline-danger" onClick={() => deleteById(note.id)}>
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
        <br/>
        <br/>
        </>
        )})}
          </Row>
        </Container>
      </div>
      </>
    )
  };
