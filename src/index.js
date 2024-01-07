import express from 'express';
import { data } from './routes/data.js';


const app = express();
const port = process.env.PORT || 8181;
const server = app.listen(port);
server.on('listening', () => console.log(`server is listening on port: ${port}, process id: ${process.pid}`));

app.use('/data', data)

