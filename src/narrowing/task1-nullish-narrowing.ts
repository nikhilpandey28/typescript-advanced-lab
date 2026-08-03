function processText(
  value:
    | string
    | null
    | undefined
): string {
  if (value === null) {
    return "Value is null";
  }

  if (value === undefined) {
    return "Value is undefined";
  }

  if (value.trim()) {
    return value.trim();
  }

  return "Empty string";
}