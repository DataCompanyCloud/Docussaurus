---
title: Reset stock at location
sidebar_label: post_reset-stock-at-location
---

### Rota para reiniciar o estoque de uma localização

Quando você desejar reiniciar o estoque, você pode usar essa rota.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Reiniciar o estoque</summary>

#### Parâmetros na URL
Como este é um método **POST**, não deve ser inserido nenhum parâmetro adicional na URL.


```javascript
http://seu-servidor/api/reset-stock-at-location
```

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Vá para a aba Body.
- Selecione a opção raw e, no menu suspenso ao lado, escolha JSON.
- Insira os valores no formato adequado.

```javascript
{
  "orderId": 123,
  "productId": 456,
  "quantity": 50.0,
  "notFound": false,
  "meta": {
    "reason": "descreva a razão de estar fazendo isso",
    "authorizedBy": "Manager"
  }
}
```

- **orderId**: ID da ordem que está sendo ajustada.
- **productId**: ID do produto cujo estoque está sendo ajustado.
- **quantity**: Quantidade a ser ajustada no estoque.
- **notFound**: Um valor booleano que indica se o produto foi ou não encontrado (por padrão, false).
- **meta**: Um dicionário de chave-valor para informações adicionais, como o motivo da operação e quem autorizou.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/dispatch-reset-stock-at-location.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>