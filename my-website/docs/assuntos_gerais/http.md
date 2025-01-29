---
title: HTTP
sidebar_label: Http
---

#### O que são rotas HTTP?

Rotas HTTP são como "endereços" que dizem ao servidor o que fazer quando você acessa uma URL. Elas indicam quais ações o servidor deve tomar, e estão relacionadas aos métodos HTTP, que são os verbos usados para definir o tipo de operação a ser realizada:

- **GET**: Para recuperar dados do servidor. Um exemplo comum é visualizar informações de um perfil ou listar itens.
- **POST**: Para enviar dados ao servidor, normalmente para criar novos recursos. Por exemplo, criar uma nova conta ou adicionar uma nova tarefa.
- **PUT**: Para atualizar dados existentes no servidor. É usado para modificar completamente um recurso.
- **PATCH**: Para atualizar parcialmente um recurso.
- **DELETE**: Para remover dados ou um recurso do servidor.

### Como Funciona a Criação dos Métodos e Rotas?

Os métodos e as rotas (URLs) são definidos por quem programa a API. Quando uma API é criada, os programadores estabelecem quais ações estarão disponíveis e quais URLs deverão ser usadas para acessá-las. Esses programadores também definem quais métodos HTTP serão utilizados para cada ação.

<details>
<summary>Como manipular uma request</summary>

Em nosso Postman, vamos entrar na requisição que você quer acessar.

- Você verá o campo, marcado por **GET** ( ou qualquer outro tipo de request selecionada ) onde pode colocar sua **URL** e clicar em **SEND** para enviar essa requisição, onde o servidor interpretará.

- Em **BODY**, é onde fica o conteúdo que você quer passar pela rota, caso a request exija.

- Selecionaremos **raw** e no campo de seleção, o formato **JSON**

![Postman](@site/static/img/explanation-request-http.png)

</details>

<details>
<summary>O que são os Métodos HTTP</summary>

Os métodos HTTP são comandos utilizados para indicar a ação que um aplicativo deseja realizar em um servidor.

Cada URL abaixo representa uma rota que o servidor entende, por exemplo, em uma API que gerencia usuários, podemos ter as seguintes rotas:

- Para obter a lista de todos os usuários

    ```javascript
    GET /api/users
    ```
- Para criar um novo usuário

    ```javascript
    POST /api/users
    ```
- Para atualizar um usuário específico

    ```javascript
    PUT /api/users/{id}:
    ```
- Para excluir um usuário

    ```javascript
    DELETE /api/users/{id}:
    ```
</details>

<details>
<summary>Como fazer request no Postman</summary>

Você pode testar requisiçõe simples, utilizando uma API pública que simula dados para teste.

usaremos a seguinte rota:

```javascript
    https://reqres.in/api/users
```

A **URL** pode ser lida como:

- **Servidor**: https://reqres.in ( servidor que hospeda a API )
- **Serviço/API**: **/api/** ( indica que estamos acessando uma funcionalidade da API )
- **Recurso**: **/users** ( especifica que estamos trabalhando com o recurso de usuários )


Faremos uma requisição do tipo **GET**, com o objetivo de **buscar** dados do usuário no servidor.

- Cole a **URL** no campo do Postman, e clique em **SEND**

![Postman](@site/static/img/GET-request-http.png)

- Você verá a resposta no **body** em baixo, pelo formato **JSON**.
- O retorno **200 OK** em verde, significa que a requisição foi um sucesso.

Agora, façamos uma requisição **POST** com o intuíto de cadastrar você, um novo usuário.

- Cole a URL no campo do Postman.
- Preencha o campo body com o seguinte conteúdo:
```javascript
{
 "data": 
 [
    {
        "id": 999,
        "email": "suporte@123",
        "first_name": "Sou eu",
        "last_name": "Testando"
    }
 ]
}
```
- Clique em **SEND**

![Postman](@site/static/img/POST-request-http.png)

- Você verá a resposta no **body** em baixo, pelo formato **JSON**.
- O retorno **201 OK** em verde, significa que a requisição foi um sucesso.

:::tip
Todas as requisições Http seguem o mesmo conceito. Você só precisa saber como acessar a API que deseja.
:::

</details>