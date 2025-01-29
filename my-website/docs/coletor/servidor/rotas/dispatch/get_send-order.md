---
title: Send a order
sidebar_label: get_send-a-order
---

### Rota para enviar um pedido

Quando você desejar enviar um pedido existênte, você pode usar essa rota.

#### Parâmetros na URL

Essa rota com o método **GET** utiliza parâmetros na URL, que são os valores para **identificação do pedido** e **Valor do pedido**. Esses parâmetros são inseridos diretamente na URL, como parte do caminho da requisição.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Enviar pedido</summary>

- Você precisa passar os valores **identificação do pedido** e **Valor do pedido** na URL.

```javascript
http://seu-servidor/api/send-order/123/50
```

- **123** é o identificação do pedido.
- **50** é o valor do pedido.

#### Corpo da Requisição (Body)

- Como você está usando um método GET com parâmetros na URL, não é necessário enviar nada no corpo (Body) da requisição. Tudo que o método precisa está sendo passado diretamente na URL.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/dispatch-send-order.png)

:::warning
Essa requisição em específico, não é necessário passar o **token único** no **Headers**!.
:::
</details>