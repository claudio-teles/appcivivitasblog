import React, { Component } from 'react';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {Editor} from 'primereact/editor';
import './style_postar.css';

class Postar extends Component {

  constructor() {
      super();
      this.state = {
          conteudo : 'Digite aqui!',
          intensao: 'postar',
          postagem: '',
          statusPost: '',
          valorRetornado: ''
        };
  }

  dadosPostagem() {
    this.setState({intensao: 'postar'});
    axios.post("/api/posts", {
      conteudo: document.getElementById('editor').value,
      intensao: 'postar',
      postagem: this.state.conteudo
    }).then( resposta => {
      this.setState({ statusPost: resposta['data'] })
      console.log(resposta['data'])
    })
  }

  renderHeader() {
    return (
      <span className="ql-formats">
          <button className="ql-bold" aria-label="Bold"></button>
          <button className="ql-italic" aria-label="Italic"></button>
          <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  }

  render() {
    return (
      <div className="Postar">
        <header className="Postar-header">
          <h2 className="log">Faça suas postagens no campo de texto abaixo.</h2>
        </header>
        <div className="content-section implementation">
          <Editor id="editor" className="edt-postar" value={this.state.conteudo} onTextChange={(e)=>this.setState({
            conteudo:e.textValue,
            postagem: e.textValue,
            statusPost: ''
          })}/>
          <Button id="limpar" label="Limpar" icon="pi pi-times" onClick={() => this.setState({conteudo:''})}/>
        </div>
        <div id="separador">
          <table id="tbt-postar">
            <tbody>
              <tr>
                <Button id="postado" label="Postar" type="submit" className="p-button-rounded"
                  onClick={this.dadosPostagem.bind(this)}/>
              </tr>
              <tr>
              <br />
                <h5 id="edicao">{this.state.statusPost}</h5>
              </tr>
            </tbody>
          </table>
              <Link to="/ver_postagem"><Button id="btn-vP" label="VerPostagens" className="p-button-danger" /></Link>
        </div>
      </div>
    );
  }
}

export default Postar;
