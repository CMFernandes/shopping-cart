
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo =  styled.h2`
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
`;

const NavLink = styled(Link)`
   text-decoration: none;
   font-size: 18px;
   margin-left: 20px;
   color: ${props => props.theme.colors.primary};
   
   &:hover {
    
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`;

const CartSpan = styled.span`
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    background-color: white;
    border-radius: 50%;
    position:relative; 
    bottom: 5px;
    left:3px
`;

export const Navbar = ({shopCart}) => {
    const numberOfCartItems = shopCart.reduce((total,product) => total + product.quantity ,0);

    return (
        <NavbarContainer>
            <div>
                <Logo>Fake Shop</Logo>
            </div>
            <div>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/cart" > 
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <CartSpan>{numberOfCartItems}</CartSpan>
                </NavLink>
            </div>
        </NavbarContainer>
    )
};
