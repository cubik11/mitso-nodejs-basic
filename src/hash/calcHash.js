import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';

  const fileData = await fs.promises.readFile(filePath);

  const hash = crypto.createHash('sha256');
  hash.update(fileData);
  const hexHash = hash.digest('hex');

  console.log(hexHash);
};

await calculateHash();