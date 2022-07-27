import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Products } from '../pages/products'


function NavScrollExample() {
    const [search, setSearch] = useState('')
    const handleInputChange = (event) => {
        // console.log(event.target.primero)
        console.log(event.target.value)
        setSearch(
            event.target.value
        )
    }

    
return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">ECOMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
            Link
            </Nav.Link>
        </Nav>
        <Form className="d-flex">
            <Form.Control
            value={search}
            onChange={handleInputChange}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button 
            className='button-search'
            variant="outline-success"
            onClick={()=> {
            Products(search.primero)
            setSearch({primero:''})
        }}
            >
            Search
            </Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavScrollExample;