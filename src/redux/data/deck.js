const figures = [
  { name: "camel", symbol: "🐫", flipped: false },
  { name: "giraffe", symbol: "🦒", flipped: false },
  { name: "kangaroo", symbol: "🦘", flipped: false },
  { name: "bison", symbol: "🦬", flipped: false },
  { name: "deer", symbol: "🦌", flipped: false },
  { name: "otter", symbol: "🦦", flipped: false },
  { name: "eagle", symbol: "🦅", flipped: false },
  { name: "scorpion", symbol: "🦂", flipped: false },
];

export const deck = figures.concat(figures).sort(() => Math.random() - 0.5);
