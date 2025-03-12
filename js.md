## 📌 Alertas e Diálogos

- `alert("Mensagem")` → Exibe um alerta
- `confirm("Mensagem")` → Exibe um alerta com "OK" e "Cancelar" (retorna `true/false`)
- `prompt("Mensagem")` → Exibe um input e retorna o valor digitado

## 📌 Manipulação do Documento

- `document.write("Mensagem")` → Escreve no `body`
- `document.write("<div>Conteúdo</div>")` → Permite tags HTML

## 📌 Conversão de Tipos

- `num.toFixed(2)` → `"10.57"` (Arredonda)
- `Number.parseInt("10.56")` → `10` (Para inteiro)
- `Number.parseFloat("10.56")` → `10.56` (Para float)
- `Number("123")` → `123` (JS decide o tipo automaticamente)
- `String(123)` → `"123"` (Para string)
- `num.toString()` → `"10.567"` (Para string)

## 📌 Arrays

- `array.length` → Retorna tamanho do array

###

## 📌 Operadores

### Comparadores

- `5 == "5"` → `true` (Compara valor, ignora tipo)
- `5 === "5"` → `false` (Compara valor e tipo)

### Operadores Lógicos

- `!false` → `true` (NOT)
- `true && false` → `false` (AND)
- `true || false` → `true` (OR)

### Operador Ternário

- `var resultado = 10 > 5 ? "Maior" : "Menor";` → Retorna `"Maior"`

## 📌 Template Strings

```javascript
var nome = "João";
console.log(`Olá, ${nome}!`);
```

## 📌 DOM (Document Object Model)

### Estrutura do DOM

- `Window` → `[location, history, document]`
- `document` → `[html]`
- `html` → `[head, body]`
- `head` → `[meta, title]`
- `body` → `[<tags html>]`
- `p` → `[strong]`

### Selecionando Elementos

- `document.getElementsByTagName("h1")[0]` → Pega pelo nome da tag
- `document.getElementById("meuId")` → Pega pelo ID
- `document.getElementsByClassName("minhaClasse")[0]` → Pega pela classe
- `document.getElementsByName("meuNome")[0]` → Pega pelo atributo name

## 📌 Estilizando com JS

- `elemento.style.color = "blue";` → Modifica a cor do elemento
- `document.querySelector("#meuId").style.color = "red";` → ID → `#`
- `document.querySelector(".minhaClasse").style.color = "green";` → Classe → `.`
- `elemento.innerText = "Novo Texto";` → Modifica o texto visível
- `elemento.innerHTML = "<strong>Novo Conteúdo</strong>";` → Modifica o conteúdo HTML

## 📌 Eventos

Eventos são interações que podem ocorrer em elementos do DOM.

### Eventos com o Mouse

- `mouseenter` → Mouse entra na div
- `mousemove` → Mouse se movimenta na div
- `mousedown` → Clique pressionado
- `mouseup` → Clique solto
- `click` → Clique no elemento
- `mouseout` → Mouse sai da div

## 📌 Funções

As funções só serão executadas quando o evento ocorrer.

```html
<div id="area" onclick="clicar()"></div>
```

```javascript
function acao(param) {
    // Código da função
    return <var> //Caso nescessite
}

let <var> = acao(<argument>)
```
- `function (n, m=0)` -> paramentros opcionais
- ` let v = function(x){ \\Algorith return }`

## This
- Em objetos, this se refereçe a instancia e pode acessar sua propriedades
- Podemos atribuir valores no próprio escopo

```Uso do this
let <nameObject> = {
    <firstAttribute>: <valeu>,
    <secondAtribute>: <value>,
    <thirdAtribute>: function () {
      console.log(" something " + this.nome);
    },
    <fourthObeject>: function () {
        console.log(this.<secondAtribute>)
        this.idade = 69
        console.log(this.<secondAtribute>)
    }
  };
  
  <nameObject>.<nAttribute>()
```


## ArrowFunction

```ArowFunction
<nameFunction> = (paramets) => {
    return // Algorith
  }
 
// Outra forma
const <nameFunction> = (a, b) => a*b

console.log(<nameFunction>(a, b))
```
- `Deixa sintaxe mais curta`
- `Outras coisas`

### 📌 Ouvidores de Eventos

Eles observam eventos e eliminam a necessidade de definir `on<evento>` nas tags HTML.

```javascript
var elemento = document.getElementById("meuId");
elemento.addEventListener("click", minhaFuncao);
```

## 📌 Erros

Para visualizar erros, use o console do navegador (`F12` → `Console`).

## 📌 Inputs

```html
<input type="number" id="meuInput">
```

```javascript
var valor = document.getElementById("meuInput").value;
\\Usamos o .value para pagar o que o user digitou, não útilizamos para valores que não tem um valor assosiado
```

## 📌 Condições

```javascript
if (condicao) {
    // Código executado se verdadeiro
} else {
    // Código executado se falso
}
```

```javascript
if (condicao) {
    // Código executado se verdadeiro
} else if (outraCondicao) {
    // Outro código
} else {
    // Código se todas forem falsas
}
```

```javascript
switch (expressao) {
    case valor1:
        // Código
        break;
    case valor2:
        // Código
        break;
    default:
        // Código padrão
        break;
}
```

## 📌 Construtores

- `var data = new Date();` → Retorna a data e hora atuais
- `data.getDate();` → Retorna o dia
- `data.getHours();` → Retorna a hora

## 📌 Adicionar uma div, class (clid) no html
- `<var>.setAttribute('<div, class>', '<name>')` -> tipo um #name ou .name. Isso seria a criação, dai vc usa var como se ele existisse no html
- `<var>.setAttribute('<prop>', '<varl.receber>')` -> Atribuir a regra css uma propriedade
- `<tag>.appendChild(<var>)` -> ela vai adicionar a regra css a tag no html

### propriedas pelo js
- `<var>.<style>.<propr>` -> Adicionar prorpiedade a varivel. caso for um propriedade com '-' a 2 segunda parte se junta com a primeria e começa com letra maiuscula (textAligh)


### repetrição

```While
while (expressao) {
    // Algorith
}
```

```do-While
do (expressao) {
    // Algorith
} while (expresão)
```

```for
for (start;test;incr){
    // algorith;
}
```

```for in
for (let <var in <array>){
    // algorith
}
```
ele é diferente do python, ele percorre o índice, não o conteúdo

## 📌 Variaveis compostas (array, vetor)
Variavel composta: é uma var que tem varios elementos, cada elemento é composto por um índice e coteudo

- `let <var> = [<var1>, <var2>, <varn>]` -> Definição
- `<var>[i] = <var1>` -> acrescentar (ele cria o índice, caso não exista)
- `<var>.push(<var>)` -> cria no útimo índice
- `<var>.lengt` -> contar os elementos
- `<vsr>.sort()` -> Ordenação, crescente
- `<var>.indexOf(<var>)` -> ele procura o elemento e retorna o índice. Caso não exista, ele retorna -1

## Estudar
Arrow functions
recursividade, função
