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
}
```

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
