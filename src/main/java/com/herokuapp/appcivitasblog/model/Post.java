package com.herokuapp.appcivitasblog.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Post implements Serializable {

	/**
	 *
	 */
	private static final long serialVersionUID = -6394325939380305898L;

	@Id
	private Long id;
	@Column(name = "postagem")
	@NotNull
	@Size(max = 1000)
	private String postagem;
	@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "chave_estrangeira_usuario", referencedColumnName = "id")
	@NotNull
	private Usuario chave_estrangeira_usuario;

	public Post() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getPostagem() {
		return postagem;
	}

	public void setPostagem(String postagem) {
		this.postagem = postagem;
	}

	public Usuario getChave_Estrangeira_Usuario() {
		return chave_estrangeira_usuario;
	}

	public void setChave_Estrangeira_Usuario(Usuario chave_estrangeira_usuario) {
		this.chave_estrangeira_usuario = chave_estrangeira_usuario;
	}

}
