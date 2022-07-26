import React, {useState, useEffect} from 'react'
import { placeHolderApi } from '../Api/placeHolderApi'

export const Products = () => {
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
            <ul>
            {
                product.map(user => (
                    <li key={user.id} >
                        <p>
                            {
                                `${user.category}`
                            }
                        </p>
                    </li>
                ))
            }
            </ul>   
        </>
    )
    }