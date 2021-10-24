import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../Contact';

afterEach(cleanup);

describe('ContactForm component', () => {
    it('renders', () => {
        render(<ContactForm />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('text content is appropriately rendered', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('h1')).toHaveTextContent('Contact Me');
    expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
 
})
