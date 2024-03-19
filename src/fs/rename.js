import fs from 'fs/promises';

const rename = async () => {
    try {
        // Check if the files already exist
        const files = await Promise.all([
            fs.access('/home/vika/Рабочий стол/files_copy/wrongFilename.txt'),
            fs.access('/home/vika/Рабочий стол/files_copy/properFilename.md')
          ]);

        // If files exist, throw an error
        throw new Error('FS operation failed');

    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.error(error.message);
            return;
        }

        // If files don't exist, proceed with renaming
        try {
            await fs.rename(
                '/home/vika/Рабочий стол/files_copy/wrongFilename.txt',
                '/home/vika/Рабочий стол/files_copy/properFilename.md'
              );
              console.log('Files renamed successfully');
        } catch (error) {
            console.error('FS operation failed');
        }
    }
};

await rename();