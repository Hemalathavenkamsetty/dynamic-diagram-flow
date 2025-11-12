
```jsx
import React, { useCallback } from 'react'
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer'
import { useFlow } from '../context/FlowContext'


export default function FlowCanvas(){
const { nodes, edges, setSelected, updateNode, addEdge } = useFlow()


const onNodesChange = useCallback((changes) => {
// React Flow v11 uses setNodes directly; here we let the context manage nodes
// For simplicity we ignore incremental changes in this example
}, [])


const onConnect = useCallback((params) => {
// params: { source, target }
addEdge({ source: params.source, target: params.target })
}, [addEdge])


const onNodeDoubleClick = useCallback((event, node) => {
setSelected({ type: 'node', node })
}, [setSelected])


const onEdgeDoubleClick = useCallback((evt, edge) => {
setSelected({ type: 'edge', edge })
}, [setSelected])


return (
<ReactFlow
nodes={nodes}
edges={edges}
fitView
style={{ width: '100%', height: '100%' }}
onConnect={onConnect}
onNodeDoubleClick={onNodeDoubleClick}
onEdgeDoubleClick={onEdgeDoubleClick}
>
<MiniMap />
<Controls />
<Background />
</ReactFlow>
)
}
