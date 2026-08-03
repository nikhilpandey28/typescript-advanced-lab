function withLogging<
  T extends object
>(
  obj: T
): T & { log(): void } {
  return {
    ...obj,

    log() {
      console.log(obj);
    },
  };
}

const user = withLogging({
  id: 1,
  name: "Nikhil",
});

user.log();