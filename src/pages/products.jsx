import React, {useState, useEffect} from 'react'
import { placeHolderApi } from '../Api/placeHolderApi'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../App.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const Products = (term) => {
    const [product, setProduct] = useState([])
    // const [tabla, setTabla] = useState([])
    const [search, setSearch] = useState('')
    const getProductData = async() => {
        const res = await placeHolderApi.get ('/item')
        console.log(res.data)
        setProduct(res.data)
        // setTabla(res.data)
    }
    const handleInputChange = (event) => {
        // console.log(event.target.primero)
        console.log(event.target.value)
        setSearch(
            event.target.value
        )
        // filtrar(event.target.value);
    }
    /* const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tabla.filter((elemento) =>
        elemento.product_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.category.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()).map(elemento => 
        return elemento;))
        setProduct(resultadosBusqueda);
    } */

    // const filtrar = (terminoBusqueda) => {
    //     var resultadosBusqueda = tabla.filter((elemento) => {
    //         if (elemento.product_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //         || elemento.product_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //         ){
    //             return elemento
    //         }
    //     })
    // }

    useEffect(() => {
        getProductData()
    
    
    }, [])
    
    return (
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
            <Nav.Link href="#action1">Home</Nav.Link>
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
                
            product.map(user => (
                    //search === "hola" ? <Products />: <notFound />
                    <Row xs={1} md={1} className="g-4">
                    <div id='carta' key={user.id}>
                    <Link to={`/products/${user._id}`}>
                    <Col>
                    <Card style={{ width: '18rem', heigth: '2rem' }}>
                        <Card.Img variant="top" src={`${user.image}`} />
                            <Card.Body>
                                <Card.Title>{`${user.product_name}`}</Card.Title>
                            <Card.Text>
                                {
                                    `${user.description}`
                                }
                            </Card.Text>
                            </Card.Body>
                            <Card.Body>
                            <Card.Link href="#">{`${user.category}`}</Card.Link>
                            <Card.Link href="#">{`Costo ${user.price}`}</Card.Link>
                            </Card.Body>
                            </Card>
                            </Col>
                    </Link>
                    </div>
                    </Row>
                    ))
            }
            </>
            
    )
    }
