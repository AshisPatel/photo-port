import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from "./PhotoList"

const categoryName = "portrait"

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList categoryName = {categoryName}/>)
    })

    it('renders', () => {
        const { asFragment } = render(<PhotoList categoryName = { categoryName }/>)
        expect(asFragment()).toMatchSnapshot()
    });
});