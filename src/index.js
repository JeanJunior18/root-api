import os from 'os';
import cluster from 'cluster';

const primaryProcess = () => {
  const numCPUs = os.cpus().length;
  console.log(`Primary ${process.pid} is running`);
  console.log(`Number of CPUs: ${numCPUs}\n`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Starting a new worker`);
      cluster.fork();
    }
  })
}

const workerProcess = async () => {
  await import('./server.js')
}

cluster.isPrimary ? primaryProcess() : workerProcess();