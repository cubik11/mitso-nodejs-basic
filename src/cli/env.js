import fs from 'fs';

const parseEnv = () => {
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

    const envVariables = packageJson.env || {};

    console.log('MITSO Environment Variables:');
    for (const key in envVariables) {
      if (key.startsWith('MITSO_')) {
        console.log(`MITSO_${key}=${envVariables[key]}`);
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

parseEnv();