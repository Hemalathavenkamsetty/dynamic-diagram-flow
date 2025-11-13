import { createContext, useState, useCallback } from 'react';
import { applyNodeChanges, applyEdgeChanges } from 'reactflow';
import sampleData from '../data/sampleMetadata.json';

export const DiagramContext = createContext();

export const DiagramProvider = ({ children }) => {
    const [nodes, setNodes] = useState(sampleData.nodes);
    const [edges, setEdges] = useState(sampleData.edges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    return (
        <DiagramContext.Provider
            value={{ nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange }}
        >
            {children}
        </DiagramContext.Provider>
    );
};
