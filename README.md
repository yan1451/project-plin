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

## Horário do Cardápio

O `MenuController` determina automaticamente se deve retornar o cardápio diurno ou noturno com base no horário atual. Itens do cardápio diurno são exibidos durante o dia, enquanto itens do cardápio noturno são exibidos após as 18h até as 6h.

## Como Usar

Para usar o `MenuController`, certifique-se de que você possui o `MenuService` corretamente configurado e injetado no controlador. As rotas estão configuradas automaticamente de acordo com as anotações de rota, portanto, você pode acessar as diferentes rotas conforme documentado acima.

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver melhorias para sugerir, fique à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está sob a licença [MIT](LICENSE).

Lembre-se de adaptar as informações acima de acordo com a estrutura da sua aplicação, seus endpoints específicos, detalhes do DTO e do serviço que você está usando, bem como quaisquer outras personalizações necessárias. O README deve ser uma ferramenta útil para outros desenvolvedores entenderem como usar o `MenuController` em sua aplicação.


Claro, aqui está um exemplo de README para o `ProductsController`:

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

## Exceções

O `ProductsController` pode lançar as seguintes exceções em resposta a diferentes cenários:

- `BadRequestException`: Quando um parâmetro obrigatório está ausente ou inválido.
- `NotFoundException`: Quando um produto não é encontrado com base no nome ou ID fornecido.

## Como Usar

Para usar o `ProductsController`, certifique-se de que você possui o `ProductsService` corretamente configurado e injetado no controlador. As rotas estão configuradas automaticamente de acordo com as anotações de rota, portanto, você pode acessar as diferentes rotas conforme documentado acima.

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver melhorias para sugerir, fique à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está sob a licença [MIT](LICENSE).

Lembre-se de adaptar as informações acima de acordo com a estrutura da sua aplicação, seus endpoints específicos, detalhes do DTO e do serviço que você está usando, bem como quaisquer outras personalizações necessárias. O README deve ser uma ferramenta útil para outros desenvolvedores entenderem como usar o `ProductsController` em sua aplicação.

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

## Exceções

O `CategoriesController` pode lançar as seguintes exceções em resposta a diferentes cenários:

- `BadRequestException`: Quando um parâmetro obrigatório está ausente ou inválido.
- `NotFoundException`: Quando uma categoria não é encontrada com base no nome fornecido.

## Como Usar

Para usar o `CategoriesController`, certifique-se de que você possui o `CategoriesService` corretamente configurado e injetado no controlador. As rotas estão configuradas automaticamente de acordo com as anotações de rota, portanto, você pode acessar as diferentes rotas conforme documentado acima.

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver melhorias para sugerir, fique à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está sob a licença [MIT](LICENSE).

Lembre-se de adaptar as informações acima de acordo com a estrutura da sua aplicação, seus endpoints específicos e os detalhes do DTO e do serviço que você está usando. O README deve ser uma ferramenta útil para outros desenvolvedores entenderem como usar o `CategoriesController` em sua aplicação.