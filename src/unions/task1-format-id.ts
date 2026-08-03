function formatId(
  id: string | number
): string {
  return `ID-${id}`;
}

console.log(formatId("ABC"));
console.log(formatId(100));

/*
formatId(true); // compile error
*/