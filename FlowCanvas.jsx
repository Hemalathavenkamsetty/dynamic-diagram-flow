import React, { useContext } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { DiagramContext } from '../context/DiagramContext';

export default function FlowCanvas() {
    const { nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange } = useContext(DiagramContext);

    return (
        <div className="w-full h-screen">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <Controls />
                <MiniMap />
                <Background />
            </ReactFlow>
        </div>
    );
}
