const figures = [
  { id: 1, name: "worm", symbol: "🪱", flipped: false, discovered: false },
  { id: 2, name: "orangutan", symbol: "🦧", flipped: false, discovered: false },
  { id: 3, name: "kangaroo", symbol: "🦘", flipped: false, discovered: false },
  { id: 4, name: "bison", symbol: "🦬", flipped: false, discovered: false },
  { id: 5, name: "flamingo", symbol: "🦩", flipped: false, discovered: false },
  { id: 6, name: "otter", symbol: "🦦", flipped: false, discovered: false },
  { id: 7, name: "eagle", symbol: "🦅", flipped: false, discovered: false },
  { id: 8, name: "scorpion", symbol: "🦂", flipped: false, discovered: false },
];

export const shuffledDeck = figures
  .concat(figures)
  .sort(() => Math.random() - 0.5);
