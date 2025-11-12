
import React from 'react';
import Diagram from './components/Diagram';
import Sidebar from './components/Sidebar';
import { DiagramProvider } from './context/DiagramContext';
import './styles.css';

const App = () => (
  <DiagramProvider>
    <div className="app-container">
      <div className="diagram-container"><Diagram /></div>
      <Sidebar />
    </div>
  </DiagramProvider>
);

export default App;




