import { render, screen } from '@testing-library/react';
import TextTesting from '../components/TextTesting';

test("test text case", () => {
    // Render the TextTesting component
    render(<TextTesting />);

    // Get the text element containing "Text testing" case-insensitively
    const text = screen.getByText(/Text testing/i);

    // Check if the text element is present in the document
    expect(text).toBeInTheDocument();
});
