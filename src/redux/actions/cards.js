import { SET_DECK, FLIP_CARD, MATCH, NOT_MATCH } from "../_constants/constants";

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

export function match() {
  return {
    type: MATCH,
  };
}

export function notMatch() {
  return {
    type: NOT_MATCH,
  };
}
