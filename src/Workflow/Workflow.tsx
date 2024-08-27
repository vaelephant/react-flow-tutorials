
//出处： https://www.youtube.com/watch?v=EvgdirLeYaQ
import ReactFlow, {
    addEdge,
    Background,
    Connection,
    Controls,
    Edge,
    MiniMap,
    Node,
    useEdgesState,
    useNodesState,
  } from "reactflow";
  import "reactflow/dist/style.css";
  import { Box } from "@chakra-ui/react";
  import { useCallback } from "react";
  import { initialEdges, initialNodes } from "./Workflow.constants";
  import PaymentInit from "./PaymentInit";
  import PaymentCountry from "./PaymentCountry";
  import PaymentProvider from "./PaymentProvider";
  import PaymentProviderSelect from "./PaymentProviderSelect";
  import CustomEdge from "./CustomEdge";
  
  const nodeTypes = {
    paymentInit: PaymentInit,
    paymentCountry: PaymentCountry,
    paymentProvider: PaymentProvider,
    paymentProviderSelect: PaymentProviderSelect,
  };
  
  const edgeTypes = {
    customEdge: CustomEdge,
  };
  export const Workflow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback(
      (connection: Connection) => {
        const edge = {
          ...connection,
          animated: true,
          id: `${edges.length} + 1`,
          type: "customEdge",
        };
        setEdges((prevEdges) => addEdge(edge, prevEdges));
      },
      [edges]
    );

    return (
        <Box height={"100vh"} width="100wh" bg="#1C1c1c">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            >
                <Background />  {/* Add a background to the flow */}
                <Controls />  {/* Add controls to the flow */}
            </ReactFlow>
        </Box>
    );
};
