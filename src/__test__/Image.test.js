import { render, screen } from '@testing-library/react';
import ImageTesting from '../components/ImageTesting';

test("image test case", () => {
    // Render the ImageTesting component
    render(<ImageTesting />);

    // Get the image element by its title attribute
    const title = screen.getByTitle("img");

    // Check if the image element is present in the document
    expect(title).toBeInTheDocument();
});
