import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus,faTrash } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: ${props => props.theme.fontSize.medium}}
`;

const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    
`;
const Card = styled.div`
    display: flex;
    align-items:center;
    width: 400px;
    height: 200px;

    & img {
        width:40%;
        height: auto;
    }
    
    & > div:nth-child(2){
        display:flex;
        align-items:center;
        
    }
`;
const ProductInfo = styled.div`
    gap:20%;
`
const QuantityWrapper = styled.div`
    display:flex;
    align-items:center;
    gap:5%;

    & > button {
        border: none;
        padding:5px 10px;
        &:hover {
        background-color:  ${props => props.theme.colors.background};
        }
    }
`;

const SubtotalWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:32px;
    width: 300px;

    padding: 15px 32px;
    border: 2px solid ${props => props.theme.colors.background};

    & > span:nth-child(2) {
    justify-self: end;
    }
    
    & > button {
        font-size: 1.1rem;
        grid-column: 1 / -1;
        padding:5px 0;
        border: 1px solid transparent;
        background-color: rgb(119, 187, 140);
        
        transition: border-color 0.3s ease;
        
        border-radius: 3px;

        &:hover {
            border-color: ${props => props.theme.colors.secondary};
        }
    }
`;

const EmptyCart = styled.p`
    margin-top: 32px;
    font-size: ${props => props.theme.fontSize.medium};
    text-align:center ;
`;

const Title = styled.h2`
    text-align: center;
`;
export const CartPage = () => {
    const [shopCart,setShopCart] = useOutletContext();
    
    const [subTotal,setSubTotal] = useState(0);

    useEffect(()=>{
        const calculateSubTotal = () =>{
            const total = shopCart.reduce((total,product) => total + product.price * product.quantity,0)
            setSubTotal(total.toFixed(2))
        }
        calculateSubTotal();
    },[shopCart])
    
    const updateQuantity = (productId,change) =>{
        
        setShopCart((prevCart) =>{
            return prevCart.map(product =>(
                
                product.id === productId 
                ? {...product, quantity: product.quantity + change > 0 ? product.quantity + change : 1} 
                : product
            ))
        })
    }

    const handleDeleteItem = (productId) => {
        const updatedShopCart = shopCart.filter((product) => product.id !== productId);

        setShopCart(updatedShopCart)
    }

    const HandleCheckout = () => {
        setShopCart([])
    }
    return (
        <div>
            <Title>Shopping cart</Title>
            {shopCart.length > 0 ? (
                <CartContainer>
                    <CardWrapper>
                    {shopCart.map((product) => (
                            <Card key={product.id}>
                                <div>
                                    <img src={product.image} alt="" />
                                </div>
                                <ProductInfo>
                                    <QuantityWrapper>
                                        <p>Quantity </p>
                                            <button onClick={()=>updateQuantity(product.id,-1)}>
                                                <FontAwesomeIcon icon={faMinus}/>
                                            </button> 
                                            <p>{product.quantity} </p>
                                            <button onClick={()=>updateQuantity(product.id,1)}>
                                                <FontAwesomeIcon icon={faPlus}/> 
                                            </button>
                                    </QuantityWrapper>
                                    <div>
                                        <p> {product.price}$ </p>
                                    </div>
                                    <div>
                                        <button onClick={()=>handleDeleteItem(product.id)}><FontAwesomeIcon icon={faTrash}/></button>
                                    </div>
                                </ProductInfo>
                            </Card>
                        ))}
                    </CardWrapper> 
                    <SubtotalWrapper>
                        <span>SubTotal </span>
                        <span>{subTotal}$</span>
                        <button onClick={HandleCheckout}>Checkout</button>   
                    </SubtotalWrapper>   
                </CartContainer>
            ) : (
                <EmptyCart> Your shopping cart is empty!</EmptyCart> 
            )} 
        </div>
    )
}