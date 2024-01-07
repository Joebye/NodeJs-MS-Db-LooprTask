import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { ClientDb } from '../db/dbpg.js';

export const data = express.Router();

data.get('', expressAsyncHandler (async(req, res) => {
    const clientDb = new ClientDb();
    clientDb.client.connect();
    const resData = await clientDb.client.query("SELECT * FROM items");
    clientDb.client.end();
    res.send(resData.rows)
    console.log(resData.rows);


}))