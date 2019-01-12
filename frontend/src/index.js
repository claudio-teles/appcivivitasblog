import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from './App';
import cadastrar from './cadastro/cadastrar';
import logar from './login/logar';
import postar from './postar/postar';
import verPostagem from './ver_postagem/verPostagem';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <Router>
      <div>
        <Route path="/" exact component={App} />
          <Route path="/cadastrar" exact component={cadastrar}></Route>
          <Route path="/logar" exact component={logar}></Route>
          <Route path="/postar" exact component={postar}></Route>
          <Route path="/ver_postagem" exact component={verPostagem}></Route>
        <Route/>
      </div>
    </Router>
  )
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
