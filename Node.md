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
