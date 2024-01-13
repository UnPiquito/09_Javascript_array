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

  for (var i = 0; i < monkeys.length; i++) {
    result.push(monkeys[i] + " " + fruit);
  }

  return result;
}

export default feedMonkeys;