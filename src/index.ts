import express      from 'express';
import card         from './routes/card';
import cardholder   from './routes/cardholder';
import fund         from './routes/fund';
import cors         from 'cors';
import dotenv       from 'dotenv';

const app = express();

dotenv.config({ path: __dirname+'/.env' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/card',         card);
app.use('/api/v1/cardholder',   cardholder);
app.use('/api/v1/fund',         fund);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log('Server started running on port', PORT))