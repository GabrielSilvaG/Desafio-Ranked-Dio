# Sistema de Classificação de Heróis

Este projeto é um simples sistema de classificação de heróis baseado no saldo de vitórias e derrotas de um personagem. Dependendo do saldo, o herói é classificado em diferentes níveis, desde "Ferro" até "Imortal".

## Funcionalidades
O sistema calcula o saldo de vitórias do herói e determina o nível de classificação com base nas seguintes regras:

- **Ferro: Saldo de vitórias menor que 10**
- **Bronze: Saldo de vitórias entre 11 e 20**
- **Prata: Saldo de vitórias entre 21 e 50**
- **Ouro: Saldo de vitórias entre 51 e 80**
- **Diamante: Saldo de vitórias entre 81 e 90**
- **Lendário: Saldo de vitórias entre 91 e 100**
- **Imortal: Saldo de vitórias maior que 100**
  
## Como Funciona:

As variáveis victory e defeat armazenam o número de vitórias e derrotas do herói, respectivamente.
A função **ranked()** calcula o saldo de vitórias subtraindo as derrotas das vitórias.
Com base no saldo, o código atribui um nível de classificação ao herói.
A classificação é impressa no console junto com o saldo de vitórias.
