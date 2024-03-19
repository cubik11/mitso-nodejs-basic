import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  const sourceDir = '/home/vika/Рабочий стол/files';
  const destinationDir = '/home/vika/Рабочий стол/files_copy';

  try {
    // Проверка наличия и тип директорий
    const sourceDirStats = await fs.stat(sourceDir);
    const destinationDirStats = await fs.stat(destinationDir);

    if (!sourceDirStats.isDirectory() || !destinationDirStats.isDirectory()) {
      throw new Error('FS operation failed. Please ensure that the "files" directory exists and the "files_copy" directory is not already created.');
    }

    // Получение списка файлов в папке files
    const files = await fs.readdir(sourceDir);

    // Копирование файлов
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destinationPath = path.join(destinationDir, file);

      await fs.copyFile(sourcePath, destinationPath);
    }

    console.log('Files successfully copied.');
  } catch (error) {
    console.error('Error while copying files:', error);
  }
};

await copy();