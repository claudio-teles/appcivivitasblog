/**
 * 
 */
package com.herokuapp.appcivitasblog.repository;

import org.springframework.data.repository.CrudRepository;
import java.util.Collection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.herokuapp.appcivitasblog.model.Usuario;
/**
 * @author CLAUDIO
 *
 */
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
	
	@Query(value="SELECT \r\n" + 
			"  usuario.nome\r\n" + 
			"FROM \r\n" + 
			"  usuario", nativeQuery=true)
	Collection<String> findAllUsuario(String user);
	
	
	Boolean findByNomeIn(Collection<String> nome);
	
	@Query(value = "SELECT \r\n" + 
			"  usuario.id\r\n" + 
			"FROM \r\n" + 
			"  usuario\r\n" + 
			"WHERE \r\n" + 
			"  usuario.nome = :nome",
			nativeQuery = true)
	Usuario findByNome(@Param("nome") String nome);// Encontrar o id do usuário pelo nome, no banco de dados.

}
