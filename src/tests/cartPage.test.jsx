import { render, screen} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CartPage } from '../components/CartPage';

describe("cart page component", () => {
    it("should render a message when cart is empty"), () => {
        render(<CartPage/>)

        expect(screen.getAllByText(/Your shopping cart is empty!/i)).toBeInTheDocument();
    };


})