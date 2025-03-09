import TeamIterator from "./TeamIterator.js";
import TeamGenerator from "./TeamGenerator.js";
import canIterate from "./canIterate.js";

const char1 = {name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10};
const char2 = {name: 'Демон', type: 'Demon', health: 70, level: 1, attack: 45, defence: 5};
const char3 = {name: 'Волшебник', type: 'Magician', health: 30, level: 1, attack: 50, defence: 5};

console.log('-----------Провека итератора-------------');
console.log('---------------Через оператор распостранения----------------');
const teamIterator = new TeamIterator();
teamIterator.add_characters(char1, char2, char3);
console.log(...teamIterator);
console.log('---------------Теперь через цикл----------------');
for (const char of teamIterator) {
  console.log(char);
}
console.log();
console.log();


console.log('-----------Проверка генератора-------------');
console.log('---------------Через оператор распостранения----------------');
const teamGenerator = new TeamGenerator();
teamGenerator.add_characters(char2, char3, char1);
console.log(...teamGenerator);
console.log('---------------Теперь через цикл----------------');
for (const char of teamGenerator) {
  console.log(char);
}
console.log();
console.log();
console.log('-----------Проверка на итерируемость-------------');
console.log(canIterate(teamIterator));   // true
console.log(canIterate(teamGenerator));  // true
console.log(canIterate(10));         // false
console.log(canIterate(NaN));            // false
console.log(canIterate(null));       // false
console.log(canIterate(undefined));  // false
console.log(canIterate('Netology')); // true
console.log(canIterate([]));         // true
console.log(canIterate({}));         // false
console.log(canIterate(new Map()));      // true
console.log(canIterate(new Set()));      // true
