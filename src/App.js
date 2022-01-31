import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './database/models/index';
import Route from './routes/index';

db.sequelize.sync({ force: true });
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', Route);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to Vision Project!' }));

export default app;
