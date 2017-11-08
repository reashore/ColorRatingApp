
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);

registerServiceWorker();
