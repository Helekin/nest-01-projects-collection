export class Pokemon {
  public id: number;
  public name: string;

  get imageUrl(): string {
    return `https://pokemon/${this.id}.jpg`;
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log("Constructor");
  }
}

export const charmander = new Pokemon(4, "Charmander");
