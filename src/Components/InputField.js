import React from "react";

export default function InputField(props) {
  const { textToProcess, handleChangeString } = props;
  const inputStyle = {
    height: "30px",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <input
      value={textToProcess}
      onChange={handleChangeString}
      style={inputStyle}
    />
  );
}
