
```jsx
import React, { useState } from 'react'
import Modal from 'react-modal'
import { useFlow } from '../context/FlowContext'


Modal.setAppElement('#root')


export default function Sidebar(){
const { nodes, edges, addNode, updateNode, removeNode, addEdge, updateEdge, removeEdge, importMetadata, exportMetadata, selected, setSelected } = useFlow()
const [isOpen, setIsOpen] = useState(false)
const [form, setForm] = useState({})


const openForNewNode = () => { setForm({ mode: 'node', label: '', x: 100, y: 100 }); setIsOpen(true) }
const openForNewEdge = () => { setForm({ mode: 'edge', source: '', target: '', label: '' }); setIsOpen(true) }
const openForEdit = (item) => { setForm(item); setIsOpen(true) }


const save = () => {
if(form.mode === 'node'){
if(form.id) updateNode(form.id, { data: { label: form.label }, position: { x: form.x, y: form.y } })
else addNode({ label: form.label, position: { x: form.x, y: form.y } })
} else if(form.mode === 'edge'){
if(form.id) updateEdge(form.id, { label: form.label, source: form.source, target: form.target })
else addEdge({ source: form.source, target: form.target, label: form.label })
}
setIsOpen(false)
}


const doExport = () => {
const data = exportMetadata()
const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'diagram.json'
a.click()
URL.revokeObjectURL(url)
}


const doImport = (e) => {
const file = e.target.files[0]
if(!file) return
const reader = new FileReader()
reader.onload = (ev) => {
try{
const json = JSON.parse(ev.target.result)
importMetadata(json)
}catch(err){ alert('Invalid JSON') }
}
reader.readAsText(file)
}


return (
<div>
<h2>Diagram Controls</h2>
<button onClick={openForNewNode}>+ Add Node</button>
<button onClick={openForNewEdge}>+ Add Edge</button>
<div style={{marginTop:10}}>
<h3>Nodes</h3>
{nodes.map(n => (
<div key={n.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<span>{n.data.label} ({n.id})</span>
}
