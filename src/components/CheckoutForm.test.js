import React from "react";
import { render , screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


// initializing needed elements 
const typeFirst = () => screen.getByLabelText('First Name:');
const typeLast = () => screen.getByLabelText('Last Name:');
const typeAddress = () => screen.getByLabelText('Address:');
const typeCity = () => screen.getByLabelText('City:');
const typeState = () => screen.getByLabelText('State:');
const typeZip = () => screen.getByLabelText('Zip:');
const submitButton = () => screen.getByRole('button')

const successMessage = () => screen.getByTestId('successMessage')

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
    expect(header).toHaveTextContent(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    userEvent.type(typeFirst(), 'Aleksandr');
    userEvent.type(typeLast(), 'Ardanov');
    userEvent.type(typeAddress(), 'One Apple Park Way');
    userEvent.type(typeCity(), 'Cupertino');
    userEvent.type(typeState(), 'CA');
    userEvent.type(typeZip(), '95014');
    userEvent.click(submitButton());

    expect(successMessage()).toBeInTheDocument();
    expect(successMessage()).toBeVisible();
    expect(successMessage().children[4]).toHaveTextContent('Aleksandr Ardanov');
    expect(successMessage().children[5]).toHaveTextContent('One Apple Park Way');
    expect(successMessage().children[6]).toHaveTextContent('Cupertino, CA 95014');
});
