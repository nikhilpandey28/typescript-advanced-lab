type Fish = {
  swim(): void;
};

type Bird = {
  fly(): void;
};

function isFish(
  pet: Fish | Bird
): pet is Fish {
  return "swim" in pet;
}

function move1(
  pet: Fish | Bird
): void {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}