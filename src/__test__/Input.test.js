import {fireEvent, render,screen} from '@testing-library/react';
import InputTesting from '../components/InputTesting';

test("testing input box",()=>{

    render(<InputTesting/>);
    const checkInput=screen.getByRole("textbox");
    let checkInputPlaceholder=screen.getByPlaceholderText("Enter Username");
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name","username");
    expect(checkInput).toHaveAttribute("id","userid");
    expect(checkInput).toHaveAttribute("type","text");
    })
  

  test("on change event testing",()=>{

    render(<InputTesting/>);
    const checkInput=screen.getByRole("textbox");
    fireEvent.change(checkInput,{target:{value:'aa'}})
    expect(checkInput.value).toBe('aa');

  })