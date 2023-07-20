import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_uvze7R87IHXQM8ujKhWmX9QU7kKSTFY",
  authDomain: "chat-app-ba211.firebaseapp.com",
  databaseURL: "https://chat-app-ba211-default-rtdb.firebaseio.com",
  projectId: "chat-app-ba211",
  storageBucket: "chat-app-ba211.appspot.com",
  messagingSenderId: "149463983223",
  appId: "1:149463983223:web:8e6f2d757eec8d2fa09272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
