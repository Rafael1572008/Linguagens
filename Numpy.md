# Apredizado sobre data science

- `import numpy as np`

## Array inteligente
```python
///Python normal
array = [1, 2, 3, 4, 5]
print(array*2)
/// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

///Numpy
array = [1, 2, 3, 4, 5]
array = np.array(array)
print(array*2)
/// [2, 4, 6, 8, 10]
```
Obs: Pode ser qualquer operação

## Operações
```python
np.sqrt(array) //Tira o raiz quadrada de todos os numeros do array
np.ceil(array) //Arredonda para cima
np.floor(array) //Arredonda para baixo
np.around(array) //Arredonda normalmente
```

## Numpy, Indexixando e cortando
```python
lista = np.array(list(range(1, 6)))

array[:2]
/// pega do anterior do indice ao final

array[::-1] inverso da lista
// inverter lista

array[::2]
// Vai de 2 em 2

array[2:]
/// Pega do início e vai até o final
```

## Array multiplas dimensões
```python
lista = np.array(list(range(1, 12)))

array.shape
// Retona quantas linhas tem na coluna

remolde = array.reshape(6, 2)
// 6 linhas para 2 colunas
// array([[ 1,  2],
       [ 3,  4],
       [ 5,  6],
       [ 7,  8],
       [ 9, 10],
       [11, 12]])
```

## Numpy array e boolena
```python
aray = np.array(list(range(1, 12)))

cond = array > 5
Rrtorna em boleano, em cada indice, se a condição é false ou true

cond = (array > 5) & (array < 9)
//Combinar
&: and
/: or



```
