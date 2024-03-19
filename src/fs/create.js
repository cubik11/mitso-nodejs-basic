import fs from 'fs';

const create = async () => {
  try {
    // Путь и имя нового файла
    const filePath = '/home/vika/Рабочий стол/fresh.txt';

    // Содержимое нового файла
    const fileContent = 'I am fresh and young!';

    // Создание файла
    await fs.promises.writeFile(filePath, fileContent);

    console.log('Новый файл успешно создан.');
  } catch (error) {
    console.error('Ошибка при создании файла:', error);
  }
};

await create();