---
title: Informe goods receipt
sidebar_label: post_informe-goods-receipt-unit-type
---

### Rota para informar entrada de mercadoria

Quando você desejar informar uma entrada de mercadoria na qual você específicará o tipo ( caixa ou pallet ), você pode usar essa rota.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Informar mercadoria</summary>

#### Parâmetros na URL
Como este é um método **POST**, não deve ser inserido nenhum parâmetro adicional na URL.


```javascript
http://seu-servidor/api/informe-goods-receipt-unit-type
```

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Vá para a aba Body.
- Selecione a opção raw e, no menu suspenso ao lado, escolha JSON.
- Insira os valores no formato adequado.

```javascript
{
  "purchaseInvoiceId": 12345,
  "type": 0,
  "quantityBox": 100,
  "boxes": [
    {
      "boxId": 1,
      "content": "Electronics"
    },
    {
      "boxId": 2,
      "content": "Books"
    }
  ]
}
```

- **purchaseInvoiceId**: Um número que representa o ID da fatura de compra.
- **type**: Um número que indica o tipo de recebimento (0 para caixa e qualquer outro valor para Pallet).
- **quantityBox**: Um número que representa a quantidade de caixas.
- **boxes**: Uma lista de objetos, representando detalhes das caixas.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/informe-goods-receipt-unit-type.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>