import Team from "./Team.js";

export default class TeamGenerator extends Team {

  constructor() {
    super();
  }

  *[Symbol.iterator]() {
    for (const items of this.characters) {
      yield items;
    }
  }
}
