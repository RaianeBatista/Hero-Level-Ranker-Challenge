let nomeHeroi = 'Goku';
let nivelXP = 4000;


if (nivelXP < 1000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Ferro  XP');
} else if (nivelXP >= 1001 && nivelXP < 2000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Bronze XP');
} else if (nivelXP >= 2001 && nivelXP < 5000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Prata XP');
} else if (nivelXP >= 5001 && nivelXP < 7000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Ouro XP');
} else if (nivelXP <= 7001 && nivelXP < 8000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Platina XP');
} else if (nivelXP <= 8001 && nivelXP < 9000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Ascendente XP');
} else if (nivelXP <= 9001 && nivelXP < 10000) {
  console.log('O Herói ' + nomeHeroi + 'está no nível Imortal XP');
} else {
  console.log('O Herói está no nível Radiante');
}
