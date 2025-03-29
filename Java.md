# Java

## Comentarios
- `//` Comentar linha
- `/* */` Comentar em massa
- `/** */` Comentario para documentação.
### Exemplo
```Java, comentario
/**
@autor Rafael Pires
@version 1.0
@since 2015-03-29
*/
```
  
## Layout

```Java, Base
public class Teste2 {

    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

```

## Declaração
<TP> <var> = 3;

### Tipos primitivos
![TP](https://files.passeidireto.com/e3da5e7f-2144-4f79-9230-dea2f2dd93f4/e3da5e7f-2144-4f79-9230-dea2f2dd93f4.png)

### Formatação
- `%.2f` Formatar para 2 casas decimais
- `\n` Quebra de linha

## Saida 
System.out.print("%.2f", <var>)
System.out.print("<frase>" + <var>)
System.out.format("%s", <vare>) Para colocar tipos de texto

## Entrada
1. Importe a biblioteca
2. Crie a classe
3. Cada entrada é separada o ' ' e a ordem e estritametne importante
4. atribua cada dado a uma variavel

### Exemplo
```Exemplo_entrada
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        float sal = teclado.nextFloat();
        String name = teclado.nextLine();

        System.out.format("A nota do %s é %.1f", name, sal);
    }
}
```

## Estudo
- O java é sensitive. Caso a primeira letra esteja em maiuscula, ou é classe ou é interface (nomenclatura)
- Caso seja tudo em maiusculo, a sera uma constante
- Caos tudo em minusculo, sera o nome de um pacote


- `System.out.println("...");` Printar na tela, Pode tirar o 'ln' para que ele não pule linha

## Pacotes
- `public class <MyClass> extends javax.swing.JFrame` Permite criar tela de app
- `import java.util.Scanner;` Entradas

