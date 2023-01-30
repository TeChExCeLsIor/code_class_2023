import React from "react";

const Header = (props) => {
  return <div>{props.renderContent()}</div>;
};

export default Header;
