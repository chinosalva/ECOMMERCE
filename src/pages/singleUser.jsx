import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { placeHolderApi } from '../Api/placeHolderApi'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'



export const SingleUser = () => {
        const [single, setSingle] = useState({})
        const { userId } = useParams()
        const getProduct = async () => {
            const res = await placeHolderApi.get (`/item/${userId}`)
            setSingle(res.data)
        }
        useEffect(() => {
        getProduct()
        }, [])
        
return (
    <div>
        <>
        {
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
            <Nav.Link href="/final-proyect/src/pages/products.jsx">Home</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button 
            className='button-search'
            variant="outline-success"
        //     onClick={()=> {
        //     Products(search.primero)
        //     setSearch({primero:''})
        // }}
            >
            Search
            </Button>
            
        </Form>
                </Navbar.Collapse>
    </Container>
    </Navbar>
            }

        {
            <article className='card'>
                <img src={`${single.image}`} alt="" className='card__img' />
                <div className='card__data'>
                    <h2 className='card__title'>{`${single.product_name}`}</h2>
                <p className='card__description'>{`${single.description}`}</p>
                <a href='/final-proyect/src/pages/notFound.jsx' className='card__btn'>{`${single.price}`}</a>
                </div>
                </article>
        }
        </>

        
    </div>
)
}
