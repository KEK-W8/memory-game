const symbols = [
  // { id: 1, name: "worm", symbol: "🪱", flipped: false, discovered: false },
  // { id: 2, name: "orangutan", symbol: "🦧", flipped: false, discovered: false },
  // { id: 3, name: "kangaroo", symbol: "🦘", flipped: false, discovered: false },
  // { id: 4, name: "bison", symbol: "🦬", flipped: false, discovered: false },
  // { id: 5, name: "flamingo", symbol: "🦩", flipped: false, discovered: false },
  // { id: 6, name: "otter", symbol: "🦦", flipped: false, discovered: false },
  // { id: 7, name: "eagle", symbol: "🦅", flipped: false, discovered: false },
  // { id: 8, name: "scorpion", symbol: "🦂", flipped: false, discovered: false },
  { id: 9, name: "chimpunk", symbol: "🐿", flipped: false, discovered: false },
  { id: 10, name: "hippo", symbol: "🦛", flipped: false, discovered: false },
  { id: 11, name: "mammoth", symbol: "🦣", flipped: false, discovered: false },
  { id: 12, name: "hedgehog", symbol: "🦔", flipped: false, discovered: false },
  { id: 13, name: "whale", symbol: "🐋", flipped: false, discovered: false },
  { id: 14, name: "cow", symbol: "🐄", flipped: false, discovered: false },
  // { id: 15, name: "poodle", symbol: "🐩", flipped: false, discovered: false },
  { id: 16, name: "leopard", symbol: "🐆", flipped: false, discovered: false },
  // { id: 17, name: "turkey", symbol: "🦃", flipped: false, discovered: false },
  { id: 18, name: "t-rex", symbol: "🦖", flipped: false, discovered: false },
];

export const shuffledDeck = symbols
  .concat(symbols)
  .sort(() => Math.random() - 0.5);
