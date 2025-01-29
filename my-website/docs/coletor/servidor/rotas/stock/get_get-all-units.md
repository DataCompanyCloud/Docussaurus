---
title: All units
sidebar_label: get_get-all-units
---

### Rota para obter todos as unidades

Quando você desejar obter todas as unidades, você pode usar essa rota.

#### Parâmetros na URL

Essa rota com o método **GET** utiliza parâmetros na URL. Você **não precisa** passar nenhum parâmetro adicional na URL.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Obter todas as unidades</summary>

```javascript
http://seu-servidor/api/get-all-units
```

#### Autenticação

- O método exige um **token ( gerado com a requisição login )**, então você precisa incluir o token no **headers** da requisição para que ela seja aceita pelo servidor.

#### Corpo da Requisição (Body)

- Como você está usando um método GET, não é necessário enviar nada no corpo (Body) da requisição. Tudo que o método precisa está sendo passado diretamente na URL.

#### Enviar a Requisição:

- Clique em Send e você verá a resposta do servidor.

![Postman](@site/static/img/stock-get-all-units.png)

:::warning
Lembre-se! Você está manipulando uma requisição de um usuário. Insira o **token único** dele no **Headers**.
:::
| Key | Value |
|----------|----------|
| Authorization  | Bearer **token único** |

</details>