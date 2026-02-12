🏎️ Mario Kart – Desafio de Projeto
📌 Sobre o Projeto

Este projeto é uma simulação de corrida inspirada na franquia Mario Kart, desenvolvida como desafio proposto pelo Felipão.

O objetivo é criar a lógica de um jogo de corrida em JavaScript, considerando atributos específicos dos personagens e regras baseadas em tipos de pista e eventos aleatórios.

🎯 Objetivo

Simular uma corrida entre dois personagens do universo Mario Kart, utilizando regras de pontuação baseadas em:

🎲 Sorte (lançamento de dado)

🚀 Atributos individuais dos personagens

🛣️ Tipos de pista aleatórios

Ao final de 5 rodadas, vence quem tiver mais pontos acumulados.

👥 Personagens Disponíveis

Cada personagem possui três atributos:

Velocidade

Manobrabilidade

Poder

Personagem	Velocidade	Manobrabilidade	Poder
Mario	4	3	3
Peach	3	4	2
Yoshi	2	4	3
Bowser	5	2	5
Luigi	3	4	4
Donkey Kong	2	2	5
🕹️ Regras & Mecânicas
🎮 Jogadores

O sistema recebe dois personagens para disputar a corrida.

Cada personagem é representado por um objeto com seus atributos.

🛣️ Pista

A corrida possui 5 rodadas.

A cada rodada, é sorteado um tipo de bloco da pista:

RETA

CURVA

CONFRONTO

🎲 Mecânica das Rodadas
🟦 RETA

Cada jogador lança um dado de 6 lados.

Soma-se o valor do dado ao atributo Velocidade.

Quem tiver o maior resultado ganha +1 ponto.

🟨 CURVA

Cada jogador lança um dado de 6 lados.

Soma-se o valor do dado ao atributo Manobrabilidade.

Quem tiver o maior resultado ganha +1 ponto.

🟥 CONFRONTO

Cada jogador lança um dado de 6 lados.

Soma-se o valor do dado ao atributo Poder.

Quem perder, perde -1 ponto.

Nenhum jogador pode ter pontuação menor que 0.

🏆 Condição de Vitória

Após as 5 rodadas:

Vence o jogador com maior pontuação.

Em caso de empate, a corrida termina empatada.

🛠️ Tecnologias Utilizadas

JavaScript (Node.js ou navegador)

Lógica de programação

Manipulação de objetos

Geração de números aleatórios

▶️ Como Executar o Projeto
1️⃣ Clone o repositório
git clone https://github.com/AguinaldoKonzo38/projeto-mario-kart.git

2️⃣ Acesse a pasta do projeto
cd projecto-mario-kart

3️⃣ Execute o arquivo principal

Se estiver usando Node.js:

node index.js

projecto-mario-kart/
│
├── src/
│   └── index.js
│
├── package.json
└── README.md