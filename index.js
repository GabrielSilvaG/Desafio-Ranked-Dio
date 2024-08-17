let victory = 101
let defeat = 1

ranked(victory, defeat)

function ranked() {
    let saldoVitoria = victory - defeat
    let position;

    if(saldoVitoria < 10) {
        position ="Ferro"
    } else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
        position ="Bronze"
    } else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
        position ="Prata"
    } else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
        position ="Ouro"
    } else if (saldoVitoria >= 81 && saldoVitoria <= 90) {
        position ="Diamante"
    } else if (saldoVitoria >= 91 && saldoVitoria <= 100) {
        position ="Lendário"
    } else {
        position ="Imortal"
    }

    console.log(`O Herói tem de saldo de ${saldoVitoria} vitorias, está no nível ${position}`)
}





