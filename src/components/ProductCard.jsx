import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faStar,faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import styled from 'styled-components';

const Card = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;

    align-items: strech;
    justify-content: space-between;

    font-size: ${props => props.theme.fontSize.medium};

    & > div:first-child{
        height: 100%;
        display:flex;
        align-items: center;
        justify-content:center;
    }
    & > div img{
        width:150px;
        max-height: 200px;
    }
`
const ProductDetails = styled.div`
    & > div:first-child{
        display:flex;
        justify-content: space-between;
        padding-bottom: 8px
    }

   & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & > div {
            display: flex;
            align-items: center;
            gap: 8px;
            padding-bottom: 8px;
            width:100%;

            & > button {
                border: none;
                background-color: ${props => props.theme.colors.primary};
                color: rgb(255,255,255);
                padding: 8px;
                border-radius: 4px;
                width: 100%;

                &:hover {
                    background-color: ${props => props.theme.colors.secondary};
                }
            }

            & > input {
                width: 80px;
                text-align: center;
                border: 1px solid  rgb(221,221,221);
                border-radius: 4px;
                padding: 4px;
            }
        }
    }
`

export const ProductCard = ({productData}) => {
    const [quantity,setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const [shopCart,setShopCart] = useOutletContext();

    const handleAddToCart = () => {
        const product = { ...productData, quantity};
        
        setShopCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(p => p.id === productData.id);

            if(existingProductIndex !== -1){

                return prevCart.map((product,index) =>
                    index === existingProductIndex 
                    ? {...product, quantity: product.quantity + quantity}
                    : product
                )

            } else {
                return [...prevCart, product]
            }
        })
        setIsAdded(true);
        setQuantity(1);

        setTimeout(() => setIsAdded(false),1000)
    }

    const handleQuantityChange = (event) => {
        const value = Number(event.target.value);
        
        setQuantity(value > 0 ? value : "")
    }
    
    const updateQuantity = (change) => {
        setQuantity((prevQuantity) =>{
            const newQuantity = prevQuantity + change;
            return  newQuantity > 0 ? newQuantity : 1;
        })
    }
    return (
        <Card>
            <div>
                <img src={productData.image} alt="" />
            </div>
            <ProductDetails>
                <div> 
                    <p>{productData.price}$</p>
                    <p>{productData.rate} <FontAwesomeIcon icon={faStar} /></p>
                </div>
                <div>
                    <div>
                        <button onClick={() =>updateQuantity(-1)}><FontAwesomeIcon icon={faMinus}/></button>
                        <input 
                        type="number" 
                        value={quantity} 
                        onChange={handleQuantityChange} 
                        />
                        <button onClick={() =>updateQuantity(1)}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                    <div>
                        <button onClick={handleAddToCart}>{isAdded ? "Added!" : "Add to cart" }</button>
                    </div>
                </div>
            </ProductDetails>
            
        </Card>
    )
}

ProductCard.propTypes = {
    productData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};