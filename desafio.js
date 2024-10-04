let nomeHeroi = 'Goku';
let nivelXP = 11000;

// Passo 1: Criar um objeto para mapear os intervalos de XP para os níveis
const niveis = {
  Ferro: [0, 1000],
  Bronze: [1001, 2000],
  Prata: [2001, 5000],
  Ouro: [5001, 7000],
  Platina: [7001, 8000],
  Ascentente: [8001, 9000],
  Imortal: [9001, 10000],
  Radiante: [10001, Infinity],
};

// Passo 2: Iterar sobre as chaves do objeto para encontrar o nível correspondente ao nivelXP
let nivelEncontrado = ' ';
for (let nivel in niveis) {
  let [min, max] = niveis[nivel];
  if (nivelXP >= min && nivelXP <= max) {
    nivelEncontrado = nivel;
    break;
  }
}

// Passo 3: Imprimir a mensagem com o nível encontrado
console.log(`O Herói ${nomeHeroi} está no nível ${nivelEncontrado} XP`);
