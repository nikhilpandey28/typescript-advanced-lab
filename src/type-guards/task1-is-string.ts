function isString(
  val: unknown
): val is string {
  return typeof val === "string";
}

const value: unknown =
  "TypeScript";

if (isString(value)) {
  console.log(
    value.toUpperCase()
  );
}