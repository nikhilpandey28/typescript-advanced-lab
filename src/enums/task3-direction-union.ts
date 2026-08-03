type Direction =
  | "Up"
  | "Down"
  | "Left"
  | "Right";

function move(
  direction: Direction
): string {
  return `Moving ${direction}`;
}

console.log(move("Up"));

/*
Advantage:
Smaller compiled output.

Disadvantage:
No runtime object like Direction.Up.
*/