import { SET_DECK, FLIP_CARD, MATCH, NOT_MATCH } from "../_constants/constants";
import { shuffledDeck } from "../deck.js";

const initialState = {
  deck: null,
  try: 1,
  guess1: null,
  guess2: null,
};

export default function cards(state = initialState, action) {
  switch (action.type) {
    case SET_DECK:
      return {
        ...state,
        deck: shuffledDeck,
      };
    case FLIP_CARD:
      let newState = { try: state.try + 1 };

      if (state.try % 2 === 1) {
        let cardClicked = state.deck.find((card, index) => {
          return index === action.payload;
        });

        return {
          ...newState,
          guess1: cardClicked.id,
          guess2: null,
          deck: state.deck.map((card, index) => {
            return index === action.payload
              ? { ...card, flipped: true }
              : { ...card, flipped: false };
          }),
        };
      } else {
        let cardClicked = state.deck.find((card, index) => {
          return index === action.payload;
        });

        return {
          ...newState,
          guess1: state.guess1,
          guess2: cardClicked.id,
          deck: state.deck.map((card, index) => {
            return index === action.payload ? { ...card, flipped: true } : card;
          }),
        };
      }
    case MATCH: {
      let newState = { ...state };

      if (state.guess2 && state.guess1 === state.guess2) {
        return {
          ...newState,
          deck: state.deck.map((card) => {
            return card.id === state.guess1 && state.guess2
              ? { ...card, discovered: true }
              : card;
          }),
        };
      }
      return { ...state };
    }
    case NOT_MATCH: {
      return {
        ...state,
        guess1: null,
        guess2: null,
        deck: state.deck.map((card) => {
          return card.discovered ? card : { ...card, flipped: false };
        }),
      };
    }
    default:
      return state;
  }
}
