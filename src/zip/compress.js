import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
const compress = async () => {
    // Write your code here 
    let input = '/home/vika/Рабочий стол/mitso-nodejs-basic/src/zip/files/fileToCompress.txt';
    let output = '/home/vika/Рабочий стол/mitso-nodejs-basic/src/zip/files/archive.gz';
    let gzip = createGzip();
    let source = createReadStream(input);
    let destination = createWriteStream(output);
    source.pipe(gzip).pipe(destination);
};

await compress();