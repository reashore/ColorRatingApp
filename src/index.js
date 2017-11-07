
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarRating from './App';
import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById('root');
ReactDOM.render(
    <div>
        <h1>Color Rating App</h1>
        <StarRating />
    </div>,
    root
);

registerServiceWorker();
