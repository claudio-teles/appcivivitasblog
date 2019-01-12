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
import './style_cadastro.css';

class Cadastrar extends Component {

  constructor() {
    super();
    this.state = {
      nome: '',
      senha:'',
      statusCadastro: ''
    };
  }



  adicionarUsuarioSenha() {

    axios.post('/api/usuarios', {
      intensao: 'cadastrar',
  	  nome: document.getElementById('float-input').value,
  	  senha: document.getElementById('sen').value
    }).then( respostaDoServidor => {
        console.log(respostaDoServidor)
        this.setState({ statusCadastro: respostaDoServidor['data'] })
    })

  }

  render() {
    return (
      <div className="Cadastro">
        <header className="Cadastro-header">
          <img src="https://www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png" className="Cadastro-logo" alt="logo" />
          <h2 className="cad">Preencha os campos abaixo para se cadastrar no Civitas.</h2>
        </header>
				<body id="cad-tab">

					<div>
						<table>
							<tbody>
									<tr>
										<span className="p-float-label">
											<InputText id="float-input" type="text" size="30" className="input" onBlur={ (e) => this.setState({ nome: e.target.value })} />
											<label htmlFor="float-input">Nome de Usuário</label>
										</span>
									</tr>
									<tr>
										<Password id="sen" promptLabel="Digite sua Senha!" weakLabel="Senha Fraca."
													mediumLabel="Senha Regular." strongLabel="Senha Muito Forte." className="senha"
													tooltip="Digite a Senha." onBlur={ (e) => this.setState({senha: e.target.value })}/>
									</tr>
									<tr>
										<Button id="btn-conf" label="Confirmar" className="p-button-rounded" type="submit" onClick={ this.adicionarUsuarioSenha.bind(this) } />
									</tr>
							</tbody>
						</table>
            <h3 style={ {color: 'white'} }>{this.state.statusCadastro}</h3>
            <Pager className="ir_pag_inicial">
              <Pager.Item previous href="#">
                <Link to="/">&larr; Página Anterior</Link>
              </Pager.Item>
              <Pager.Item previous href="#" id="pager_postar">
                <Link to="/logar">Próxima Página &rarr;</Link>
              </Pager.Item>
            </Pager>
					</div>
				</body>
      </div>
    );
  }
}

export default Cadastrar;
