import React, { useState, useContext, useEffect } from 'react';
import { DiagramContext } from '../context/DiagramContext';

export default function NodeForm({ selectedNode, onSave }) {
    const { nodes, setNodes } = useContext(DiagramContext);

    // Local state for node form fields
    const [formData, setFormData] = useState({
        id: '',
        label: '',
        x: 0,
        y: 0,
    });

    // Pre-fill form if editing an existing node
    useEffect(() => {
        if (selectedNode) {
            setFormData({
                id: selectedNode.id,
                label: selectedNode.data.label,
                x: selectedNode.position.x,
                y: selectedNode.position.y,
            });
        }
    }, [selectedNode]);

    // Handle text input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedNode) {
            // If editing → update the existing node
            setNodes((prevNodes) =>
                prevNodes.map((node) =>
                    node.id === selectedNode.id
                        ? {
                            ...node,
                            data: { label: formData.label },
                            position: { x: Number(formData.x), y: Number(formData.y) },
                        }
                        : node
                )
            );
        } else {
            // If adding → create a new node
            setNodes((prev) => [
                ...prev,
                {
                    id: formData.id,
                    data: { label: formData.label },
                    position: { x: Number(formData.x), y: Number(formData.y) },
                },
            ]);
        }

        // Reset or close form
        onSave?.();
        setFormData({ id: '', label: '', x: 0, y: 0 });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold mb-2">
                {selectedNode ? 'Edit Node' : 'Add Node'}
            </h3>

            <div className="flex flex-col space-y-2">
                {!selectedNode && (
                    <input
                        type="text"
                        name="id"
                        placeholder="Node ID"
                        value={formData.id}
                        onChange={handleChange}
                        className="p-2 border rounded"
                        required
                    />
                )}
                <input
                    type="text"
                    name="label"
                    placeholder="Label"
                    value={formData.label}
                    onChange={handleChange}
                    className="p-2 border rounded"
                    required
                />
                <input
                    type="number"
                    name="x"
                    placeholder="X Position"
                    value={formData.x}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <input
                    type="number"
                    name="y"
                    placeholder="Y Position"
                    value={formData.y}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    {selectedNode ? 'Update Node' : 'Add Node'}
                </button>
            </div>
        </form>
    );
}

