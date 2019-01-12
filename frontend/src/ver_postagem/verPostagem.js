import React, { Component } from 'react';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import { Link } from 'react-router-dom';
import {Card} from 'primereact/card';
import blog from './blog.jpg';
import axios from 'axios';
import './style_ver_postagem.css';

class VerPostagem extends Component {

  constructor() {
    super();
    this.state={
      todasAsPostagensDosUsuarios: '',
      intensao: ''
    }
  }

  verTodosPosts() {
    axios.post("/api/posts", {
      intensao: "verTodosPosts"
    }).then( respostaDoServidor => {
      console.log(respostaDoServidor['data'])
      this.setState({ todasAsPostagensDosUsuarios: respostaDoServidor['data'] })
    })
  }

  render() {
    return (
      <div className="VerPostagem" onLoad={ this.verTodosPosts.bind(this) }>
        <header className="V_P-header">
          <h2 className="log">Confira as postagens abaixo.</h2>
        </header>
        <Link to="/postar"><Button id="btn-voltar-postar" label="Voltar Para Página Postar" className="p-button-danger"/></Link>
        <br /><br />
        <br /><br />
			<Button id="btn_ver_postagem" label="Ver postagens" icon="pi pi-check" onClick={this.verTodosPosts.bind(this)} tooltip="Clique aqui e veja as postagens abaixo." className="p-button-success" />
        <div className="div_posts">
			 <Card header={<img id="imagem_blog" alt="Card" src={ blog }/>}>
				<p>{this.state.todasAsPostagensDosUsuarios }</p>
			 </Card>
		</div>
      </div>
    );
  }
}

export default VerPostagem;
