---
title: Booking
sidebar_label: post_booking
---

### Rota para reservar um pedido

Quando você desejar reservar um pedido, você pode usar essa rota.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Reservar pedido</summary>

#### Parâmetros na URL
Como este é um método **POST**, não deve ser inserido nenhum parâmetro adicional na URL.


```javascript
http://seu-servidor/api/booking
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
  "quantity": 10.5,
  "notFound": false,
  "meta": {
    "note": "é uma descrição para teste",
    "priority": "high"
  }
}
```

- orderId: O ID da ordem que está sendo processada.
- productId: O ID do produto relacionado à ordem.
- quantity: A quantidade do produto que está sendo enviada/resetada.
- notFound: Um valor booleano que indica se o produto foi ou não encontrado. Exemplo: false significa que o produto foi encontrado.
- meta: Para informações adicionais, como "nota" ou "prioridade". Esse campo pode conter vários dados, conforme necessário.


#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/dispatch-booking.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>