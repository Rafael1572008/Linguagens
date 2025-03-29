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
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        float sal = teclado.nextFloat();
        teclado.nextLine(); // Consumir a quebra de linha
        String name = teclado.nextLine();

        System.out.format("A nota do %s é %.1f", name, sal);
    }
}
```

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

