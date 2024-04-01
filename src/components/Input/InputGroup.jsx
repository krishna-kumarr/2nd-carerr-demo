import React from "react";

const InputGroup = ({ className, id, reIcons, onClick }) => {  
  return (
    <span className={className} id={id} onClick={onClick}>
      {reIcons}
    </span>
     
  );
};

export default InputGroup;
