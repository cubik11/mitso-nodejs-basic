import fs from 'fs/promises';

const list = async () => {
  try {
    const folderPath = '/home/vika/Рабочий стол/files';

    const files = await fs.readdir(folderPath);
    console.log('Files in the "files" folder:');
    files.forEach(file => console.log(file));
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await list();