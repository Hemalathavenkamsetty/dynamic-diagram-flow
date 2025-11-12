

```jsx
import React, {createContext, useContext, useState, useCallback} from 'react'
import { v4 as uuid } from 'uuid'


const FlowContext = createContext(null)


export function useFlow(){
return useContext(FlowContext)
}


const sample = {
nodes: [
{ id: '1', type: 'default', data: { label: 'Start' }, position: { x: 50, y: 50 } },
{ id: '2', type: 'default', data: { label: 'Step A' }, position: { x: 250, y: 150 } },
{ id: '3', type: 'default', data: { label: 'Step B' }, position: { x: 250, y: 300 } }
],
edges: [
{ id: 'e1-2', source: '1', target: '2', label: 'to A' },
{ id: 'e1-3', source: '1', target: '3', label: 'to B' }
]
}


}
