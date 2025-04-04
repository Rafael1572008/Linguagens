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

## enviar html
```javascript
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
```
Isso é necessario para pegar o diretório padrão

```javascript
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})
```
- `sendFile` Responsavel por mostrar o html

## MySql
`MySql -u root -p` + enter: Para entrar pelo terminal

## Usando sequelize e mysql12
```javascript
import { Sequelize } from "sequelize"; //Biblioteca para fazer a conexao com o DB
```
```javascript
const sequelize = new Sequelize('test', 'root', '12345', {
    host: "localhost", //local
    dialect: "mysql" //Tipo do banco
}) // sequelize ira ser o objeto de conexao
```
O Sequelize recebe 4 parametros
1. `test` <- nome do banco
2. `root` <- Usuario
3. `12345` <- senha do banco
4. `{ host: "localhost, dialect: "mysql" }` <- local e tipo do banco

```javascript
sequelize.authenticate().then(function(){
    console.log("Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar! " + erro)
}) // tipo um if
```
É tipo um if, mas só com mais desenvolvimento
