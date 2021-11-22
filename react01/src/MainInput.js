import React, {useState} from "react";

const MainInput = ({setName}) => {
return (
    <div>
      <input
      style={{padding: 30}}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default MainInput;
