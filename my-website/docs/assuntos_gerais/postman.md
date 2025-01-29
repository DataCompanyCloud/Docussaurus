---
title: POSTMAN
sidebar_label: Postman
---

**Postman** é uma ferramenta de software projetada para facilitar o teste de APIs (**Interface de Programação de Aplicações**). Ela permite criar, enviar e analisar requisições para APIs de forma prática e intuitiva.

**Principais Funcionalidades do Postman:**

- **Testes de APIs**: O Postman permite que os usuários enviem requisições a APIs e verifiquem as respostas, garantindo que as APIs funcionem conforme esperado.
- **Organização de Requisições**: Usuários podem agrupar requisições relacionadas em coleções para facilitar o gerenciamento e a reutilização.
- **Ambientes**: A ferramenta permite a criação de ambientes configuráveis, onde variáveis como URLs e credenciais podem ser armazenadas e reutilizadas em diferentes contextos.
- **Documentação**: O Postman pode gerar documentação automática da API, fornecendo informações úteis sobre como utilizá-la.
- **Automação de Testes**: Usuários podem escrever scripts para validar respostas de APIs e automatizar testes, aumentando a eficiência no desenvolvimento.
- **Monitoramento**: O Postman possibilita monitorar o desempenho da API ao longo do tempo, enviando notificações em caso de falhas.

### Iniciando no Postman:

Primeiramente, faça a **instalação** do aplicativo clicando [aqui!](https://www.postman.com/downloads/).

:::warning
Caso apareça um aviso de **bloqueio de firewall**, clique em **permitir!**
:::

### Abra o Postman

Entre em sua conta, ou crie uma caso necessário.

<details>
  <summary>Criando sua conta</summary>

  - Você precisará de um e-mail para criar sua conta.

  ![Postman](@site/static/img/create-account-postman.png)

</details>

### Crie sua área de trabalho

O workspace no Postman é um ambiente de trabalho onde você organiza seus recursos relacionados a um projeto. Ele permite que você e sua equipe trabalhem de forma colaborativa ou individual, mantendo tudo centralizado e organizado.

<details>
  <summary>Criando seu workspace</summary>

  ![Postman](@site/static/img/create-workspace-postman.png)
  ![Postman](@site/static/img/create-workspace2-postman.png)
  ![Postman](@site/static/img/create-workspace3-postman.png)

</details>

### Crie uma Collection

As coleções facilitam o gerenciamento de várias requisições em um único projeto, permitindo a reutilização de testes e a automação de processos.

<details>
  <summary>Criando sua coleção</summary>

  ![Postman](@site/static/img/create-collection-postman.png)
  ![Postman](@site/static/img/explain-collection-postman.png)

  - Você pode renomear sua **Collection** para o nome que melhor representa sua necessidade.
    - Vamos renomear para **Aplicativo**.
  - É recomendado adicionar **Folders** para agrupar tipos diferentes de requisições, por exemplo:
    - A coleção **Aplicativo** pode possuir:
      - Pasta **Usuários**
      - Pasta **Produtos**
  - **Add request** permite criar uma nova requisição HTTP, onde você pode especificar o método (GET, POST, etc.).

  :::tip
  Você pode aprender mais a fundo sobre requisições HTTP **[aqui!](./http.md)**
  :::

</details>

### Gerenciando sua Collection

Vamos organizar a **collection** para atender nossas necessidades. Supomos que temos um **aplicativo**, e vamos lidar com **Clientes** e **Produtos**. A **collection** deverá conter requisições para as funcionalidades principais do aplicativo, organizadas em folders para facilitar o gerenciamento de testes.

<details>
  <summary>Gerenciar Coleção</summary>

  Renomeamos a **Collection** para **Aplicativo** e criamos duas folders chamadas de **Usuários** e **Produtos**. Além disso, criamos três requisições para cada pasta:

  - **POST** para enviar dados ao servidor para criar um novo recurso.
  - **GET** para recuperar dados do servidor sem modificar nada.
  - **PATCH** para atualizar parcialmente um recurso existente no servidor.

  ![Postman](@site/static/img/management-collection-postman.png)

  - Resultado das folders criadas e organizadas conforme nossa necessidade:

  ![Postman](@site/static/img/management-collection-postman.png)

  - Criamos nossa **collection** chamada **Aplicativo**, que representa sobre o que se tratam as requisições HTTP que virão a seguir.
  - Criamos nossas folders chamadas de **Usuários** e **Produtos**.
    - **Produtos** lidará somente com requisições relacionadas aos produtos.
    - **Usuários** lidará somente com requisições relacionadas aos usuários.
  - Criamos nossas requisições, que pelo nome, podemos identificar o que fazem e em que "setor" operam:
    - **Criar usuários** e **Criar produtos**.
    - **Pegar usuários** e **Pegar notas fiscais**.
    - **Modificar dados do usuário** e **Modificar dados do produto**.

</details>

### Documentação do Postman

A documentação do Postman é um recurso que permite descrever exemplos de uso para sua **collection** e **folders**.

Documentar collections e folders envolve adicionar descrições, instruções e detalhes úteis sobre os grupos de requisições, facilitando o entendimento e uso dos testes para outras equipes.

<details>
  <summary>Documentação</summary>

  Quando selecionamos a opção **View Documentation**, podemos acessar a documentação e alterar a descrição da **Collection**, **Folders** e **requisições Http** ( POST, GET e PATCH que criamos )

  Dessa forma, assim que você ou outro integrante da sua equipe for utilizar, conseguirá entender rapidamente o que está acontecendo.

  ![Postman](@site/static/img/explain2-documentation-postman.png)
</details>

<details>
  <summary>Compartilhar documentação</summary>

  Você pode compartilhar sua documentação, incluindo suas **Collections**, suas **Folders** e **Requisições Http**.
  Basta publicar sua documentação, e disponibilizar o link para os integrantes da sua equipe!

  Dessa forma, você e outro integrante da sua equipe pode utilizar o que construiu, e entender o que está acontencendo facilmente.

  ![Postman](@site/static/img/pt1-publishing-documentation-postman.png)
  ![Postman](@site/static/img/pt2-publishing-documentation-postman.png)
  ![Postman](@site/static/img/pt3-publishing-documentation-postman.png)

  - Agora você pode copiar a **URL** gerada, e compartilhar com o membro de sua equipe.
</details>

<details>
  <summary>Importar publicação</summary>

  Você pode importar uma publicação de outro integrante da equipe.

  - Copie a seguinte URL no seu navegador

  ```bash
  https://documenter.getpostman.com/view/8394118/2sAXxV5VLu
  ```
  ![Postman](@site/static/img/pt4-publishing-documentation-postman.png)

  - Importe para sua **Workspace** 

  ![Postman](@site/static/img/pt5-publishing-documentation-postman.png)
</details>