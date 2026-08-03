type Success = {
  kind: "success";
  data: string;
};

type Failure = {
  kind: "failure";
  error: string;
};

type Result =
  | Success
  | Failure;

function handleResult(
  result: Result
): string {
  switch (result.kind) {
    case "success":
      return result.data;

    case "failure":
      return result.error;

    default: {
      const exhaustive: never =
        result;
      return exhaustive;
    }
  }
}