import React from "react";

const Footer = (props) => {
  console.log(props.niza);
  return (
    <div>
      <h1>Hello Footer</h1>
      {props.niza}
    </div>
  );
};

export default Footer;
