import React, { Component } from 'react';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import circulo_amigos from './circulo_amigos.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pager from 'react-bootstrap/lib/Pager';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {mensagem: ''};
  }

  mensagemDeBoasVindas() {
    axios.get("/api").then( resposta => {
      this.setState({ mensagem: resposta['data'] });
    })
  }

  render() {
    return (
      <div className="App" onLoad={this.mensagemDeBoasVindas.bind(this)}>
        <header className="App-header">
          <h3 id="index">{this.state.mensagem}</h3>
        </header>
        <div className="corpo">
          <img src={circulo_amigos} alt="imagem de plano de fundo"></img>
        </div>
        <footer className="roda_pe">
          <a href='https://br.freepik.com/fotos-gratis/diversos-amigos-estudantes-atiram_3276267.htm'>Designed by Rawpixel.com</a>
          <Pager className="ir_pag_cadastro">
            <Pager.Item previous href="#">
              <Link to="/cadastrar">Próxima Página &rarr;</Link>
            </Pager.Item>
          </Pager>
        </footer>
      </div>
    );
  }
}

export default App;
