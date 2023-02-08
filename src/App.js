import React from "react";
import { Box, Checkbox, Flex, Heading } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Flex>
        <h1>Hello World!</h1>
        <Box mb={5} _hover={{ backgroundColor: "red" }}>
          <Heading>Nekoj si heading</Heading>
        </Box>
        <Checkbox defaultChecked>Checkbox</Checkbox>
      </Flex>
    </div>
  );
}

export default App;
