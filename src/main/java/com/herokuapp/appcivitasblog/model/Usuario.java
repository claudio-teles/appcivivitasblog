/**
 * 
 */
package com.herokuapp.appcivitasblog.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

/**
 * @author CLAUDIO
 *
 */
@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8730457014674771863L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Size(max = 10)
	private String nome;
	@Size(max = 10)
	private String senha;
	
	public Usuario() {
		super();
	}

	public Usuario(@NotEmpty String nome, @NotEmpty String senha) {
		super();
		this.nome = nome;
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

}
