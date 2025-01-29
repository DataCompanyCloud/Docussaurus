---
title: Store products in quarantine
sidebar_label: post_store-products-in-quarantine
---

### Rota para armazenar mercadoria na quarentena

Quando você desejar armazenar produtos em quarentena, você pode usar essa rota.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Armazenar mercadoria</summary>

#### Parâmetros na URL
Como este é um método **POST**, não deve ser inserido nenhum parâmetro adicional na URL.


```javascript
http://seu-servidor/api/store-products-in-quarantine
```

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Vá para a aba Body.
- Selecione a opção raw e, no menu suspenso ao lado, escolha JSON.
- Insira os valores no formato adequado.

```javascript
{
  "purchaseInvoice": {
    "id": 98765,
    "date": "2024-10-18T12:34:56Z",
    "supplier": "SupplierName"
  },
  "products": [
    {
      "productId": 123,
      "quantity": 50
    },
    {
      "productId": 456,
      "quantity": 75
    }
  ]
}
```

**purchaseInvoice**: Um objeto contendo detalhes da fatura de compra, incluindo:
- **id**: O ID da fatura.
- **date**: A data da fatura (formato ISO 8601).
- **supplier**: O nome do fornecedor.

**products**: Uma lista de objetos ProductQuantity, cada um representando um produto e a quantidade a ser armazenada em quarentena:
- **productId**: O ID do produto.
- **quantity**: A quantidade do produto.

#### Enviar a Requisição:

- Clique em **Send** e você verá a resposta do servidor.

![Postman](@site/static/img/store-products-in-quarantine.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>