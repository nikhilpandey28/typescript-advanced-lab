enum Directions {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function moves(
  direction: Directions
): string {
  return `Moving ${direction}`;
}

console.log(moves(Directions.Up));

/*
moves("Up"); // compile error
*/