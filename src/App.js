import React from "react";
import TextTesting from "./components/TextTesting";
import InputTesting from "./components/InputTesting";
import ImageTesting from "./components/ImageTesting";
import ButtonTesting from "./components/ButtonTesting";

const App = () => {
  return (
    <>
      <h1>UNIT Testing</h1>
      <br />

      {/* text testing */}
      <TextTesting />

      {/* Input name,id,type,placeholder testing  */}
      <InputTesting />

      {/* image testing  */}
      <ImageTesting />

      {/* button testing  */}
      <ButtonTesting />
    </>
  );
};

export default App;
