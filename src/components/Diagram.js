import React, { useContext, useEffect } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { DiagramContext } from '../context/DiagramContext';
import metadata from '../data/sampleMetadata.json';

const Diagram = () => {
  const { nodes, setNodes, edges, setEdges } = useContext(DiagramContext);

  useEffect(() => {
    setNodes(metadata.nodes);
    setEdges(metadata.edges);
  }, [setNodes, setEdges]);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Diagram;


