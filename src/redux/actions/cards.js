import {
  SET_DECK,
  FLIP_CARD,
  KEEP_CLOSE,
  RESTART,
} from "../_constants/constants";

export function setDeck(deck) {
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

export function keepClose() {
  return {
    type: KEEP_CLOSE,
  };
}

export function restart() {
  return {
    type: RESTART,
  };
}
