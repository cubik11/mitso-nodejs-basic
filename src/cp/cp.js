import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['files/script.js', ...args], {
        stdio: ['inherit', 'inherit', 'inherit']
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(['arg1', 'arg2']);