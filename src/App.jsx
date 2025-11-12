
```jsx
import React from 'react'
import FlowProvider from './context/FlowContext'
import FlowCanvas from './components/FlowCanvas'
import Sidebar from './components/Sidebar'


export default function App(){
return (
<FlowProvider>
<div style={{display:'grid', gridTemplateColumns: '300px 1fr', height: '100vh'}}>
<aside style={{borderRight: '1px solid #e6e6e6', padding: 12}}>
<Sidebar />
</aside>
<main style={{position:'relative'}}>
<FlowCanvas />
</main>
</div>
</FlowProvider>
)
} 
