import Team from "./Team.js";

export default class TeamIterator extends Team {

  constructor() {
    super();
  }

  [Symbol.iterator]() {
    let i = 0;
    const characters = this.characters;
    return {
      next() {
        if (i < characters.length) {
          return {
            value: characters[i++],
            done: false
          }
        }
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}
