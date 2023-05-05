import { render , screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe("Navbar Title",()=>{
    it('should have a title in the navbar', () => {
        render(<Navbar/>);
        const headingNavbar = screen.getByText("Text Converter");
        expect(headingNavbar).toBeInTheDocument();
    })
})
