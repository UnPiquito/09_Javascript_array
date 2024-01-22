/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

function feedMonkeys(monkeys, fruit) {
  var result = [];

  for (var index = 0; index < monkeys.length; index++) {
    result.push(monkeys[index] + " " + fruit);
  }

  return result;
}

export default feedMonkeys;
