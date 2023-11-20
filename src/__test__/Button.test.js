import { fireEvent, render, screen } from '@testing-library/react';
import ButtonTesting from '../components/ButtonTesting';

test("button click event testcase", () => {
    // Render the ButtonTesting component
    render(<ButtonTesting />);

    // Get the button element by its role
    const btn = screen.getByRole("button");

    // Simulate a button click event
    fireEvent.click(btn);

    // Check if the text "updated" is present in the document
    expect(screen.getByText("updated")).toBeInTheDocument();
});
