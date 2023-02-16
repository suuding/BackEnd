import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
        style={{
            width: "80%",
            textAlign: "center",
            borderBottom: "1px solid #aaa",
            lineHeight: "0.1em",
            margin: "30px 0 30px",
        }}
    >
        <span 
            style={{ 
                background: "#fafafa", 
                padding: "0 10px",
                color: "#aaa"
            }}
        >
            {text}
        </span>
    </div>
  );
};

export default HorizonLine;
