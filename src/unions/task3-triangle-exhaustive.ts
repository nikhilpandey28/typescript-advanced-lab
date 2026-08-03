type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape =
  | Circle
  | Square
  | Triangle;

function area(
  shape: Shape
): number {
  switch (shape.kind) {
    case "circle":
      return (
        Math.PI *
        shape.radius *
        shape.radius
      );

    case "square":
      return shape.side * shape.side;

    case "triangle":
      return (
        shape.base *
        shape.height
      ) / 2;

    default: {
      const exhaustive: never =
        shape;
      return exhaustive;
    }
  }
}