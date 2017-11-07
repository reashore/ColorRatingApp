
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarRating from './Components/StarRating';
import registerServiceWorker from './registerServiceWorker';

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,


let root = document.getElementById('root');
ReactDOM.render(
    <div>
        <h1>Color Rating App</h1>
        <StarRating />
    </div>,
    root
);

registerServiceWorker();
