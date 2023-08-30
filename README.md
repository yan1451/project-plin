## Passo a Passo para Rodar a Aplicação

1. **Clone o Projeto:**
   Abra o terminal e navegue até a pasta onde você deseja clonar o projeto. Execute o seguinte comando para clonar o projeto do repositório remoto:

   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```

   Substitua `<URL_DO_REPOSITÓRIO>` pela URL do seu repositório no GitHub ou em outra plataforma.

2. **Instale as Dependências:**
   Navegue até a pasta do projeto que você acabou de clonar. Execute o seguinte comando para instalar todas as dependências do projeto:

   ```bash
   npm install
   ```

3. **Inicie a Aplicação:**
   Após a instalação das dependências, você pode iniciar a aplicação. Execute o seguinte comando:

   ```bash
   npm run start:dev
   ```

   Isso iniciará a aplicação no modo de desenvolvimento. Acesse `http://localhost:3000` no seu navegador para interagir com a aplicação.

4. **Visualize o Banco de Dados:**
   Se o banco de dados estiver configurado corretamente, você pode usar o Prisma Studio para visualizar e interagir com os dados do banco. No terminal, execute o seguinte comando:

   ```bash
   npx prisma studio
   ```

   Isso abrirá uma interface gráfica do Prisma Studio no seu navegador. Você poderá explorar os dados do banco de dados por meio dessa interface.

5. **Pronto para Usar:**
   Agora a aplicação está rodando e você pode começar a interagir com ela, criar, atualizar e visualizar dados, e explorar o banco de dados por meio do Prisma Studio.

# Menu Controller

O `MenuController` é responsável por lidar com as requisições relacionadas ao menu de refeições em sua aplicação. Ele fornece endpoints para listar os itens do cardápio com base no horário atual e para criar novos itens no cardápio.

## Rotas

### Listar Itens do Cardápio

Endpoint: `GET /menu`

Esta rota permite listar os itens do cardápio com base no horário atual. O cardápio noturno é exibido após as 18h até as 6h, e o cardápio diurno é exibido durante o dia.

**Exemplo de Uso:**

```http
GET /menu
```

### Criar Novo Item no Cardápio

Endpoint: `POST /menu/create`

Esta rota permite criar um novo item no cardápio.

**Corpo da Requisição:**

O corpo da requisição deve conter os detalhes do item a ser criado, conforme o formato definido pelo DTO `CreateMenuDto`.

**Exemplo de Uso:**

```http
POST /menu/create

{
  "name": "Nome do Item",
  "description": "Descrição do Item",
  "price": 10.99,
  // Outros campos do DTO...
}
```

# Atualizar um Menu por ID

O endpoint `PATCH` permite atualizar informações de um menu específico com base no seu ID.

## Requisição

- **Método:** `PATCH`
- **URL:** `/menu/:id`
- **Parâmetros URL:**
  - `id`: O ID do menu a ser atualizado.
- **Corpo da Requisição:** Um objeto contendo as informações a serem atualizadas no menu.

```json
{
  "name": "Novo Nome do Menu",
  "turn": "diurno"
  // Outros campos opcionais de atualização
}
```

## Resposta

- **Código de Status:** 200 OK
- **Corpo da Resposta:** O menu atualizado com as informações atualizadas.

```json
{
  "id": "ID do Menu",
  "name": "Nome Atualizado do Menu",
  "turn": "diurno"
  // Outros campos atualizados
}
```
## Exemplo de Requisição

```http
PATCH /menu/64ee3ac24f7b5d610e6e3aba
Content-Type: application/json

{
  "name": "Novo Nome do Menu Atualizado",
  "turn": "noturno"
}
```

## Exemplo de Resposta

```json
{
  "id": "64ee3ac24f7b5d610e6e3aba",
  "name": "Novo Nome do Menu Atualizado",
  "turn": "noturno"
}
```

## Horário do Cardápio

O `MenuController` determina automaticamente se deve retornar o cardápio diurno ou noturno com base no horário atual. Itens do cardápio diurno são exibidos durante o dia, enquanto itens do cardápio noturno são exibidos após as 18h até as 6h.

# Products Controller

O `ProductsController` é responsável por lidar com as requisições relacionadas aos produtos em sua aplicação. Ele fornece endpoints para listar produtos, encontrar produtos por nome, encontrar produtos por ID e criar novos produtos.

## Rotas

### Listar Todos os Produtos

Endpoint: `GET /products`

Esta rota permite listar todos os produtos existentes.

