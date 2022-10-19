import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirsApp } from './FirsApp';
import { HelloWordApp } from './HelloWordApp';
import "./styles.css";




ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelloWordApp />
        <FirsApp title="Empecemos a programar" subtitle="En React" />
    </React.StrictMode>
)