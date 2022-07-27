import React, {useState, useEffect} from 'react'
import { placeHolderApi } from '../Api/placeHolderApi'
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
// import NavScrollExample from '../pages/navBar'


export const Products = (term) => {
    const [product, setProduct] = useState([])
    const getProductData = async() => {
        const res = await placeHolderApi.get ('/item')
        console.log(res.data)
        setProduct(res.data)
    }

    useEffect(() => {
        getProductData()
    
    
    }, [])
    
    return (
        <>
            {
                product.map(user => (
                    <Stack direction="horizontal" gap={3} style={{width: '10px'}}>
                    <div key={user.id} style={{width: '10px'}}>
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
                    </div>
                    </Stack>
                    ))
            }
            
        </>
    )
    }
