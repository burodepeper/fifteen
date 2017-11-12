/*
Renders all two character combos of all ascii characters, except the space.
Outputs in lines of 16 pairs.

Usage:

node ascii.js
node ascii.js > ascii.txt
*/

const chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{',  '|', '}', '~']
const num = chars.length
let output = []

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    output.push(String(chars[i] + chars[j] + chars[i]))
    if (output.length === 16 || j === num - 1) {
      console.log(output.join(' '))
      output = []
    }
  }
  console.log('')
}
