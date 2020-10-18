import React, { useState } from "react";

//components
import InputField from "./Components/InputField";
import Feedback from "./Components/Feedback";
import Character from "./Components/Character";

//css files"
import "./App.css";

const App = () => {
  //states
  const [textToProcess, settextToProcess] = useState("");

  //methods
  const handleChangeString = (event) => {
    settextToProcess(event.target.value);
  };

  const handleRemoveChar = (charIndex) => {
    console.log("hello");
    let tempText = textToProcess.split("");
    tempText.splice(charIndex, 1);
    settextToProcess(tempText.join(""));
  };

  //components
  let validationMessage =
    textToProcess.length < 5 ? "Text too short" : "Text long enough"; //validation mesage based on the input string

  let charList = textToProcess.split("").map((char, index) => {
    //rendering each caracters of the input string into character component
    return (
      <Character
        char={char}
        key={index}
        handleRemoveChar={() => handleRemoveChar(index)}
      />
    );
  });

  return (
    <div className="App">
      <InputField
        textToProcess={textToProcess}
        handleChangeString={handleChangeString}
      />
      <Feedback>{validationMessage}</Feedback>
      {charList}
    </div>
  );
};

export default App;
