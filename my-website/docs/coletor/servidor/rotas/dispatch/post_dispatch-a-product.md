---
title: Dispatch a product
sidebar_label: post_dispatch-a-product
---

### Rota para despachar um produto

Quando você desejar despachar um produto, você pode usar essa rota.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Despachar produto</summary>

#### Parâmetros na URL
Como este é um método **POST**, não deve ser inserido nenhum parâmetro adicional na URL.


```javascript
http://seu-servidor/api/dispatch-a-product
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
  "orderCode": "ORD-789",
  "location": "Minha casa",
  "quantity": 100.5,
  "requestedQuantity": 150.0,
  "dispatchedDate": "2024-10-18T12:34:56Z",
  "quantityTolerance": 0.05,
  "meta": {
    "specialHandling": "Fragile",
    "priority": "High"
  }
}
```
- **orderId**: ID da ordem que está sendo despachada.
- **productId**: ID do produto que está sendo despachado.
- **orderCode**: Código da ordem para identificação.
- **location**: Localização de onde o produto foi despachado.
- **quantity**: Quantidade do produto que está sendo despachada.
- **requestedQuantity**: Quantidade originalmente solicitada para o despacho.
- **dispatchedDate**: Data e hora do despacho.
- **quantityTolerance**: Tolerância permitida na quantidade de produtos despachados.
- **meta**: Um campo para informações adicionais, como manuseio especial ou prioridade do despacho.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/dispatch-a-product.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>