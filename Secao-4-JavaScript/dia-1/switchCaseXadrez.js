let pecaXadrez;

pecaXadrez = "1";

pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
  case "rei":
  case "king":
    console.log("Pode mover em qualquer direção, apenas 1 casa!");
    break;
  case "rainha":
  case "queen":
    console.log(
      "Pode mover em qualquer direção enquanto estiverem vazias(horizontal, vertical e diagonal)."
    );
    break;
  case "torre":
  case "tower":
    console.log("Pode mover em linha reta se estiver vazia as casas.");
    break;
  case "bispo":
  case "bishop":
    console.log(
      "Pode na diagonal nas casas vazia e da mesma cor que ele esta, nao é aceita troca de cor."
    );
    break;
  case "cavalo":
  case "knight":
    console.log(
      'Pode se mover em "L", duas casas a frente e uma a direita ou esquerda.'
    );
    break;
  case "peao":
  case "pawn":
  case "peão":
    console.log(
      "No inicio da rodada pode se mover 2 casas a frente e o restante 1 casa."
    );
    break;
  default:
    console.log("Peça invalida! - Invalid piece!");
}
