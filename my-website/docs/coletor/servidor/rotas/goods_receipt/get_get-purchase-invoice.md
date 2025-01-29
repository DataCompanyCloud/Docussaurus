---
title: Purchase invoice
sidebar_label: get_purchase-invoice
---

### Rota para buscar a fatura da compra de um pedido

Quando você desejar obeter a fatura de uma compra, você pode usar essa rota.

#### Parâmetros na URL

Essa rota com o método **GET** utiliza o parâmetro na URL, que será o valor do **Código de barra**. Esse parâmetro será inseridos diretamente na URL, como parte do caminho da requisição.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Buscar fatura</summary>

- Você precisa passar o valor do **Código de barra** na URL.

```javascript
http://seu-servidor/api/complete-a-order/ABC-abc-1234
```

- **ABC-abc-1234** é o valor do código de barra para localizar a fatura.

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Como você está usando um método GET com parâmetros na URL, não é necessário enviar nada no corpo (Body) da requisição. Tudo que o método precisa está sendo passado diretamente na URL.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/goods-receipt-get-purchase-invoice.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>