# API de Gerenciamento de Usuários

Esta é uma API simples para gerenciamento de usuários, construída com Express e Prisma. A API permite criar, ler, atualizar e excluir registros de usuários em um banco de dados.

## Tecnologias

- **Express**: Framework para construir a API.
- **Prisma**: ORM para interagir com o banco de dados.

## Endpoints

### 1. Criar um Novo Usuário

- **Endpoint**: `POST /usuarios`
- **Descrição**: Cria um novo usuário.
- **Requisição**:
    - **Corpo**:
    ```json
    {
      "email": "email@example.com",
      "name": "Nome do Usuário",
      "age": "25"
    }
    ```
- **Resposta**:
    - **Código 201**: Usuário criado com sucesso.
    - **Exemplo**:
    ```json
    {
      "email": "email@example.com",
      "name": "Nome do Usuário",
      "age": "25"
    }
    ```

### 2. Listar Todos os Usuários

- **Endpoint**: `GET /usuarios`
- **Descrição**: Retorna todos os usuários.
- **Resposta**:
    - **Código 200**: Lista de usuários.
    - **Exemplo**:
    ```json
    [
      {
        "id": "uuid",
        "email": "email@example.com",
        "name": "Nome do Usuário",
        "age": "25"
      }
    ]
    ```

### 3. Atualizar um Usuário

- **Endpoint**: `PUT /usuarios/:id`
- **Descrição**: Atualiza um usuário existente com base no ID.
- **Parâmetros**:
    - **Path**: `id` (ID do usuário a ser atualizado)
- **Requisição**:
    - **Corpo**:
    ```json
    {
      "email": "novoemail@example.com",
      "name": "Novo Nome",
      "age": "30"
    }
    ```
- **Resposta**:
    - **Código 200**: Usuário atualizado com sucesso.
    - **Exemplo**:
    ```json
    {
      "email": "novoemail@example.com",
      "name": "Novo Nome",
      "age": "30"
    }
    ```

### 4. Deletar um Usuário

- **Endpoint**: `DELETE /usuarios/:id`
- **Descrição**: Remove um usuário com base no ID.
- **Parâmetros**:
    - **Path**: `id` (ID do usuário a ser deletado)
- **Resposta**:
    - **Código 200**: Usuário deletado com sucesso.
    - **Exemplo**:
    ```json
    {
      "message": "Usuário deletado com sucesso!"
    }
    ```

## Configuração do Ambiente

1. **Instalação das Dependências**:
   Execute o comando abaixo para instalar as dependências:
   ```bash
   npm install

2. **Inicialização do Banco de Dados**:
   Certifique-se de que o banco de dados esteja configurado e as migrações aplicadas:
   ```bash
   npx prisma migrate dev

3. **Iniciar o Servidor**:
   Execute o comando abaixo para iniciar o servidor:
   ```bash
   npm start