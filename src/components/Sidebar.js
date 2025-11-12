
import React, { useContext, useState } from 'react';
import { DiagramContext } from '../context/DiagramContext';

const Sidebar = () => {
  const { addNode, removeNode, addEdge, removeEdge, nodes, edges } = useContext(DiagramContext);
  const [nodeLabel, setNodeLabel] = useState('');
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');

  return (
    <div className="sidebar" style={{ padding: 20, borderLeft: '1px solid #ccc' }}>
      <h3>Diagram Controls</h3>
      
      <div>
        <h4>Add Node</h4>
        <input
          type="text"
          placeholder="Node label"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
        />
        <button onClick={() => { addNode(nodeLabel); setNodeLabel(''); }}>Add</button>
      </div>

      <div>
        <h4>Add Edge</h4>
        <input placeholder="Source ID" value={source} onChange={(e) => setSource(e.target.value)} />
        <input placeholder="Target ID" value={target} onChange={(e) => setTarget(e.target.value)} />
        <button onClick={() => { addEdge(source, target); setSource(''); setTarget(''); }}>Add</button>
      </div>

      <div>
        <h4>Current Nodes</h4>
        <ul>{nodes.map((n) => (
          <li key={n.id}>{n.data.label} <button onClick={() => removeNode(n.id)}>❌</button></li>
        ))}</ul>
      </div>

      <div>
        <h4>Current Edges</h4>
        <ul>{edges.map((e) => (
          <li key={e.id}>{e.source} ➜ {e.target} <button onClick={() => removeEdge(e.id)}>❌</button></li>
        ))}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
