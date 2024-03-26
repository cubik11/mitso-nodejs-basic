import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    // Write your code here 
    let input = '/home/vika/Рабочий стол/mitso-nodejs-basic/src/zip/files/archive.gz';
    let output = '/home/vika/Рабочий стол/mitso-nodejs-basic/src/zip/files/fileToCompress.txt';
    let gunzip = createGunzip();
    let source = createReadStream(input);
    let destination = createWriteStream(output);
    source.pipe(gunzip).pipe(destination);
};

await decompress();