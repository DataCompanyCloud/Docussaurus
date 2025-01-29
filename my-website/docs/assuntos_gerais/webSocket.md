---
title: WEBSOCKET
sidebar_label: WebSocket
---

#### O que são WebSocket?

**WebSocket** é um protocolo de comunicação que permite uma **conexão bidirecional** e em tempo real entre o cliente (navegador, aplicativo) e o servidor. Ao contrário do HTTP tradicional, onde a comunicação é baseada em requisições e respostas, o **WebSocket** permite que tanto o cliente quanto o servidor possam enviar e receber mensagens em tempo real, sem a necessidade de repetidas requisições HTTP.

**WebSocket** permite que o servidor envie informações ao cliente assim que algum dado ou evento importante ocorrer. Isso é chamado de **comunicação em tempo real**.

### Diferença entre HTTP e WebSocket
| HTTP | WebSocket |
|----------|----------|
| Comunicação unidirecional (cliente faz a requisição e o servidor responde).  | Comunicação bidirecional (cliente e servidor podem enviar mensagens a qualquer momento).  |
| Cada requisição HTTP estabelece uma nova conexão e fecha após a resposta.  | Uma vez estabelecida a conexão WebSocket, ela permanece aberta até ser fechada.  |
| Baseado em requisições/respostas (cliente sempre inicia a comunicação).  | Uma vez estabelecida a conexão WebSocket, ela permanece aberta até ser fechada.  |
:::tip
  Você pode aprender mais a fundo sobre requisições HTTP **[aqui!](./http.md)**
:::

### Conetando-se ao WebSocket

<details>
<summary>WebSocket</summary>

Para ilustrar como utilizar o WebSocket, vamos continuar usando nossa ferramenta **Postman** e criar uma nova request.

Também usaremos uma API pública, para receber atualizações em tempo real sobre transações de criptomoedas.

```bash
wss://stream.binance.com:9443/ws/btcusdt@trade
```

:::tip
  Você pode aprender mais a fundo sobre como utilizar o **Postman** para criar Collections e Folder **[aqui!](./postman.md)**
:::
- Crie uma nova request. Quando criar, automaticamente pedirá para criar uma nova **Collection** ( requisições **Http** não devem ser misturadas com **WebSocket**).
    - renomeie a **Collection** para WebSocket.
- Trocar o método da requisição Http pelo WebSocket.
- Copiar a URL para o Postman.
- Conectar-se ao servidor.

![Postman](@site/static/img/create-request-websocket.png)
![Postman](@site/static/img/save-request-websocket.png)
![Postman](@site/static/img/connecting-request-websocket.png)
![Postman](@site/static/img/connected-request-websocket.png)
</details>

<details>
<summary>Fluxo do WebSocket</summary>

```bash
wss://stream.binance.com:9443/ws/btcusdt@trade
```

**Conectando-se ao servidor:**
 - A URL usa o protocolo wss://, que indica uma conexão WebSocket segura (WebSocket over SSL/TLS).
 - A conexão é feita para o servidor **stream.binance.com** na porta 9443, que é o ponto de entrada para as conexões WebSocket da Binance.

**Especificando o Canal de Dados:**
 - O trecho **/ws/btcusdt@trade** indica o canal específico ao qual você está se conectando.
 - Nesse caso, **btcusdt** é o par de negociação, significando que você está interessado em dados de transações para o par Bitcoin/USDT.
 - O sufixo **@trade** indica que você está se inscrevendo para receber eventos de transação. Cada mensagem que você receberá via WebSocket será uma notificação de um trade que acabou de ocorrer no mercado BTC/USDT.

**Recebendo Mensagens em Tempo Real:**
 - Após a conexão ser estabelecida, você começará a receber mensagens **JSON** em tempo real. Cada mensagem representa uma transação (compra ou venda) ocorrida no par BTC/USDT.

**Interpretação dos Dados Recebidos:**
 - Cada mensagem que chega representa uma nova transação, e você pode usá-las para construir gráficos em tempo real, atualizar tabelas de preços, ou executar algoritmos de trading.

O WebSocket é ideal para aplicações que exigem atualizações instantâneas, como chats, jogos online, atualizações de preços em tempo real ou notificações.
</details>