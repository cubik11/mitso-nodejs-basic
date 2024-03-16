const create = async () => {
    try {
    // Путь и имя нового файла
    const filePath = 'path/to/newfile.txt';

    // Содержимое нового файла
    const fileContent = 'Привет, мир!';

    // Создание файла
    await fs.promises.writeFile(filePath, fileContent);

    console.log('Новый файл успешно создан.');
  } catch (error) {
    console.error('Ошибка при создании файла:', error);
  }
    // Write your code here 
};

await create();
