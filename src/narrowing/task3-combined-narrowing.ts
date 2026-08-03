function process(
  value:
    | string
    | number
    | null
    | undefined
) {
  if (value === null) {
    return "null";
  }

  if (value === undefined) {
    return "undefined";
  }

  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}