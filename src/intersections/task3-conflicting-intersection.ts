type A = {
  id: string;
};

type B = {
  id: number;
};

type Conflict = A & B;

/*
Conflict["id"] becomes never.

Nothing can be both
string and number simultaneously.
*/