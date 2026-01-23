class NewPokemon {
  public readonly id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  scream() {
    console.log(`NO QUIERO!!`);
  }

  speak() {
    console.log(`NO QUIERO HABLAR!!`);
  }
}

const MyDecorator = () => {
  return function <T extends new (...args: any[]) => any>(
    value: T,
    context: ClassDecoratorContext
  ) {
    // Reemplaza la clase decorada por otra
    return NewPokemon as unknown as T;
  };
};

@MyDecorator()
export class Pokemon {
  public readonly id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");
charmander.scream();
charmander.speak();