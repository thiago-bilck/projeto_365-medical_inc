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
- a pasta source('src') contém outras 4 pastas: models, controllers, middlewares e database. A seguir explica-se o que cada uma destas contém.

Pasta models:
- Nesta pasta se encontra os arquivos .js contendo os modelos de entidades que serão criadas nos bancos de dados, com definições de seus atributos e demais propriedades necessárias para atender os requisitos do projeto. A seguir uma breve apresentação destes modelos:
    - patient.js: arquivo contendo os atrbutos necessários para criação de um paciente.
    - doctor.js: arquivo contendo os atrbutos necessários para criação de um paciente.
    - nurse.js: arquivo contendo os atrbutos necessários para criação de um enfermeiro.
    - service.js: arquivo contendo os atrbutos necessários para criação de uma função que fará o incremento no número de atendimetntos de determinado médico e paciente de acordo com o id passado na requisição e altera o status do paciente para "ATENDIDO".


Abaixo você pode ver um modelo entidade relacionamento do projeto:

![modelo entidade-relacionamento](./Diagrama%20em%20branco.jpeg)



Pasta controllers:
- Nesta pasta estão os arquivos que responśaveis por criar, listar, atualizar e deletar dados de pacientes, médicos e enfermeiros cadastrados além da pasta service. Assim para cada uma das pastas, temos os seguintes arquivos:
    - Pasta patients:
        - createPatient: cria cadastro de novo paciente.
        - updatePatientData: atualiza dados de pacientes.
        - updateStatus: atualiza o status de paciente de acordo com as seguintes opções: "AGUARDANDO_ATENDIMENTO",  "EM_ATENDIMENTO", "ATENDIDO", "NÃO_ATENDIDO"
        - findAllPatient: lista os pacientes de acordo com seu status via query params ou lista todos os pacientes.
        - findPatientById: lista um paciente de acordo com o ID repassado no params.
        - deletePatient: deleta um paciente do banco de dados.
        - 
    - Pasta doctor:
        - createDoctor: cria cadastro de novo médico.
        - updateDoctortData: atualiza dados de médicos.
        - updateDoctorStatus: atualiza o status de médico de acordo com as seguintes opções: "ATIVO",  "INATIVO".
        - findAllDoctors: lista os médicos de acordo com seu status via query params ou lista todos os médicos.
        - findDoctorById: lista um médico de acordo com o ID repassado no params.
        - deleteDoctor: deleta um médico do banco de dados.
        - 
    - Pasta nurse:
        - createNurse: cria cadastro de novo enfermeiro.
        - updateNursetData: atualiza dados de enfermeiros.
        - findAllNurse: lista os enfermeiros.
        - findNurseById: lista um enfermeiro de acordo com o ID repassado no params.
        - deleteNurse: deleta um enfermeiro do banco de dados.
    
    - Pasta service:
        - createService: busca um paciente e um médico passados via request body e incrementa o atributos atendimento em cada um dos objetos além de mudar o status de paciente para ATIVO.

Pasta middlewares:
-  Nesta pasta se encontra os arquivos .js contendo os validadores de dados repassados nas requisições e vendo se estão de acordo com as regras implementadas. Foi utilizada a biblioteca Yup. para realizar as validações. Está organizada em mais 3 pastas: paciente, médico e enfermeiro:
    - Pasta patient: 
        - validateNewPatient: valida a criação de um novo paciente.
        - validateUpdatePatientData: valida as atualizações realizadas nos pacientes cadastrados.
    
    - Pasta doctor:
        - validateNewDoctor: valida a criação de um novo médico.
        - validateUpdateDoctorData: valida as atualizações realizadas nos médicos cadastrados.
    
    - Pasta nurse: 
        - validateNewNurse: valida a criação de um novo enfermeiro.
        - validateUpdateNurseData: valida as atualizações realizadas nos enfermeiros cadastrados.

Pasta database:
    - Esta pasta contém apenas um arquivo index.js responsável por criar através de funções do sequelize a conexão com o banco de dados. Note que variáveis de ambiente foram utilizadas, sendo que você poderá usar o arquivo env.example na pasta root para criar suas variáveis. 



## Instalação

Para rodar o projeto certifique-se de ter o Node.js instalado em seu computador e de ter o pgAdmin4 para ter acesso ao PostGres SQL.

Após a instalação ou se já tiver os programas instalados, clone o repositório do GitHub e abra o terminal. Para iniciar seu projeto chame o gerenciador de pacotes do node com o comando abaixo. Certifique-se se o terminal está aberto na pasta correta do projeto:


```sh
npm init
```

Algumas perguntas serão feitas, como o nome do projeto, autor, versão. Se quiser você pode ignorar estas perguntas e ir direto para a criação da pasta com o comando a seguir:

```sh
npm init -y
```

Após o start no projeto, vamos seguir para as instalações das bibliotecas necessárias para rodar o sistema, conforme apresentado mais acima.

Instale o Express com o seguinte comando:
```sh
npm install express
```
Ou se preferir ter o Express instalado na lista de dependências, ou seja, de forma permanente, use o seguinte comando:
```sh
npm install express --save
```

Próximo passo é a instalação do Sequelize, que conforme visto, irá ser o responsável pela comunicação com o banco de dados:
```sh
npm install --save pg pg-hstore
```

Por último, será instalado a biblioteca Yup, para executar as validações necessárias na criação de novos cadastros no SGBD:
```
npm install yup
```


## Endpoints / Rotas
Os itens a seguir demonstram as rotas utilziadas no projeto bem como as respostas obtidas de acordo com as requisições:

**PACIENTE**

**POST/api/patient**
Cria um novo paciente.

