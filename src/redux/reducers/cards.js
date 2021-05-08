import { SET_DECK, FLIP_CARD, MATCH_CHECK } from "../_constants/constants";

const initialState = {
  deck: null,
  try: 1,
  guess1: null,
  guess2: null,
  isLoaded: false,
  score: 0,
  gameOver: false,
};

export default function cards(state = initialState, action) {
  switch (action.type) {
    case SET_DECK:
      return {
        ...state,
        deck: action.payload,
        isLoaded: true,
      };
    case FLIP_CARD: {
      let newState = { ...state, try: state.try + 1, isLoaded: true };

      let cardClicked = state.deck.find((card, index) => {
        return index === action.payload;
      });

      if (state.try % 2 === 1) {
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
        return {
          ...newState,
          guess1: state.guess1,
          guess2: cardClicked.id,
          deck: state.deck.map((card, index) => {
            return index === action.payload ? { ...card, flipped: true } : card;
          }),
          isLoaded: false,
        };
      }
    }
    case MATCH_CHECK: {
      let newState = { ...state, score: state.score + 1 };

      if (state.try % 2 === 1) {
        if (state.guess2 && state.guess1 === state.guess2) {
          if (state.score >= 7) {
            return { ...newState, gameOver: true };
          } else {
            return {
              ...newState,
              deck: state.deck.map((card) => {
                return card.id === state.guess1 && state.guess2
                  ? { ...card, discovered: true }
                  : card;
              }),
              isLoaded: true,
            };
          }
        } else {
          return {
            ...state,
            guess1: null,
            guess2: null,
            deck: state.deck.map((card) => {
              return card.discovered ? card : { ...card, flipped: false };
            }),
            isLoaded: true,
          };
        }
      } else {
        return { ...state };
      }
    }
    default:
      return state;
  }
}
