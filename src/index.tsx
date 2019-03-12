import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
Modal.setAppElement(root);
ReactDOM.render(<App />, root);
registerServiceWorker();
