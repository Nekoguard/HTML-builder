const path = require('path');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hi! Please, enter something:', (answer) => {
  const filePath = path.join(__dirname, 'text.txt');

  // следит за каждой введенной строкой в консоль

  rl.on('line', (input) => {
    // если вводится 'exit' - заверщает процесс слежения

    if (input === 'exit') {
      rl.close();
    } else {
      fs.stat(path.join(__dirname, 'text.txt'), (err, stats) => {
        if (err) {
          throw err;
        }

        if (!stats.size || stats.size === 0) {
          fs.writeFile(filePath, answer, (err) => {
            if (err) {
              throw err;
            }
          });
        } else {
          fs.appendFile(filePath, answer, (err) => {
            if (err) {
              throw err;
            }
          });
        }
      });
    }
  });

  // прощание при заверщении ввода (нажатии ctrl + c или 'exit')

  rl.on('close', () => {
    console.log('Goodbye!');
  });
});