Parâmetros:
- Identificador: Um número que deve ser incrementado automaticamente
- Nome Completo: Deve ser um texto
- Gênero: Deve ser um texto
- Data de Nascimento: Obrigatório, data válida.
- CPF: Deve ser texto
- Telefone: Deve ser texto
- Contato de Emergência: Obrigatório, Deve ser texto
- Lista de Alergias: Não obrigatório para a criação da classe
- Lista de Cuidados Específicos: Não obrigatório para a criação da classe
- Convênio: Não obrigatório para a criação da classe
- Status de Atendimento: Um paciente pode estar com as seguintes situações: Aguardando Atendimento, Em Atendimento, Atendido, Não Atendido
- Total de atendimentos realizados.

**PUT/api/patient/:id**
Realiza atualizações nos atributos de pacientes.

Parâmetros: 
- No corpo da request, informar objeto json com os campos , exceto o status do atendimento e total_de_atendimentos .
- Os campos validados como sendo obrigatórios devem possuir os valores possíveis para estes campos.

**PUT/api/patient/:id/status**
Atualiza o status do paciente no banco de dados.

Parâmetros:
- Informar na request o status a ser atualizado
- 
**GET/api/patient**
Lista os pacientes cadastrados no sistema. De forma opcional, pode-se utilizar um query param para listar a partir do status dos pacientes como no exemplo a seguir:
"/api/patient?status=NÃO_ATENDIDO"

Parâmetros:
- Sem request body.
- 
**GET/api/patient/:id**
Retorna um paciente de acordo com o ID.

Parâmetros:
- Sem request body. Apenas o ID passado no path.

**DELETE/api/patient/:id**
Deleta um paciente do banco de dados.

Parâmetros:
- Sem request body. Apenas o ID passado no path.

**MÉDICO**
**POST/api/doctor**
Cria o cadastro de um novo médico.

Parâmetros:
- Identificador: Um número que deve ser incrementado automaticamente
- Nome Completo: Deve ser um texto
- Gênero: Deve ser um texto
- Data de Nascimento: Obrigatório, data válida.
- CPF: Deve ser texto
- Telefone: Deve ser texto
- Instituição de Ensino da Formação: Obrigatório, deve ser texto.
- Cadastro do CRM/UF:  Obrigatório, deve ser texto.
- Especialização Clínica: Obrigatório com as seguintes opções: Clínico Geral, Anestesista, Dermatologia, Ginecologia, Neurologia, Pediatria, Psiquiatria, Ortopedia.
- Estado no Sistema: Ativo ( Por padrão, caso não informado, cadastra o médico como ativo), Inativo
- Total de atendimentos realizados

**PUT/api/doctor/:id**
Realiza atualizações nos atributos de médicos.

Parâmetros: 
- No corpo da request, informar objeto json com os campos.
- Os campos validados como sendo obrigatórios devem possuir os valores possíveis para estes campos.

**PUT/api/doctor/:id/status**
Atualiza o status do médico no banco de dados.

Parâmetros:
- Informar na request o status a ser atualizado
- 
**GET/api/doctor**
Lista os médicos cadastrados no sistema. De forma opcional, pode-se utilizar um query param para listar a partir do status dos médicos como no exemplo a seguir:
"/api/doctor?status=INATIVO"

Parâmetros:
- Sem request body.
- 
**GET/api/doctor/:id**
Retorna um médico de acordo com o ID.

Parâmetros:
- Sem request body. Apenas o ID passado no path.

**DELETE/api/doctor/:id**
Deleta um paciente do banco de dados.

Parâmetros:
- Sem request body. Apenas o ID passado no path.

**ENFERMEIRO**
**POST/api/nurse**
Cria o cadastro de um novo enfermeiro.

Parâmetros:
- Identificador: Um número que deve ser incrementado automaticamente
- Nome Completo: Deve ser um texto
- Gênero: Deve ser um texto
- Data de Nascimento: Obrigatório, data válida.
- CPF: Deve ser texto
- Telefone: Deve ser texto
- Instituição de Ensino da Formação: Obrigatório, deve ser texto.
- Cadastro do COFEN/UF:  Obrigatório, deve ser texto.

**PUT/api/nurse/:id**
Realiza atualizações nos atributos de enfermeiros.

Parâmetros: 
- No corpo da request, informar objeto json com os campos.
- Os campos validados como sendo obrigatórios devem possuir os valores possíveis para estes campos.
 
**GET/api/nurse**
Lista os enfermeiros cadastrados no sistema. 

Parâmetros:
- Sem request body.
- 
**GET/api/nurse/:id**
Retorna um enfermeiro de acordo com o ID.

Parâmetros:
- Sem request body. Apenas o ID passado no path.

**DELETE/api/nurse/:id**
Deleta um enfermeiro do banco de dados.

Parâmetros:
- Sem request body. Apenas o ID passado no path.

**ATENDIMENTOS**
**POST/api/service**
Incrementa o valor do atributo atendiemento no paciente e no médicos passados na requisição e altera o status do paciente para ATENDIDO.

Parâmetros:
- ID do médico.
- ID do paciente

## Melhorias ou futuras implementações

Pelo fato de este projeto ser apenas um MVP, abaixo seguem algumas melhorias para futuras implementações:

- implementar um histórico do paciente, que poderá ser compartilhado com o mesmo após cada consulta ou quando desejado pelo cliente além de permitir aos médicos e enfermeiros terem um histórico em mãos para melhor atender o paciente.
- implementar uma opção para o cliente classificar como foi o atendimento recebido, afim de obter dados para melhoria contínua do processo de atendimento.
- oferecer duas opções para a realização da consulta, dependendo do problema do paciente. Presencial ou on-line evitando assim filas em salas de espera ou perda de tempo com deslocamentos.