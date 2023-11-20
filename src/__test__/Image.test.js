import { render,screen} from '@testing-library/react';
import ImageTesting from '../components/ImageTesting';

test("image test case ",()=>{
 render(<ImageTesting/>);
    const title=screen.getByTitle("img");
    expect(title).toBeInTheDocument();
    })