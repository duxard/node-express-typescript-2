import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4200;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  console.log('Hi from middleware');
  next();
});

app.get('/', (req: Request, res: Response): void => {
  res.send({message: 'Hello from TS'});
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
