import React from "react";
import InfoContent from "./InfoContent";

const Form = () => {
  // dodete props na InfoContent
  return (
    <div>
      <InfoContent />
      <div className="formContainer">
        <div className="input">
          <input placeholder="Enter your name" />
        </div>
        <div className="input">
          <input placeholder="Enter your email address" />
        </div>
        <div className="input">
          <textarea placeholder="Enter a message" />
        </div>
        <div className="input">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
