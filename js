alert("Menssager")   //Mostrar uma messagem de alertar. Ele esconde o conteudo (str)

comfirm("Menssager")   //Comfrimar ou cancelar menssager de alerta (str)

pronpt("menssger")   //obter por menssager de alerta (str)

Document.write("Menssager") ///escrever no body
|
-> Document.write("<div>"conteudo"</div>")  ///é possivel útilza tags


///Formatação
var.toFixed(n)  ///aredondar par nessima casa

Number.perseInt(n)   ///Transforma em float

Number.parseFloat(n)  ///INT

Number(n)   ///O js decide de acordo com o numero

String(n)  ///Transforma em string

n.toString() ///para colocar str em outra var


///array
array.lengt   ///Tamanho do array

///Operadorees
5 == '5' ///true tem o mesmo peso
5 === '5' ///False, identificador restrito

///logico
! ///not
&& ///and
|| ///or

///ternario
<teste> ? <true> : <false>)

///Documento
'Menssager ${var}' //Variavel na menssagem


### DOM
Documenet object model

///Preciso fazera árvore dom

Window : [location, history, documnet]
document : [html]
html : [head, body]
head : [meta, title]
body : [<tags html>]
p : [strong]

///selecionando
|> getElementsByTagName()[<n>] ///tag do html [<h1>, <p>]. Consigo selecionar qual é pelo índice
   getElementById()   ///pega pelo id ('font')
   getElementsByClassName()   ///pegar pela class
   getElementsByName() ///pegar por nome
   
  
///style no js
<var>.style.color = 'blue' /// exemplo
|
///posso juntar
     <var> = window.document.getElementsByName().style.color = 'blue'

///Seletores
var t = window.document.querySelector('div#<id_name>') (id = .), (class = #)
      t.syle.color = '<color>'

<var.innerText> ///copiar a escrita na tag, tbm modifica
<var.innerHTML> ///copiar o que esta na tag, tbm modifica
