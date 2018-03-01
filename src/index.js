import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import FA  from 'react-fontawesome';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
