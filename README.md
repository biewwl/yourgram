<p align="center">
  <img
    src="https://i.ibb.co/0Q1WRG1/CC-20220615-111945.png"
    height="70"
    width="70"
  />
</p>

<h1 align="center">Yourgram</h1>
<p>Este projeto é a parte Frontend de um site social, de fácil integração com o Backend. Feito completamente com **React.js** e **Javascript**, utilizando **Redux** como gerenciador de estado.</p>

------------

<h3>Destaques sobre o projeto:</h3>
<h4>🚫 Sistema de rotas restritivo</h4>
<p>Este projeto foi desenvolvido com um sistema de rotas que variam de acordo com o estado de login. Em outras palavras, há páginas que só podem ser visualizadas se existir um usuário logado, caso contrário, o usuário será redirecionado para o login.
A página de perfil de um usuário é acessível sem login, porém as interações não ficam disponíveis e o Header é subistituído por uma barra com botão de login.</p>

------------

<h4>🧐 Validação de campos (Login, Registro)</h4>
<p>Um usuário só poderá fazer o *submit* dos dados de login ou registro caso atenda as regras de login, sendo essa verificação feita utilizando a ferramenta JOI. Para saber se um login ou registro é valido, as seguintes regras são verificadas:</p>

- Nickname possui de **3** a **15** caracteres;
- Nickname não possúi caracteres especiais, válido apenas "**.**" e  "**_**";
- Nickname é **obrigatório**;


- Name possui de **3** a **15** caracteres;
- Name é **obrigatório**;


- Email segue o padrão **email@email.com**;
- Email  possui de **3** a **15** caracteres;
- Email  é **obrigatório**;


- Password  possui mais de **6** caracteres;
- Password  é **obrigatório**;

------------

<h4>🖌️ Design Responsivo</h4>
<p>Todo o *CSS* aplicado nas páginas do site tem um sistema responsivo para diferentes tamanhos de tela. Feito com *media queries*, a estilização foi feita inteira manualmente, sem a adição de bibliotecas como *Bootstrap* ou *TailwindCSS*.</p>

------------

<h4>🎲 Integração com Banco de Dados</h4>
<p>Para desenvolver este site, eu pensei em construir uma *API* que fornecesse todo o Backend. Porém para fazer o deploy custaria, além de que com vários usuários criando contas para testar, isso realmente acabaria saindo de um projeto e se tornaria um site social!
Então eu tive uma ideia: Contruir um banco de dados com *Javascript*. Melhor ainda: Eu construí um banco **RELACIONAL** com o *Javascript*.

**Como funciona?**
<p>
Funciona da seguinte maneira: dentro do diretório ***/src/mocks*** existem arquivos que simulam tabelas. Na teoria temos tabelas para: Comentários, Seguidores, Curtidas, Notificações, Posts, Stories Trending e Usuários. Cada tabela contém apenas as informações a respeito de si mesma. Porém, existem funções em cada uma desses arquivos que juntam essas informações como em um relacionamento. Para exemplificar: A "tabela" de curtidas, possui informações como: Quem curtiu / Quem recebeu a curtida / Que post recebeu a curtida / Data da curtida. Nesse arquivo com a "tabela" existe uma função que puxa todas as informações PÚBLICAS do usuário que curtiu o post, diretamente da tabela de usuários! Essa mesma função puxa essas mesmas informações a respeito do usuário que recebeu a curtida! Além disso ela puxa todas as informações do post em questão (Data, Legenda...).

Contas que são criadas localmente, são salvas no localStorage com ajuda de uma biblioteca que eu mesmo desenvolvi: *manager-local-storage*. **PERIGO: SOMENTE ESSAS CONTAS DEVEM SER EDITADAS!!!**

Por fim, esse modelo que eu desenvolvi é tão bem construído que caso você entre em uma conta e curta ou comente uma publicação e depois entre na conta do usuário que recebeu a curtida ou comentário, aparecerá nas notificações a ação realizada. E melhor, as notificações que aparecem estão em ordem cronológica, além de claro, não aparecer notificação caso você mesmo curta ou comente sua própria publicação.</p>

------------

<h4>📦 Reutilização de Componentes</h4>
<p>React.js é maravilhoso, e um dos motivos é por causa da componentização, e isso é visto em toda a aplicação. O Header é o exemplo mais visível disso, porém, eu decidi reaproveitar o componente de post utilizado na tela inicial. Na tela de perfil de um usuário é possível alterar a visualização dos posts *grid/post*.
A página de Login é a mesma utilizada para Registro, com apenas um estado ela faz as alterações necessárias!</p>

------------

### Lista de Bibliotecas utilizadas:
- React.js
- Redux.js
- cloudinary
- emoji-picker-react
- manager-local-storage
- @iconify/react
- react-router-dom
- react-router-hash-link