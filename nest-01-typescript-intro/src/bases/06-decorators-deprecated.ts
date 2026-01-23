const Deprecated = (reason: string) => {
  return function (
    originalMethod: Function,
    context: ClassMethodDecoratorContext,
  ) {
    if (context.kind !== "method") return;

    return function (this: any, ...args: any[]) {
      console.warn(
        `Method ${String(context.name)} is deprecated. Reason: ${reason}`,
      );
      return originalMethod.apply(this, args);
    };
  };
};

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

  @Deprecated("Must use speak2 method instead")
  speak() {
    console.log(`${this.name}, ${this.name}!`);
  }

  @Deprecated("Must use speak3 method instead")
  speak2() {
    console.log(`${this.name}, ${this.name}!!!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.speak();
