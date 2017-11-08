
import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,

//window.React = React;

let reactContainer = document.getElementById('reactContainer');
render(<App/>, reactContainer);

registerServiceWorker();
