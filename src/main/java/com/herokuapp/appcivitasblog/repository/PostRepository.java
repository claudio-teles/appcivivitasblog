package com.herokuapp.appcivitasblog.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.herokuapp.appcivitasblog.model.Post;

/**
 * @author CLAUDIO
 *
 */
public interface PostRepository extends CrudRepository<Post, Long> {

	@Query(value = "SELECT \r\n" +
			"  post.postagem \r\n" +
			"FROM \r\n" +
			"  post\r\n",
			nativeQuery = true)
	List<String> findAllPostagem();// Encontrar todas as postagens de todos os usuários.


	@Query(value = "SELECT * FROM post", nativeQuery = true)
	ArrayList<Object> findAllPosts();


	@Query(value = "SELECT \r\n" +
			"  post.id\r\n" +
			"FROM \r\n" +
			"  post\r\n" +
			"WHERE \r\n" +
			"  post.postagem = :postagem",
			nativeQuery = true)
	Long findByPostagem(@Param("postagem") String postagens);// Encontrar o id pelo valor da postagem.


	String findDistinctPostagemById(String id);// Encontrar uma postagem específica pelo id.

}
