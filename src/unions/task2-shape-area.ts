type Circles = {
  kind: "circle";
  radius: number;
};

type Squares = {
  kind: "square";
  side: number;
};

type Shapes = Circles | Squares;

function area1(
  shape: Shapes
): number {
  if (shape.kind === "circle") {
    return (
      Math.PI *
      shape.radius *
      shape.radius
    );
  }

  return shape.side * shape.side;
}