import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-auto-rows: 350px;

    grid-column-gap: 10px;
    grid-row-gap: 100px;

    justify-content: space-evenly;
    align-items: center;
`;

export const ProductCardsContainer = () => {
    const [productData, setProductData] = useState([]);
 
    const fetchProductData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            const refinedData = data.map(product => ({
                    id: product.id,
                    price: product.price,
                    rate: product.rating.rate,
                    image: product.image,
                }))
                setProductData(refinedData)
        } catch(error){
            console.log('error:',error) 
        }
    }    
            
    useEffect(()=>{
        fetchProductData()
    },[])

    return (
        <CardWrapper>
            {productData.map((product) => 
                <ProductCard key={product.id} productData={product}/>
            )}
        </CardWrapper>
    )
}