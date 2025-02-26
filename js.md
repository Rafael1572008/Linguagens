## 📌 Alertas e Diálogos

- `alert("Mensagem")` → Exibe um alerta
- `confirm("Mensagem")` → Exibe um alerta com "OK" e "Cancelar" (retorna true/false)
- `prompt("Mensagem")` → Exibe um input e retorna o valor digitado

## 📌 Manipulação do Documento

- `document.write("Mensagem")` → Escreve no body
- `document.write("<div>Conteúdo</div>")` → Permite tags HTML

## 📌 Conversão de Tipos

- `num.toFixed(2)` → "10.57" (Arredonda)
- `Number.parseInt("10.56")` → 10 (Para inteiro)
- `Number.parseFloat("10.56")` → 10.56 (Para float)
- `Number("123")` → 123 (JS decide o tipo automaticamente)
- `String(123)` → "123" (Para string)
- `num.toString()` → "10.567" (Para string)

## 📌 Arrays

- `array.length` → Retorna tamanho do array

## 📌 Operadores

### Comparadores

- `5 == "5"` → true (Compara valor, ignora tipo)
- `5 === "5"` → false (Compara valor e tipo)

### Operadores Lógicos

- `!false` → true (NOT)
- `true && false` → false (AND)
- `true || false` → true (OR)

### Operador Ternário

- `var resultado = 10 > 5 ? "Maior" : "Menor";` → Retorna "Maior"

## 📌 Template Strings

- `var nome = "João"; console.log(`Olá, ${nome}!`);` → Retorna "Olá, João!"

## 📌 DOM (Document Object Model)

### Estrutura do DOM

- Window → [location, history, document]
- document → [html]
- html → [head, body]
- head → [meta, title]
- body → [<tags html>]
- p → [strong]

### Selecionando Elementos

- `document.getElementsByTagName("h1")[0]` → Pega pelo nome da tag
- `document.getElementById("meuId")` → Pega pelo ID
- `document.getElementsByClassName("minhaClasse")[0]` → Pega pela classe
- `document.getElementsByName("meuNome")[0]` → Pega pelo atributo name

## 📌 Estilizando com JS

- `elemento.style.color = "blue";` → Modifica a cor do elemento
- `document.querySelector("#meuId").style.color = "red";` → ID → #
- `document.querySelector(".minhaClasse").style.color = "green";` → Classe → .
- `elemento.innerText = "Novo Texto";` → Modifica o texto visível
- `elemento.innerHTML = "<strong>Novo Conteúdo</strong>";` → Modifica o conteúdo HTML

## 📌 Eventos
Evento é tudo aqulo que pode acontecer com essa div

- Evento com mouse:
---Mouseenter -> mouse entra na div
---mousemove -> Mouse se movimenta na div
---mousedown -> evento de pegar
---mouseip -> evento de soltar
---click
---mouseout -> mouse fora da div

## 📌 Funções
So iram ser execultadas quando o evento ocorrer
- <div id="area" onclick="clicar()"> -> exemplo

- 'function acao(param){
-  '<COD>'
}'

### 📌 Ouvidores
Eles ficam prestando atenção no evento, dispensão a nessecidade de
colcoar a funçõa ("on<event>") na tag

- '<var>.addEventListener("<event_name>", "<function_name>")'

### ERROS
- Console do DOM (navegador)

## Inputs
- '<input type="number" name="" id="">' -> pegar input tipo number
