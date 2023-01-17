import express from 'express';
import routes from './routes';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: __dirname + '/.env' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log('Server started running on port', PORT))