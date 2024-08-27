import { ChakraProvider } from "@chakra-ui/react";
import { SchemaVisualizer } from "./SchemaVisualizer/SchemaVisualizer";
import { Workflow } from "./Workflow/Workflow";
import "./index.css";

function App() {
  return (
    <ChakraProvider>
      {/* <SchemaVisualizer /> */}
      <Workflow />
    </ChakraProvider>


  );
}

export default App;
