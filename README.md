# User Management API

Este é um projeto de uma API simples desenvolvida em Node.js com o framework Express para realizar operações CRUD em uma lista de usuários armazenada localmente em um arquivo JSON.

## Funcionalidades

- **Listar Usuários:** Endpoint para listar todos os usuários cadastrados.
- **Buscar Usuário por ID:** Endpoint para buscar um usuário específico pelo ID.
- **Adicionar Usuário:** Endpoint para adicionar um novo usuário à lista.
- **Atualizar Usuário:** Endpoint para atualizar as informações de um usuário existente.
- **Remover Usuário:** Endpoint para remover um usuário da lista.

## Endpoints

### Listar Usuários
GET /usuarios & GET /

Retorna uma lista de todos os usuários cadastrados.

### Buscar Usuário por ID
GET /usuarios/:id
Retorna um usuário específico com base no ID fornecido.

### Adicionar Usuário
POST /
Adiciona um novo usuário à lista.

### Atualizar Usuário
PUT /usuarios/:id
Atualiza as informações de um usuário existente com base no ID fornecido.

### Remover Usuário
DELETE /usuarios/:id
Remove um usuário da lista com base no ID fornecido.
