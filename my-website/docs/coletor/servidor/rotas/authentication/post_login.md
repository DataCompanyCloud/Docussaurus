---
title: Login
sidebar_label: post_login
---

### Rota para autenticar o usuário

Exceto excessões, sempre que for necessário lidar com um usuário ou pedido que exija permissão do mesmo, é preciso gerar seu **token** único de identificação.

As principais razões pelas quais você precisa de um token para manipular outras requisições com um usuário específico:

#### Segurança:
- O token evita que qualquer um possa acessar ou modificar dados sem estar autenticado. Apenas o usuário que possui um token válido pode fazer isso.
- Usar tokens é mais seguro do que enviar credenciais de login (nome de usuário/senha) em cada requisição.

#### Autorização Baseada em Permissões:
- O token geralmente contém informações sobre as permissões (por exemplo, se ele é um administrador ou um usuário regular). O servidor pode usar essas informações para determinar o que o usuário pode fazer.

#### Validade e Expiração:
- Tokens geralmente têm um tempo de expiração, o que melhora a segurança, pois uma sessão não pode durar indefinidamente. Isso protege contra o uso de tokens comprometidos ou roubados.

#### Facilita o Uso de APIs
- O Postman ou qualquer aplicação cliente pode enviar requisições para diferentes endpoints da API e, desde que o token seja incluído no cabeçalho, o servidor autorizará a ação.
- Isso simplifica a interação com APIs que protegem dados sensíveis ou recursos exclusivos para determinados usuários.

### Exemplo de Como Isso Funciona no Postman

<details>
<summary>Fazer login</summary>
    
- Faça uma requisição POST para o endpoint de login:
```bash
https://api.exemplo.com/login
```
- passando o seguinte parâmetro para o **body**
```javascript
{
"username": "usuario_exemplo",
"password": "senha_exemplo"
}
```

- A resposta irá incluir o token do usuário específico.
```javascript
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
![Postman](@site/static/img/generate-token-post-login.png)

</details>

<details>
<summary>Usar o Token nas Requisições</summary>

Nas requisições subsequentes que precisam de autenticação, você adiciona o token ao cabeçalho da requisição:

- Entre na requisição que deseja fazer.
- Vá para a aba Headers no Postman.
- Adicione o cabeçalho Authorization com o valor gerado:

![Postman](@site/static/img/validate-token-post-login.png)

```javascript
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```


:::warning
O termo "Bearer" em **Bearer** [ **seu token gerado** ] faz parte de um esquema de autenticação HTTP que utiliza tokens para permitir acesso a recursos protegidos.
:::
</details>

#### Agora você pode utilizar os tokens em todos as suas requisições Http.

:::warning
Lembre-se! Cada usuário possui um **token único**, é necessário gerar um novo sempre que lidar com um usuário diferente.
:::