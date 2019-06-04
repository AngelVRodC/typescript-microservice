import { Request, Response } from 'express';
import "reflect-metadata";
import { Connection, createConnection, getConnection, getConnectionManager } from 'typeorm';

export const createDatabaseConnection = async (): Promise<Connection> => {
  try {

    return createConnection();

  }catch(error){
    throw { message: error.Error || error.message };
  }
}


export const healthCheck = async (req: Request, res: Response) => {
  const conManager = getConnectionManager();
  try {
    if (conManager.connections.some((con: Connection) => !con.isConnected)) { throw Error('DB Connection closed') }
    const db = getConnection();
    await db.query('SELECT 1');
    res.status(200).send({ success: true });
  } catch (error) {
    console.log('HealthCheck error',error.message);
    res.status(500).send({ success: false });
  }
}