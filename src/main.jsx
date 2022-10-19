import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirsApp } from './FirsApp';
import { HelloWordApp } from './HelloWordApp';




ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelloWordApp />
        <FirsApp />
    </React.StrictMode>
)