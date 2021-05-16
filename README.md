# Teste Backend - API 1

Essa API é utilizada para gerar um valor por metro quadrado em formato JSON e a servir para qualquer aplicativo que realize uma conexão com ela.

A aplicação online está rodando neste link: [APP](https://ingaia-api-1.herokuapp.com/)

Está sendo utilizado o serviço de CI/CD do Travis CI, assim, após o envio de código ao github o mesmo é testado e caso passe é realizado o build no heroku automaticamente.

### Tecnologias

No projeto foram utilizadas as seguintes tecnologias

- Node
- Express
- Typescript
- Jest
- Docker

Para CI/CD

- Travis

Para Host da API

- Heroku

## Instalação

Criação do arquivo .env:

    cp .env.example .env

Instalação das dependências:

    npm install

## Rodando o aplicativo

Para rodas o aplicativo com o docker é bem simples, basta realizar os seguintes passos:

Criação do arquivo .env:

    cp .env.example .env

Build do Container docker:

    docker build -t ingaia-backend-challenge .

Rodando o Container docker:

    docker run -d -p 7000:7000 ingaia-backend-challenge

## Rodando os testes

Para rodar os testes da aplicação pode ser usado o seguinte comando:

    npm run test:unit

# REST API

Abaixo temos a descrição da API criada, como seu uso é apenas para o envio de preço para o usuário final são poucas suas rotas.

## Pegar preço por metro quadrado

### Request

`GET /api/v1/pricesPerSquareMeters`

### Response

```JSON
    [
      {
        "id": 1,
        "name": "Preço por Metro Quadrado",
        "price": 2,
        "description": "preço por metro quadrado na cidade de Videira"
      }
    ]
```

## Alterar preço do metro quadrado

### Request

`PUT /api/v1/pricesPerSquareMeters/:id`

Corpo da Requisição pode receber os seguinte campos para a alteração:

- name
- price
- description

### Response

Retorna o novo objeto com seus dados atualizados.

```JSON
    [
      {
        "id": 1,
        "name": "Preço por Metro Quadrado",
        "price": 300,
        "description": "Preço por Metro Quadrado"
      }
    ]
```
