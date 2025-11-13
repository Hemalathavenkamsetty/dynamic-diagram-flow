import React, { useContext, useState } from 'react';
import { DiagramContext } from '../context/DiagramContext';

export default function Sidebar() {
    const { nodes, setNodes } = useContext(DiagramContext);
    const [newNode, setNewNode] = useState({ id: '', label: '', x: 0, y: 0 });

    const addNode = () => {
        setNodes([
            ...nodes,
            {
                id: newNode.id,
                data: { label: newNode.label },
                position: { x: Number(newNode.x), y: Number(newNode.y) },
            },
        ]);
        setNewNode({ id: '', label: '', x: 0, y: 0 });
    };

    return (
        <div className="p-4 bg-gray-100 w-64">
            <h3 className="font-bold mb-2">Add Node</h3>
            <input
                placeholder="ID"
                value={newNode.id}
                onChange={(e) => setNewNode({ ...newNode, id: e.target.value })}
            />
            <input
                placeholder="Label"
                value={newNode.label}
                onChange={(e) => setNewNode({ ...newNode, label: e.target.value })}
            />
            <input
                placeholder="X"
                value={newNode.x}
                onChange={(e) => setNewNode({ ...newNode, x: e.target.value })}
            />
            <input
                placeholder="Y"
                value={newNode.y}
                onChange={(e) => setNewNode({ ...newNode, y: e.target.value })}
            />
            <button onClick={addNode}>Add</button>
        </div>
    );
}
