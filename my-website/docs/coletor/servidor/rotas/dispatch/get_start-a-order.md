---
title: Start a order
sidebar_label: get_start-a-order
---

### Rota para iniciar um pedido

Quando você desejar iniciar um pedido, você pode usar essa rota.

#### Parâmetros na URL

Essa rota com o método **GET** utiliza parâmetros na URL, que são os valores para **identificação do pedido**. Esse parâmetro será inserido diretamente na URL, como parte do caminho da requisição.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Iniciar pedido</summary>

- Você precisa passar o valore **identificação do pedido** na URL.

```javascript
http://seu-servidor/api/start-a-order/123
```

- **123** é o identificação do pedido.

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Como você está usando um método GET com parâmetros na URL, não é necessário enviar nada no corpo (Body) da requisição. Tudo que o método precisa está sendo passado diretamente na URL.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/dispatch-start-a-order.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |
</details>