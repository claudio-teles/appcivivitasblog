(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,a,t){},152:function(e,a,t){},164:function(e,a,t){},167:function(e,a,t){},173:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(43),r=t.n(s),l=(t(73),t(175)),c=t(14),i=t.n(c),m=t(7),u=t(8),d=t(11),p=t(9),h=t(12),E=(t(18),t(19),t(20),t(64)),g=t.n(E),b=t(174),v=t(10),f=t.n(v),N=t(6),P=t.n(N),y=(t(97),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={mensagem:""},e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"mensagemDeBoasVindas",value:function(){var e=this;f.a.get("/api").then(function(a){e.setState({mensagem:a.data})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App",onLoad:this.mensagemDeBoasVindas.bind(this)},o.a.createElement("header",{className:"App-header"},o.a.createElement("h3",{id:"index"},this.state.mensagem)),o.a.createElement("div",{className:"corpo"},o.a.createElement("img",{src:g.a,alt:"imagem de plano de fundo"})),o.a.createElement("footer",{className:"roda_pe"},o.a.createElement("a",{href:"https://br.freepik.com/fotos-gratis/diversos-amigos-estudantes-atiram_3276267.htm"},"Designed by Rawpixel.com"),o.a.createElement(P.a,{className:"ir_pag_cadastro"},o.a.createElement(P.a.Item,{previous:!0,href:"#"},o.a.createElement(b.a,{to:"/cadastrar"},"Pr\xf3xima P\xe1gina \u2192")))))}}]),a}(n.Component)),j=t(5),C=t(30),x=t(31),w=(t(150),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={nome:"",senha:"",statusCadastro:""},e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"adicionarUsuarioSenha",value:function(){var e=this;f.a.post("/api/usuarios",{intensao:"cadastrar",nome:document.getElementById("float-input").value,senha:document.getElementById("sen").value}).then(function(a){console.log(a),e.setState({statusCadastro:a.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Cadastro"},o.a.createElement("header",{className:"Cadastro-header"},o.a.createElement("img",{src:"https://www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png",className:"Cadastro-logo",alt:"logo"}),o.a.createElement("h2",{className:"cad"},"Preencha os campos abaixo para se cadastrar no Civitas.")),o.a.createElement("body",{id:"cad-tab"},o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("span",{className:"p-float-label"},o.a.createElement(C.InputText,{id:"float-input",type:"text",size:"30",className:"input",onBlur:function(a){return e.setState({nome:a.target.value})}}),o.a.createElement("label",{htmlFor:"float-input"},"Nome de Usu\xe1rio"))),o.a.createElement("tr",null,o.a.createElement(x.Password,{id:"sen",promptLabel:"Digite sua Senha!",weakLabel:"Senha Fraca.",mediumLabel:"Senha Regular.",strongLabel:"Senha Muito Forte.",className:"senha",tooltip:"Digite a Senha.",onBlur:function(a){return e.setState({senha:a.target.value})}})),o.a.createElement("tr",null,o.a.createElement(j.Button,{id:"btn-conf",label:"Confirmar",className:"p-button-rounded",type:"submit",onClick:this.adicionarUsuarioSenha.bind(this)})))),o.a.createElement("h3",{style:{color:"white"}},this.state.statusCadastro),o.a.createElement(P.a,{className:"ir_pag_inicial"},o.a.createElement(P.a.Item,{previous:!0,href:"#"},o.a.createElement(b.a,{to:"/"},"\u2190 P\xe1gina Anterior")),o.a.createElement(P.a.Item,{previous:!0,href:"#",id:"pager_postar"},o.a.createElement(b.a,{to:"/logar"},"Pr\xf3xima P\xe1gina \u2192"))))))}}]),a}(n.Component)),O=(t(152),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={intensao:"logar",nome:"",senha:"",statusCadastro:""},e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"verificarUsuarioSenha",value:function(){var e=this;f.a.post("/api/usuarios",{intensao:"logar",nome:document.getElementById("float-input-2").value,senha:document.getElementById("sen-2").value}).then(function(a){console.log(a),e.setState({statusCadastro:a.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Login"},o.a.createElement("header",{className:"Login-header"},o.a.createElement("img",{src:"https://www.primefaces.org/wp-content/uploads/2018/05/primereact-logo.png",className:"Login-logo",alt:"logo"}),o.a.createElement("h2",{className:"log"},"Preencha os campos abaixo para fazer o login no Civitas.")),o.a.createElement("body",{className:"corpo-login"},o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("span",null,o.a.createElement(C.InputText,{id:"float-input-2",type:"text",size:"30",tooltip:"Nome de usu\xe1rio",onBlur:function(a){return e.setState({nome:a.target.value})}}))),o.a.createElement("tr",null,o.a.createElement(x.Password,{id:"sen-2",promptLabel:"Digite sua Senha!",tooltip:"Digite a Senha.",onBlur:function(a){return e.setState({senha:a.target.value})}})),o.a.createElement("tr",null,o.a.createElement(b.a,{to:"/postar"},o.a.createElement(j.Button,{id:"btn-confirmar",label:"Confirmar",className:"p-button-rounded",type:"submit",onClick:this.verificarUsuarioSenha.bind(this)}))))),o.a.createElement(P.a,{className:"ir_pag_cad"},o.a.createElement(P.a.Item,{previous:!0,href:"#"},o.a.createElement(b.a,{to:"/cadastrar"},"\u2190 P\xe1gina Anterior")),o.a.createElement(P.a.Item,{previous:!0,href:"#",id:"pager_postar"},o.a.createElement(b.a,{to:"/postar"},"Pr\xf3xima P\xe1gina \u2192"))))))}}]),a}(n.Component)),k=t(65),S=(t(164),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={conteudo:"Digite aqui!",intensao:"postar",postagem:"",statusPost:"",valorRetornado:""},e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"dadosPostagem",value:function(){var e=this;this.setState({intensao:"postar"}),f.a.post("/api/posts",{conteudo:document.getElementById("editor").value,intensao:"postar",postagem:this.state.conteudo}).then(function(a){e.setState({statusPost:a.data}),console.log(a.data)})}},{key:"renderHeader",value:function(){return o.a.createElement("span",{className:"ql-formats"},o.a.createElement("button",{className:"ql-bold","aria-label":"Bold"}),o.a.createElement("button",{className:"ql-italic","aria-label":"Italic"}),o.a.createElement("button",{className:"ql-underline","aria-label":"Underline"}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Postar"},o.a.createElement("header",{className:"Postar-header"},o.a.createElement("h2",{className:"log"},"Fa\xe7a suas postagens no campo de texto abaixo.")),o.a.createElement("div",{className:"content-section implementation"},o.a.createElement(k.Editor,{id:"editor",className:"edt-postar",value:this.state.conteudo,onTextChange:function(a){return e.setState({conteudo:a.textValue,postagem:a.textValue,statusPost:""})}}),o.a.createElement(j.Button,{id:"limpar",label:"Limpar",icon:"pi pi-times",onClick:function(){return e.setState({conteudo:""})}})),o.a.createElement("div",{id:"separador"},o.a.createElement("table",{id:"tbt-postar"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement(j.Button,{id:"postado",label:"Postar",type:"submit",className:"p-button-rounded",onClick:this.dadosPostagem.bind(this)})),o.a.createElement("tr",null,o.a.createElement("br",null),o.a.createElement("h5",{id:"edicao"},this.state.statusPost)))),o.a.createElement(b.a,{to:"/ver_postagem"},o.a.createElement(j.Button,{id:"btn-vP",label:"VerPostagens",className:"p-button-danger"}))))}}]),a}(n.Component)),B=t(66),_=t(67),I=t.n(_),D=(t(167),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={todasAsPostagensDosUsuarios:"",intensao:""},e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"verTodosPosts",value:function(){var e=this;f.a.post("/api/posts",{intensao:"verTodosPosts"}).then(function(a){console.log(a.data),e.setState({todasAsPostagensDosUsuarios:a.data})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"VerPostagem",onLoad:this.verTodosPosts.bind(this)},o.a.createElement("header",{className:"V_P-header"},o.a.createElement("h2",{className:"log"},"Confira as postagens abaixo.")),o.a.createElement(b.a,{to:"/postar"},o.a.createElement(j.Button,{id:"btn-voltar-postar",label:"Voltar Para P\xe1gina Postar",className:"p-button-danger"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(j.Button,{id:"btn_ver_postagem",label:"Ver postagens",icon:"pi pi-check",onClick:this.verTodosPosts.bind(this),tooltip:"Clique aqui e veja as postagens abaixo.",className:"p-button-success"}),o.a.createElement("div",{className:"div_posts"},o.a.createElement(B.Card,{header:o.a.createElement("img",{id:"imagem_blog",alt:"Card",src:I.a})},o.a.createElement("p",null,this.state.todasAsPostagensDosUsuarios))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{path:"/",exact:!0,component:y}),o.a.createElement(i.a,{path:"/cadastrar",exact:!0,component:w}),o.a.createElement(i.a,{path:"/logar",exact:!0,component:O}),o.a.createElement(i.a,{path:"/postar",exact:!0,component:S}),o.a.createElement(i.a,{path:"/ver_postagem",exact:!0,component:D}),o.a.createElement(i.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,a,t){e.exports=t.p+"static/media/circulo_amigos.c346b4d4.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/blog.382084c3.jpg"},68:function(e,a,t){e.exports=t(173)},73:function(e,a,t){},97:function(e,a,t){}},[[68,2,1]]]);
//# sourceMappingURL=main.2b8d10d8.chunk.js.map