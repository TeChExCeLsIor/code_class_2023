import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header renderContent={() => <h1>Hello Header</h1>} />
      {props.children}
      <Footer
        niza={[<h1>prv</h1>, <h1>vtor</h1>, <h1>tret</h1>]}
        obj={{ ime: "Mirsat" }}
      />
    </div>
  );
};

export default Layout;
