const player1 = {
    NAME: "Mário",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTUACAO: 0,
}

const player2 = {
    NAME: "peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTUACAO: 0,
}

const player3 = {
    NAME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTUACAO: 0,
}

const player4 = {
    NAME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTUACAO: 0,
}

const player5 = {
    NAME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTUACAO: 0,
}

const player6 = {
    NAME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTUACAO: 0,
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;

        case random < 0.66:
            result = "CURVA"
            break;

        default:
            result = "CONFRONTO"
            break;
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRacingEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🏁 RODADA: ${i}`)
        // Sortear 
        let block = await getRandomBlock()
        console.log(`BLOCO: ${block}`)

        // Rolar dado
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //Habilidades
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NAME, "VELOCIDADE", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NAME, "VELOCIDADE", diceResult2, character2.VELOCIDADE)

            if (totalTestSkill1 === totalTestSkill2) {
                console.log("Empate! Nenhum ponto ganho.")
            }
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NAME, "MANOBRABILIDDADE", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NAME, "MANOBRABILIDDADE", diceResult2, character2.MANOBRABILIDADE)

            if (totalTestSkill1 === totalTestSkill2) {
                console.log("Empate! Nenhum ponto ganho.")
            }
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + character2.PODER

            console.log(`${character1.NAME} confrontou com ${character2.NAME}`)

            await logRollResult(character1.NAME, "Poder", diceResult1, character1.PODER)
            await logRollResult(character2.NAME, "Poder", diceResult2, character2.PODER)

            if (powerResult1 > powerResult2 && character2.PONTUACAO > 0) {
                console.log(`${character1.NAME} venceu o confronto! ${character2.NAME} perdeu um ponto.`)
                character2.PONTUACAO--
            }

            if (powerResult2 > powerResult1 && character1.PONTUACAO > 0) {
                console.log(`${character2.NAME} venceu o confronto! ${character1.NAME} perdeu um ponto.`)
                character1.PONTUACAO--
            }

            if (powerResult1 === powerResult2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido.")
            }


        }

        // Verifica o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NAME} marcou um ponto`)
            character1.PONTUACAO++
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NAME} marcou um ponto`)
            character2.PONTUACAO++
        }
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= \n")
    }
}

async function declareWinner(character1, character2) {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
    console.log("Resultado final:")
    console.log(`${character1.NAME}: ${character1.PONTUACAO} ponto(s)`)
    console.log(`${character2.NAME}: ${character2.PONTUACAO} ponto(s) \n`)

    if (character1.PONTUACAO > character2.PONTUACAO)
        console.log(`${character1.NAME}, venceu a corrida! parabéns 🏆`)
    else if (character2.PONTUACAO > character1.PONTUACAO)
        console.log(`${character2.NAME}, venceu a corrida! parabéns 🏆`)
    else
        console.log("A corrida terminou em empate!")
}

(async function main() {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    console.log(`🏁🚨 Corrida entre ${player3.NAME} e ${player4.NAME} començando... \n`)

    await playRacingEngine(player3, player4)
    await declareWinner(player3, player4)
})()