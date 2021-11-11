import { exec } from 'child_process';
import { join } from 'path';

export default () => {
  return new Promise((resolve, reject) => {
    exec(join(__dirname, '../../scripts/position.sh'), (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(JSON.parse(stdout));
    });
  });
};

