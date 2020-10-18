import React from "react";

export default function Character(props) {
  const { char, handleRemoveChar } = props;
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    cursor: "pointer",
  };
  return (
    <div style={style} onClick={handleRemoveChar}>
      {char}
    </div>
  );
}
