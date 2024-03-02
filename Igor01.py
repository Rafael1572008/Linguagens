class Veiculo:
    def __init__(self, marca, ano, preco):
        self.marca = marca
        self.ano = ano
        self.preco = preco

    def info(self):
        return f"Marca: {self.marca}\nAno: {self.ano}\nPreço: {self.preco}"    

class Carro(Veiculo):
    def __init__(self, marca, ano, preco, modelo, potencia):
        super().__init__(marca, ano, preco)
        self.modelo = modelo
        self.potecia = potencia

    def info(self):
        return super().info() + f"\n Modelo: {self.modelo}\nPotencia: {self.potecia}"

class Moto(Veiculo):
    def __init__(self, marca, ano, preco, cilindrada):
        super().__init__(marca, ano, preco)
        self.cilindrada = cilindrada

    def info(self):
        return super().info() + f"\nCilindrada: {self.cilindrada}"
    
chevolet = Carro("Tesla", 2023, 40000, 3, "629(WLTP)")
print(chevolet.info())
