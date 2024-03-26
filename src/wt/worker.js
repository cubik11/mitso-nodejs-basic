// worker.js
import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = (result) => {
  try {
    parentPort.postMessage({ status: 'resolved', data: result });
  } catch (error) {
    parentPort.postMessage({ status: 'error', data: null });
  }
};

parentPort.on('message', (n) => {
  const result = nthFibonacci(n);
  sendResult(result);
});