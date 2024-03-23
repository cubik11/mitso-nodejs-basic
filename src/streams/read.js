import fs from 'fs';

const read = async () => {
  const filePath = '/home/vika/Рабочий стол/mitso-nodejs-basic/src/streams/files/fileToRead.txt';

  const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

  stream.on('data', (data) => {
    process.stdout.write(data);
  });

  stream.on('end', () => {
    console.log('Чтение файла завершено.');
  });

  stream.on('error', (error) => {
    console.error('Ошибка при чтении файла:', error);
  });
};

await read();