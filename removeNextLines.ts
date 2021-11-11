import * as readline from 'readline';

export default (x: number, y: number) => {
  console.log('fsfsafds', x, y);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.cursorTo(process.stdout, x, y);
  readline.clearScreenDown(process.stdout);

  rl.close();
};

