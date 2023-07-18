import React from 'react';
import {fireEvent, getByText, render, screen} from '@testing-library/react';
import App from "../App";

function generateRandomString() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = Math.floor(Math.random() * 20) + 1;
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

describe("Verify dev screen", () => {
    it("Web should display success dialog", () => {
        render(<App/>);
        const textField = screen.getByTestId("keyInput");
        fireEvent.change(textField, {target: {value: 'hehe'}})

        const submitBtn = screen.getByTestId("submitBtn");
        fireEvent.click(submitBtn);

        expect(screen.getByText(/You are a good dev/i)).toBeInTheDocument();
    });

    it("Web should display failed dialog", () => {
        render(<App/>);
        const textField = screen.getByTestId("keyInput");
        fireEvent.change(textField, {target: {value: generateRandomString()}})
        const submitBtn = screen.getByTestId("submitBtn");
        fireEvent.click(submitBtn);

        expect(screen.getByText(/You are a gher dev/i)).toBeInTheDocument();
    });
});
