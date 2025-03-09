export default class Team {
  constructor() {
    this.characters = [];
  }

  add_characters(...characters) {
    this.characters.push(...characters);
  }
}



