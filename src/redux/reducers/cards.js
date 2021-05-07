import {
  SET_DECK,
  FLIP_CARD,
  KEEP_CLOSE,
  RESTART,
} from "../_constants/constants";

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
        deck: action.payload,
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

        if (cardClicked.id === state.guess1) {
          return {
            ...newState,
            guess1: state.guess1,
            guess2: cardClicked.id,
            deck: state.deck.map((card, index) => {
              return index === action.payload || card.id === state.guess1
                ? { ...card, flipped: true, discovered: true }
                : card;
            }),
          };
        } else {
          return {
            ...newState,
            guess1: state.guess1,
            guess2: cardClicked.id,
            deck: state.deck.map((card, index) => {
              return index === action.payload
                ? { ...card, flipped: true }
                : card;
            }),
          };
        }
      }
    // case KEEP_CLOSE:

    case RESTART:
      return {
        deck: null,
        try: 1,
        guess1: null,
        guess2: null,
      };

    default:
      return state;
  }
}
