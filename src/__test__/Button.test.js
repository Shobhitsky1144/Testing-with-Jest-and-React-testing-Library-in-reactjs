import {fireEvent, render,screen} from '@testing-library/react';
import ButtonTesting from '../components/ButtonTesting';


test("button click event testcase",()=>{
    render(<ButtonTesting/>);
    const btn=screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("updated")).toBeInTheDocument()
  
  })