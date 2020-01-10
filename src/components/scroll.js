import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        border: "1px solid black",
        overflowY: "scroll",
        padding: "10px",
        height: "600px"
      }}
    >
      {props.children};
    </div>
  );
};

export default Scroll;
