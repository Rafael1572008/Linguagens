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

## Numeros aleatorios

### Gerar valores aleatórios
```python
np.random.seed(123) # Os valores aletorios sempre serão os mesmos
array = np.random.randint(1, 101, 20) # de 1 a 100, tendo 20 valores
```

### Valores aleatorios com certo padão
```python
array = np.random.normal(50, 25, 2000) #media de 10, com desvio de 2 e 20 valores
```

### Bonus, histograma
```python
import numpy as np
import matplotlib.pyplot as plt 

np.random.seed(123) # Os valores aletorios sempre serão os mesmos
array = np.random.randint(1, 101, 20) # de 1 a 100, tendo 20 valores


array = np.random.normal(50, 25, 2000) #media de 10, com desvio de 2 e 20 valores
plt.hist(array)
plt.show()
```

- Esse prog vai retorna um histograma

## Pandas
### Importar
```python
import pandas as pd
```

### Ler arquivos
```python
data = pd.read_csv('data/titanic/train.csv') # ler comma separated values, csv 
```

### Informações dos dados
```python
print(data) # Tabela dos dados
print(data.head()) # Início dos dados, Podemos definir n(int) como parametro para mostrar as n linhas iniciais
print(data.tail()) # Fim dos dados

data.info() # retorna as informações da tabela

print(data.columns) # Retornar as colunas
```
### Descrições da tabela

```python
print(data.describe()) # Resumo estatistico dos campos numéricos

print(data.describe(include='O')) # Mostrar colunas apenas que são do tipo String
```
### Renomear

```python 
data.rename({'Name': 'Nome', 'Sex': 'Sexo'}, axis=1, inplace=True) # Renomear coluna. Caso axis seja 0, ele modifica linha
```

## Selecionar coluna
```python
print(data['Name']) # selecionar coluna
print(data[['Name', 'Sex']]) # selecionar colunas
```

## Funções matemáticas
```python
print(data['Age'].mean()) #Média

print(data['Age'].sum()) #soma

print(data['Age'].count()) #contar

print(data['Age'].median()) #Mediana

print(data['Age'].mode()) #Moda

print(data['Age'].max()) #Max

print(data['Age'].min()) #Minimo

print(data['Age'].idxmin()) #Indice de quem tem a menor idade

print(data['Age'].idxmax()) #Indice de quem tem a maior idade
```

```python
import pandas as pd

data = pd.read_csv('tralalelo/train.csv')


# Selecionando pelo index
print(data.iloc[630]) #pegar por id

print(data.iloc[[630]]) #pegar por id e pegar linha

print(data.iloc[[630, 803]]) #pegar por id e mostrar dois registros

print(data.iloc[:3]) #pegar por id e pegar linha

print(data['Name'].iloc[2]) #pegar valor da coluna do id selecionado

# Operador de seleção loc
print(data[['Name', 'Sex']].loc[data['Sex'] == 'male']) # where de SQL em pandas 

print(data[['Name', 'Sex']].loc[(data['Age'] >= 3) & (data['Age'] <= 10) & (data['Survived'] == 1)]) # where de SQL em pandas com mais de um if
```
## Loc
```python
import pandas as pd

data = pd.read_csv('train.csv')

# 'Where' filtrar dados
print(data[['Age', 'Fare']].loc[data['Sexo'] == 'male'])

# 'Where' filtrar dados, Condição Compostas
print(data[['Age', 'Sexo', 'Fare', 'Pclass', 'Survived']]\
      .loc[(data['Age'] >= 3) & (data['Age'] <= 10) & (data['Survived'] == 1)])
# \: Continua o cond na linha de baixo

#negação
(data['Survived'] == 1)]

# exemplo
print(data[['Age', 'Sexo', 'Fare', 'Pclass', 'Survived']]\
      .loc[(data['Age'] > 14) \
           & (data['Survived'] == 1) \
            & ~(data['Sexo'] == 'female') \
                & (data['Pclass'] == 3)].count())
```

## Map e  (Substituição de Valores)
```python
# Substituir registro, passamos um dicionário para a troca (Ainda não aplicado)
print(data['Sexo'].map({'male': 'masculino', 
                        'female': 'feminino'}))

# Substituir registro, podemos  passar uma lista de quais alterar, e passar o valor atualizado
#print(data['Sexo'].replace(['male', 'female'], 'pessoa'))

# Ortogando as alterações
print(data['Sexo'].replace({'male': 'masculino',
                             'female': 'feminino'}, inplace=True))

print(data[['Nome', 'Age', 'Sexo']])
```

## GrouopBy
```python
import pandas as pd

data = pd.read_csv('C:/Users/rafael.pires/Documents/Udemy/Progs/train.csv')

print(data)

# Agrupando por sexo e contando
print(data.groupby('Sex').count())

# Agrupando masi de um valor 
print(data.groupby(['Sex', 'Pclass']).count())
```
Obs: As funções de cima não aplicam nas de baixo caso vc não salve em uma variável

## Crosstab
```python
import pandas as pd

data = pd.read_csv('C:/Users/rafael.pires/Documents/Udemy/Progs/train.csv')

# Tabela cruzada (Sobreviveu x classe)
print(pd.crosstab(data['Survived'], data['Pclass'], margins=True))  # Margins 'True' Somatorio das colunas
# L x C

print()

# Tabela cruzada (Sobreviveu x Sexo)
print(pd.crosstab(data['Survived'], data['Sex'], margins=True))
# L x C
```
OrderBy
```python
import pandas as pd

data = pd.read_csv('C:/Users/rafael.pires/Documents/Udemy/Progs/train.csv')

# Ordernar dados
print(data[['Age', 'Sex', 'Pclass', 'Survived']].sort_values('Age', ascending=False)) # False: decrecente

#Ordenar por indice
print(data[['Age', 'Sex', 'Pclass', 'Survived']].sort_index(ascending=True))
```
