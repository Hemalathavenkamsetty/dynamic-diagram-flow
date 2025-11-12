
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const DiagramContext = createContext();

export const DiagramProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addNode = (label) => {
    const newNode = {
      id: uuidv4(),
      data: { label },
      position: { x: Math.random() * 400, y: Math.random() * 400 }
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const removeNode = (id) => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
  };

  const addEdge = (source, target) => {
    const newEdge = { id: uuidv4(), source, target, type: 'smoothstep' };
    setEdges((eds) => [...eds, newEdge]);
  };

  const removeEdge = (id) => {
    setEdges((eds) => eds.filter((e) => e.id !== id));
  };

  return (
    <DiagramContext.Provider
      value={{ nodes, setNodes, edges, setEdges, addNode, removeNode, addEdge, removeEdge }}
    >
      {children}
    </DiagramContext.Provider>
  );
};
