import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import cors from "cors";
import express from "express";
const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);