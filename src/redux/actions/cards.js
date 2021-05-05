import { SET_DECK, FLIP_CARD, RESTART } from "../constants/constants";
import { deck } from "../data/deck";

export function setDeck() {
  return {
    type: SET_DECK,
    payload: deck,
  };
}

export function flipCard(index) {
  return {
    type: FLIP_CARD,
    payload: index,
  };
}

export function restart() {
  return {
    type: RESTART,
  };
}
