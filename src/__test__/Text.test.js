import { render,screen} from '@testing-library/react';
import TextTesting from '../components/TextTesting';


test("test text case",()=>{
  render(<TextTesting/>);
    const text=screen.getByText(/Text testing/i);
    expect(text).toBeInTheDocument();
    })