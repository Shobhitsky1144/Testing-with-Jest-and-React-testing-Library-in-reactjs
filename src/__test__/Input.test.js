import { fireEvent, render, screen } from '@testing-library/react';
import InputTesting from '../components/InputTesting';

test("testing input box", () => {
    // Render the InputTesting component
    render(<InputTesting />);

    // Get the input element by its role and placeholder text
    const checkInput = screen.getByRole("textbox");
    const checkInputPlaceholder = screen.getByPlaceholderText("Enter Username");

    // Check if the input element and its placeholder are present in the document
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();

    // Check specific attributes of the input element
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userid");
    expect(checkInput).toHaveAttribute("type", "text");
});

test("on change event testing", () => {
    // Render the InputTesting component
    render(<InputTesting />);

    // Get the input element by its role
    const checkInput = screen.getByRole("textbox");

    // Simulate a change event on the input element
    fireEvent.change(checkInput, { target: { value: 'aa' } });

    // Check if the input value has been updated
    expect(checkInput.value).toBe('aa');
});
