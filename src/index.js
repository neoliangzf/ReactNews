import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Root from './js/Components/Root.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
