type Timestamped = {
  createdAt: Date;
};

type Named = {
  name: string;
  email: string;
};

type TimestampedContact =
  Named & Timestamped;

function createContact(): TimestampedContact {
  return {
    name: "Nikhil",
    email: "nikhil@test.com",
    createdAt: new Date(),
  };
}

console.log(createContact());