import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect, useParams } from 'react-router-dom';
import './index.scss';
import App from './components/App.jsx';

//ws://10.217.153.98:8082/
//wss://echo.websocket.org/
const ws = new WebSocket('wss://echo.websocket.org/');
ws.onopen = () => console.log('Opened');
ws.onclose = () => console.log('Closed');
ws.onerror = e => console.log(e.data);
// ws.onmessage = e => setServerMessages(prev => [...new Set([...prev, e.data])]); Должна быть в компоненте.

const Wrapper = () => {

    return(
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/conversations/inconceivabletaurus" />} />
                {/* <Route path="/conversations/:id" render={() => <Redirect to="/conversations/:id" />} /> */}
                <Route path="/conversations/:id">
                    <App />
                </Route>
            </Switch>
    )

}
ReactDOM.render(
    <HashRouter>
        <Wrapper />
    </HashRouter>,
    document.getElementById('root')
);