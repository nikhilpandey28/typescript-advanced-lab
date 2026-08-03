type Value =
  | string
  | number
  | boolean;

function handle(
  value: Value
): void {
  switch (typeof value) {
    case "string":
      console.log(
        value.toUpperCase()
      );
      break;

    case "number":
      console.log(
        value.toFixed(2)
      );
      break;

    case "boolean":
      console.log(!value);
      break;

    default: {
      const exhaustive: never =
        value;
      console.log(exhaustive);
    }
  }
}