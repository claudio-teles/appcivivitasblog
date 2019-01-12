# appcivivitasblog

Mude o nome de usuário e a senha do seu banco de dados mysql

Esse projeto foi compilado para um usuário e senha específicos, você precisará mudar o nome do usuário e senha, para ficar 
igual ao que você tem no seu MySQL, depois, vá até o diretório raiz do projeto, appcivitasblog, onde fica os arquivos do maven e 
digite o seguinte comando:
mvn package
Esse comando irá reempacotar o seu projeto para as suas configuração do seu banco de dados.

Depois de reempacotar o projeto com o comando mostrado acima, faça os passo seguintes:

Vá até o diretório target e execute o seguinte comando:
java -jar appcivitasblog-0.0.1.jar

Esse comando irá iniciar o Tomcat e React.js no Node.js na sequinte url: http://localhost:8080, abra o seu navegador nessa url.

É necessário fazer o cadastro para postar no blog, mas apenas para ver o que já foi postado não.
Uma vez feito o cadastro, das próximas vezes que for usar o blog, apenas faça o login, para postar.
