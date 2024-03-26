import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const child = spawn('node', ['/home/vika/Рабочий стол/mitso-nodejs-basic/src/cp/files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  child.stdin.pipe(process.stdin);
  child.stdout.pipe(process.stdout);

  return new Promise((resolve, reject) => {
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
};

// Пример вызова функции spawnChildProcess с аргументами
spawnChildProcess(['arg1', 'arg2'])
  .then(() => {
    console.log('Child process completed successfully');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });