import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import config from './config/config'
import routerApi from './routes/index';
import './db/database';
import {logErrors, errorHandler} from './middlewares/error.handler';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());
app.use(logErrors);
app.use(errorHandler);

// Routes
routerApi(app);

// App Port
app.listen(config.PORT)