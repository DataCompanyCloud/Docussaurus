---
title: All locations from product
sidebar_label: get_get-all-locations-from-product
---

### Rota para obter todas as localizações da mercadoria

Quando você desejar obter uma localização de algum produto, você pode usar essa rota.

#### Parâmetros na URL

Essa rota com o método **GET** utiliza parâmetros na URL, que contém o valor para **procurar**. Esse parâmetro será inserido diretamente na URL, como parte do caminho da requisição.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Obter Localização</summary>

- Você precisa passar o valore de **search** na URL.

```javascript
http://seu-servidor/api/get-all-locations-from-product/471714614874545415416413413341
```

- **search**: O valor passado na URL será o identificador do produto que você deseja consultar.

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Como você está usando um método GET com parâmetros na URL, não é necessário enviar nada no corpo (Body) da requisição. Tudo que o método precisa está sendo passado diretamente na URL.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/stock-get-all-locations-from-product.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>