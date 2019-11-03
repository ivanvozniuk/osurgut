const numCPUs = require('os').cpus().length;
const cluster = require('cluster');

module.exports = () => {
  if (cluster.isMaster) {
    console.log(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(
        `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`,
      );
    });
  }
};
