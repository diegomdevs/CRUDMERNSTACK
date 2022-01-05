import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config/config";
const app = express();
import RouterApi from './routes/index';
import './db/database';


// Middlewares
app.use(cors()); //Cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
RouterApi(app);
// App Port
app.listen(config.PORT, () => console.log(`APP LISTEN ON PORT ${config.PORT}!`));
