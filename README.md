# projeto_365-medical_inc

# Programa Saúde em Dia
## _Mantenha informações de sua empresa organizadas com esta API de gerenciamento de dados_



O sistema "Saúde em Dia" permite aos gestores ou funcionários de clínicas de saúde manterem os dados de seus pacientes, médicos e enfermeiros atualizados, facilitando assim o acesso à informações importantes na gestão do seu negócio.
Com ele, você irá manter um banco de dados organizado e atualizado além de ter fácil acesso às informações importantes no seu negócio.
Através destes dados, você poderá traçar metas e emitir relatórios com base em dados reais armazenados no sistema.

## Funcionalidades

- Guarde os dados de seus pacientes, médicos e enfermeiros. 
- Atualize seus dados sempre que quiser.
- Busque informações sobre pacientes, médicos e enfermeiros.
- Contador de consultas por médico e por paciente


## Tecnologias utilizadas

Para o desenvolvimento da API utilizou-se a linguagem JavaScript e o framwork Node.Js. Além disso, fez-se uso das seguintes tecnologias como depências externas:

- Express - Framework com grande quantidade de recursos para se trabalhar em Node.js
- Sequelize - ORM que permite a integração dos modelos criados com bancos de dados relacionais.
- Yup - Construtor de  esquema que permite modelar validações complexas e interdependentes ou transformação de valor.
- dotEnv - Dotenv é um módulo de dependência zero que carrega variáveis de ambiente de um arquivo .env para process.env garantindo a segurança de informações sensíveis de seu projeto.

## Padronização do projeto

Para melhor organização deste projeto, ele foi dividido em pastas permitindo assim, uma maior clareza quanto as diferentes funções criadas para a execução da API.

Pasta raiz contendo os arquivos: 
- index.js: contendo as rotas para acessar as funcionalidades, variável de acesso e importações necessárias para o correto funcionamento.
- .gitignore: arquivo que impede o commit de outros arquivos ou pastas não necessários ou pesados demais, como a pasta node_modules, devendo estes arquivos serem instalados pelo próprio usuário.
- .env: arquivo que contém as variáveis de ambiente e que devem ser sigilosas
- .env.example: arquivo que contém os exemplos de variáveis de ambiente utilizadas que devem ser reatribuídas pelos usuários - package.json: arquivo que contém dados do projeto como nome, versão, scripts e dependências.
- package-lock.json: arquivo que registra as versões das depências utilizadas impedindo que alguma outra versão seja utilizada caso um usuário faça uso do código.
- node_modules: pasta criada pelo Express contendo bibliotecas para o correto funcionamento da aplicação
- src: pasta contendo outras pastas e arquivos de acordo com a função de cada código.

Pasta src:




   FAZER O MAPA COM A ESTRUTURA DAS PASTAS


INSERIR UMA MODELAGEM DO BANCO DE DADOS COM AS RELAÇÕES ENTRE AS ENTIDADES 