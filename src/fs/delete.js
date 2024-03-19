import fs from 'fs/promises';

const remove = async () => {
  try {
    const filePath = '/home/vika/Рабочий стол/fresh.txt';

    await fs.access(filePath);
    await fs.unlink(filePath);

    console.log('File removed successfully');
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await remove();