import { Link } from "react-router-dom"
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    padding: 20px;
    font-size: ${props => props.theme.fontSize.medium};

    h2 {
        font-size: ${props => props.theme.fontSize.large};
        color: ${props => props.theme.colors.primary};
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    p {
        color: ${props => props.theme.colors.secondary};
        margin-bottom: 32px;
    }
`;

const ShopLink = styled(Link)`
    
    padding: 10px 16px;
    color:rgb(250,250,250);
    background-color: ${props => props.theme.colors.primary};
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const HomePage = () => {
    return (
        <Container>
            <h2>Fake Shop</h2>
            <img src="/images/homepage-img.jpg" alt=""/>
            <p>Everything you need!</p>
            <ShopLink to="/shop">Shop Now</ShopLink>
        </Container>
    )
}