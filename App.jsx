import React from 'react';
import { DiagramProvider } from './context/DiagramContext';
import FlowCanvas from './components/FlowCanvas';
import Sidebar from './components/Sidebar';

export default function App() {
    return (
        <DiagramProvider>
            <div className="flex h-screen">
                <div className="w-1/4 border-r p-4 bg-gray-50">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <FlowCanvas />
                </div>
            </div>
        </DiagramProvider>
    );
}
