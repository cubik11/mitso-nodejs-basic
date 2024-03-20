import fs from 'fs/promises';

const read = async () => {
  try {
    const filePath = '/home/vika/Рабочий стол/fileToRead.txt';

    const content = await fs.readFile(filePath, 'utf-8');
    console.log('File content:');
    console.log(content);
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await read();