**Exemplo de Uso:**

```http
GET /products
```

### Encontrar Produto por Nome

Endpoint: `GET /products/findByName`

Esta rota permite encontrar um produto específico com base no nome fornecido.

**Parâmetros:**

- `name` (string, obrigatório): O nome do produto a ser encontrado.

**Exemplo de Uso:**

```http
GET /products/findByName?name=nome-do-produto
```

### Encontrar Produto por ID

Endpoint: `GET /products/:id`

Esta rota permite encontrar um produto específico com base no ID fornecido.

**Parâmetros:**

- `id` (string, obrigatório): O ID do produto a ser encontrado.

**Exemplo de Uso:**

```http
GET /products/1
```

### Criar Novo Produto

Endpoint: `POST /products/create`

Esta rota permite criar um novo produto.

**Corpo da Requisição:**

O corpo da requisição deve conter os detalhes do produto a ser criado, conforme o formato definido pelo DTO `CreateProductDto`.

**Exemplo de Uso:**

```http
POST /products/create

{
  "name": "Novo Produto",
  "description": "Descrição do Produto",
  "price": 19.99,
  // Outros campos do DTO...
}
```

# Atualizar um Produto por ID

O endpoint `PATCH` permite atualizar informações de um produto específico com base no seu ID.

## Requisição

- **Método:** `PATCH`
- **URL:** `/products/:id`
- **Parâmetros URL:**
  - `id`: O ID do produto a ser atualizado.
- **Corpo da Requisição:** Um objeto contendo as informações a serem atualizadas no produto.

```json
{
  "name": "Novo Nome do Produto",
  "price": 19.99
  // Outros campos opcionais de atualização
}
```

## Resposta

- **Código de Status:** 200 OK
- **Corpo da Resposta:** O produto atualizado com as informações atualizadas.

```json
{
  "id": "ID do Produto",
  "name": "Nome Atualizado do Produto",
  "price": 19.99
  // Outros campos atualizados
}
```

## Exemplo de Requisição

```http
PATCH /products/123456
Content-Type: application/json

{
  "name": "Novo Nome do Produto Atualizado",
  "price": 24.99
}
```

## Exemplo de Resposta

```json
{
  "id": "123456",
  "name": "Novo Nome do Produto Atualizado",
  "price": 24.99
}
```

# Categories Controller

O `CategoriesController` é responsável por lidar com as requisições relacionadas às categorias de produtos em sua aplicação.

## Rotas

### Listar Todas as Categorias

Endpoint: `GET /categories`

Esta rota permite listar todas as categorias de produtos existentes.

**Exemplo de Uso:**

```http
GET /categories
```

### Encontrar Categoria por Nome

Endpoint: `GET /categories/findByName`

Esta rota permite encontrar uma categoria específica com base no nome fornecido.

**Parâmetros:**

- `name` (string, obrigatório): O nome da categoria a ser encontrado.

**Exemplo de Uso:**

```http
GET /categories/findByName?name=nome-da-categoria
```

### Criar Nova Categoria

Endpoint: `POST /categories/create`

Esta rota permite criar uma nova categoria de produto.

**Corpo da Requisição:**

O corpo da requisição deve conter os detalhes da categoria a ser criada, conforme o formato definido pelo DTO `CreateCategoryDto`.

**Exemplo de Uso:**

```http
POST /categories/create

{
  "name": "Nova Categoria",
  "menuId": 1,
  // Outros campos do DTO...
}
```
# Atualizar uma Categoria por ID

O endpoint `PATCH` permite atualizar informações de uma categoria específica com base no seu ID.

## Requisição

- **Método:** `PATCH`
- **URL:** `/categories/:id`
- **Parâmetros URL:**
  - `id`: O ID da categoria a ser atualizada.
- **Corpo da Requisição:** Um objeto contendo as informações a serem atualizadas na categoria.

```json
{
  "name": "Novo Nome da Categoria"
  // Outros campos opcionais de atualização
}
```

## Resposta

- **Código de Status:** 200 OK
- **Corpo da Resposta:** A categoria atualizada com as informações atualizadas.

```json
{
  "id": "ID da Categoria",
  "name": "Nome Atualizado da Categoria",
  // Outros campos atualizados
}
```

## Exemplo de Requisição

```http
PATCH /categories/123456
Content-Type: application/json

{
  "name": "Nova Categoria Atualizada"
}
```

## Exemplo de Resposta

```json
{
  "id": "123456",
  "name": "Nova Categoria Atualizada"
}
```
