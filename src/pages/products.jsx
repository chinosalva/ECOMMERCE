import axios from "axios";
import React, {useState, useEffect} from 'react'
//import {placeHolderApi} from '../Api/placeHolderApi'

export const Products = () => {
    const [product, setProduct] = useState([])
    const getProductData = async() => {
        const res = await axios.get ('https://ecomerce-master.herokuapp.com/api/v1/item')
        console.log(res.data)
        setProduct(res.data)
    }

    useEffect(() => {
        getProductData()
    
    
    }, [])
    
    return (
        <>
            {
                Products.map(product => {

                })
            }
        </>
    )
}