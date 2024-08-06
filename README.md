- Integration GPT é uma aplicação de chat que utiliza a API OpenAI para interagir com um modelo de linguagem avançado. Esta aplicação permite que os usuários enviem mensagens e recebam respostas geradas pelo modelo, criando uma experiência interativa e dinâmica.

Funcionalidades:
- Interface de Usuário Simples: Layout amigável com área de chat, histórico de conversas e indicação de status.
- Integração com OpenAI: Envia perguntas ao modelo text-davinci-003 e recebe respostas inteligentes.
- Histórico de Conversas: Armazena e exibe o histórico de mensagens trocadas.
- Estrutura do Projeto
- index.html: Contém a estrutura HTML da interface do chat.
- main.js: Gerencia a lógica de envio de mensagens e recepção de respostas da API OpenAI.
- style.css: Define os estilos e layout da aplicação.

  
Como Usar:

1. Clonar o Repositório:

Copiar código
git clone https://github.com/cardoso-m/integration_gpt.git
cd integration_gpt

2. Abrir index.html: Abra o arquivo index.html em um navegador para iniciar a aplicação.

3. Configurar a API Key:
- Substitua a variável apiKey em main.js com sua chave de API da OpenAI.

4. Enviar Mensagens: Digite sua mensagem no campo de texto e clique em "Enviar". A resposta do modelo será exibida abaixo.

Exemplos de Uso
- Consultas Gerais: Faça perguntas sobre diversos tópicos e receba respostas contextuais.
- Assistência Técnica: Obtenha ajuda sobre problemas técnicos ou conselhos sobre desenvolvimento.
- Estrutura do Código
- index.html


Estrutura HTML básica contendo:
- style.css
- Um cabeçalho com foto e nome do usuário.
- Uma área para exibir o histórico de mensagens.
- Um rodapé com campo de entrada para mensagens e botão de envio.
- main.js

Contém as seguintes funções principais:
- EnviarMensagem: Envia a mensagem do usuário para a API OpenAI e recebe a resposta.
- MostrarHistorico: Exibe a mensagem do usuário e a resposta do modelo no histórico de conversas.
- Tecnologias Utilizadas
- HTML: Estrutura da página.
- CSS: Estilização da interface.
- JavaScript: Lógica do cliente, incluindo interação com a API OpenAI.

Contribuições:
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Abra uma issue para discussão ou envie um pull request.
