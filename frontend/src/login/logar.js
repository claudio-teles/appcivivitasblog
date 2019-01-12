import React, { Component } from 'react';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import Pager from 'react-bootstrap/lib/Pager';
import axios from 'axios';
import {Password} from 'primereact/password';
import './style_logar.css';

class Logar extends Component {

  constructor() {
    super();
      this.state = {
      intensao: "logar",
      nome: '',
      senha:'',
      statusCadastro: ''
    };
  }

  verificarUsuarioSenha() {
      axios.post('/api/usuarios', {
        intensao: 'logar',
        nome: document.getElementById('float-input-2').value,
        senha: document.getElementById('sen-2').value
    }).then( respostaDoServidor => {
      console.log(respostaDoServidor)
      this.setState({ statusCadastro: respostaDoServidor['data'] })
    })
  }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <img src="https://www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png" className="Login-logo" alt="logo" />
          <h2 className="log">Preencha os campos abaixo para fazer o login no Civitas.</h2>
        </header>
        <body className="corpo-login">
          <div>
            <table>
              <tbody>
                <tr>
                  <span>
                    <InputText id="float-input-2" type="text" size="30" tooltip="Nome de usuário" onBlur={ (e) => this.setState({nome: e.target.value })}/>
                  </span>
                </tr>
                <tr>
                  <Password id="sen-2" promptLabel="Digite sua Senha!" tooltip="Digite a Senha." onBlur={ (e) => this.setState({senha: e.target.value })} />
                </tr>
                <tr>
                  <Link to="/postar"><Button id="btn-confirmar" label="Confirmar" className="p-button-rounded" type="submit" onClick={this.verificarUsuarioSenha.bind(this)} /></Link>
                </tr>
              </tbody>
            </table>
            <Pager className="ir_pag_cad">
              <Pager.Item previous href="#">
                <Link to="/cadastrar">&larr; Página Anterior</Link>
              </Pager.Item>
              <Pager.Item previous href="#" id="pager_postar">
                <Link to="/postar">Próxima Página &rarr;</Link>
              </Pager.Item>
            </Pager>
          </div>
        </body>
      </div>
    );
  }
}

export default Logar;
