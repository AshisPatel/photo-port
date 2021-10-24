import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockSetIsModalOpen = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            setIsModalOpen={mockSetIsModalOpen}
        />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            setIsModalOpen={mockSetIsModalOpen}
        />)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls setIsModalOpen', () => {
        const { getByText } = render(<Modal
            currentPhoto={currentPhoto}
            setIsModalOpen={mockSetIsModalOpen}
        />);

        fireEvent.click(getByText('Close this modal'));
        expect(mockSetIsModalOpen).toHaveBeenCalledTimes(1);

    })

})
