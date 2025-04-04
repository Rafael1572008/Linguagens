# JavaScript

```Ele capacita fazer execultar codigos js fora do navegador```

## Export
Para exporta estrutas de uma arquivo ao outro

#### Aquivo 1
`Coloque um exporte na frente do que quer exportar`

```javascript
export function soma(a,b){
    return a+b
}
```

#### Arquivo 2
Para importa use, `import <obj> from './<arq1>.js';`

```javascript
import { soma } from "./somar.js";

console.log(soma(2, 3))
```

## HTTP do node
```javascript
import http from 'http'


http.createServer(function(req, res){
    res.end("Ola")
}).listen(8081)

console.log("server criado")
```
- `createServe` Para iniciar o server
- `listen(<int>)` Definir qual porta
- `end()` Saida

## Exepress

### instalação
``` npm install express --safe```

```javascript
import express from 'express'
const app = express()

// algorith

app.listen(8081)
```
Inciando o express
- `listen()` Sempre sera a ultima linha
- `localhost:<port>` comando para abir no navegador

## Exibir no terminal
Ultilizando uma função callback no listen, Podemos mostar menssagens e erros

```javascript
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
```
## Criar rota
```javascript
app.get("/", function(req, res){
    res.send("Seja bem vindo")
})
```
- `send` Envio

## Parametros
```javascript
app.get('/ola/:nome', function(req, res){
    res.send(req.params)
})
```
Explicação: Na URl, tera os parametros. O `req.params` pega eles e transforma em um `Json`

- Req: reponsavel por receber dados de uma requisição
