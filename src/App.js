import React from "react";

import Layout from "./components/Layout";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Container>
        <Layout>
          <h1>Hello</h1>
          <p>Content</p>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
