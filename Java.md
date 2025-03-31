# Java

## Comentários
- `//` Comentar linha
- `/* */` Comentário em bloco
- `/** */` Comentário para documentação

### Exemplo
```java
/**
 * @author Rafael Pires
 * @version 1.0
 * @since 2015-03-29
 */
```

## Layout

### Estrutura básica
```java
public class Teste2 {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

## Declaração de Variáveis
```java
<TIPO> <variavel> = 3;
```

### Tipos primitivos
![Tipos Primitivos](https://files.passeidireto.com/e3da5e7f-2144-4f79-9230-dea2f2dd93f4/e3da5e7f-2144-4f79-9230-dea2f2dd93f4.png)

### Formatação
- `%.2f` Formatar para 2 casas decimais
- `\n` Quebra de linha

## Saída de Dados
```java
System.out.print(String.format("%.2f", <variavel>));
System.out.print("<frase>" + <variavel>);
System.out.format("%s", <variavel>); // Para imprimir strings
```

## Entrada de Dados
1. **Importe a biblioteca**
2. **Crie a classe**
3. **Cada entrada é separada por ' '** e a ordem é estritamente importante
4. **Atribua cada dado a uma variável**

### Exemplo
```java
import java.util.Scanner; // lib

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in); //criacao da classe

        float sal = teclado.nextFloat(); // primeira a tribuicao
        teclado.nextLine(); // Consumir a quebra de linha
        String name = teclado.nextLine();// segunda atribuicao

        System.out.format("A nota do %s é %.1f", name, sal); //saida
    }
}
```

## Conversões
```java
<new TIPO> <new_var> = Interger.to<NEWTIPO>(old_var);

// Exemplo
int idade = 30;
String valor = Integer.toString(30);
```
Observação: Em alguns casos 'to<new_TIPO>' pode ser parse, como o 'parseInt'

## Pre-incremetno e pos-incremento (Pode ser decremento)
 - `<var>++;`  Adiciona depos
 - `<var>++` Adicionar Primeiro

## Math
- `Math.PI` Valor de pi
- `Math.pow(x, y)` Potência
- `Math.sqtr(x)` Raiz quadrada
- `Math.cbrt()` Raiz cubica

Obs: - `Math.random()` Gera um numero entre 0 e 1

### Arredondamento
- `Math.abs(x)` Modulo
- `Math.floor` Arredondamento para baixo (Truncagem): 3.9 -> 3
- `Math.ceil` Arrendondar para cima: 4.2 -> 5
- `Math.round` Arrendondamento real

## Operadores

### operador ternario
```java
<TIPO> <var> = <cond> ? <caso_1> : <caso_2>; //Atribuição a <var>
```

```java
    String nome = "Rafael";
    String nome_2 = new String("Rafael");

    boolean r = (nome.equals(nome_2))?true:false;
```
Obs: O conteudo pode ser igual, mas a estrutura e diferente. O metodo `equals` serve para comparar o conteudo

- `<var1> == <var2>` Igualdade
- `<var1> != <var2>` Diferença


## Operador Logico
- `&&` and
- `||` or
- `^` caso tenha uma comparaçã de dois verdadeiros, ira dar `false`
- `!` NOT


## Estruturas Condicionais

### IF
```java
        Scanner teclado = new Scanner(System.in);

        int nasc = teclado.nextInt();
        int i = 2024 - nasc;

        if (i>18){
            System.out.println("Maior");
        } else {
            System.out.println("Menor");
        }

```

### Switch

```java
        Scanner teclado = new Scanner(System.in);

        int pernas = teclado.nextByte();

        String tipo = switch (pernas) {
            case 1 -> "Saci";
            case 2 -> "Bipede";
            case 4 -> "Quadrupedi";
            case 6, 8 -> "Aranha";
            default -> "ET";
        };

        System.out.println(tipo);
    }

```

### Switch "Certo"


```java
        Scanner teclado = new Scanner(System.in);

        int pernas = teclado.nextByte();

        String tipo;

        switch (pernas) {
            case 1:
                tipo = "Saci";
                break;
            case 2:
                tipo = "Bipede";
                break;
            case 4:
                tipo = "Quadrupedi";
                break;
            case 6, 8:
                tipo = "Aranha";
                break;
            default:
                tipo = "ET";
                break;
        }
        System.out.println(tipo);
```

## Laços de repetições
```java
 int cc = 0;

        while (cc < 4){
            System.out.println("camalhota " + (cc + 1));
            cc++;
        }

```





### Mudando fluxo
- `continue` faz com que passe para o próximo
- `break` Interompe
  
## Conceitos Importantes
- **Java é case-sensitive**.
  - Se a primeira letra for maiúscula, pode ser uma **classe** ou **interface** (padrão de nomenclatura).
  - Se todas as letras forem maiúsculas, é uma **constante**.
  - Se todas as letras forem minúsculas, é o nome de um **pacote**.

- `System.out.println("...");` Imprime no console e pula linha.
  - Remova `ln` (`System.out.print("...");`) para que não pule linha.

## Pacotes
- `public class <MinhaClasse> extends javax.swing.JFrame` Permite criar uma interface gráfica (GUI).
- `import java.util.Scanner;` Importa a classe para entrada de dados.
- `import Math` Importa regras aritimetricas

