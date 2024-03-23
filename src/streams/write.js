import fs from 'fs';

const write = async () => {
    // Write your code here 
    let stream = fs.createWriteStream('/home/vika/Рабочий стол/mitso-nodejs-basic/src/streams/files/fileToWrite.txt');
    process.stdin.on('data', (chunk) => {
        if (chunk.toString().trim() === 'exit') {
            stream.end();
            process.stdin.pause();
            return;
        }
        stream.write(chunk);
    });
};

await write();