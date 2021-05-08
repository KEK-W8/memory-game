import { SET_DECK, FLIP_CARD, MATCH_CHECK } from "../_constants/constants";

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

export function matchCheck() {
  return {
    type: MATCH_CHECK,
  };
}
