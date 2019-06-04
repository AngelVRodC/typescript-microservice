
import * as express from 'express';
import { Connection } from 'typeorm';
import { createDatabaseConnection, healthCheck } from './config';


const server = express();
server.get(`health-check/`,healthCheck);

  async function main() {
    createDatabaseConnection()
    .then((con: Connection) => {
      server.listen(3000, () => console.log('App Ready!'));
    })
    .catch((err: Error) => {console.log(err); throw err;})
  }
  
  void main();