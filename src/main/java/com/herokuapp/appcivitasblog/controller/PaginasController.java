/**
 *
 */
package com.herokuapp.appcivitasblog.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.herokuapp.appcivitasblog.model.Post;
import com.herokuapp.appcivitasblog.model.Usuario;
import com.herokuapp.appcivitasblog.repository.PostRepository;
import com.herokuapp.appcivitasblog.repository.UsuarioRepository;


/**
 * @author CLAUDIO
 *
 */
@RestController
public class PaginasController {

	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private PostRepository postRepository;
	private Usuario u = new Usuario();
	private Usuario usuarioLogado;
	private String requisicaoInterface;

	/**
	 *
	 */
	public PaginasController() {
	}

	public UsuarioRepository getUsuarioRepository() {
		return usuarioRepository;
	}

	public void setUsuarioRepository(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}

	public PostRepository getPostRepository() {
		return postRepository;
	}

	public void setPostRepository(PostRepository postRepository) {
		this.postRepository = postRepository;
	}

	public Usuario getUsuarioLogado() {
		return usuarioLogado;
	}

	public void setUsuarioLogado(Usuario usuarioLogado) {
		this.usuarioLogado = usuarioLogado;
	}

	@RequestMapping(value = "/api")
	public String index() {
		return "Bem vindo ao Civitas, um micro blog feito com React e Spring Boot com a linguagem Java.";
	}

	@Transactional
	@RequestMapping(value = "/api/usuarios", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public String acoesUsuario(@RequestBody(required = true) Map<String, String> resposta) {

		Collection<String> listaTodosCadastrados = usuarioRepository.findAllUsuario(resposta.get("nome"));
		Boolean cadastradoEspecifico = listaTodosCadastrados.contains(resposta.get("nome"));

		Usuario usuarioCadastrado = new Usuario();

		requisicaoInterface = resposta.get("intensao");// Pegue a chave cadastro na carga útil, ou seja, request payload.

		if (cadastradoEspecifico != true) {

			if (requisicaoInterface.equals("cadastrar")) {

				usuarioCadastrado.setNome(resposta.get("nome"));
				usuarioCadastrado.setSenha(resposta.get("senha"));
				usuarioRepository.save(usuarioCadastrado);
				u = usuarioCadastrado;
				return "Usuário cadastrado com sucesso, vá para a próxima página.";

			}
		} else if (requisicaoInterface.equals("cadastrar")) {
			return "O usuário informado já existe, escolha um novo nome de usuário!";
		}

		if (requisicaoInterface.equals("logar")) {

			Collection<String> lista = usuarioRepository.findAllUsuario(resposta.get("nome"));
			Boolean usuarioEspecifico = lista.contains(resposta.get("nome"));

			if (usuarioEspecifico) {
				setUsuarioLogado(u);
			}
			return getUsuarioLogado().toString();
		}
		return getUsuarioLogado().toString();
	}

	@RequestMapping(value = "/api/posts", consumes = MediaType.ALL_VALUE)
	public String acoesPostagens(@RequestBody(required = true) Map<String, String> resposta) {

		requisicaoInterface = resposta.get("intensao");
		System.out.println("intensão: " + requisicaoInterface);

		if (requisicaoInterface.equals("postar")) {// intensão: postar.

			Post postagem = new Post();
			postagem.setPostagem(resposta.get("postagem"));
			System.out.println("Postagem: " + resposta);
			postagem.setId( Math.abs( new Random().nextLong() ) );
			postagem.setChave_Estrangeira_Usuario(getUsuarioLogado());
			postRepository.save(postagem);
			return "Postagem feita com sucesso.";

		}  else if (requisicaoInterface.equals("verTodosPosts")) {
			ArrayList<String> tudoDaTabelaPost = (ArrayList<String>) postRepository.findAllPostagem();// Mostra todo o conteúdo da tabela Post.
			String todosPosts = "Aseguir todas as postagens de todos os usuários: " + " \r\n" + " \r\n";
			for (Iterator<String> iterator = tudoDaTabelaPost.iterator(); iterator.hasNext();) {
				todosPosts += (String) iterator.next() + " \r\n";
			}
			System.out.println("Todos os Posts: " + todosPosts);
			return todosPosts;

		} else {
			return null;
		}
	}

}
