import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let root = null
render({});


function render(props) {
    const { container } = props;
    if(container){
        root  = ReactDOM.createRoot(container.querySelector('#root'));
    }else{
        root = ReactDOM.createRoot(document.getElementById('root'));
    }
    root.render(<App/>)

}

