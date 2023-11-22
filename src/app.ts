import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import './api/models/url_model';


const app:express.Application = express();

// mongoose.connect('mongodb://localhost:27017/test');
// mongoose.set('strictQuery', true);

mongoose.set('strictQuery', false); // Para definir strictQuery como false e suprimir o aviso
mongoose.connect('mongodb://localhost:27017/test');


app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.header("Content-Type", "application/json;charset=utf-8");
res.header("Content-Security-Policy", "default-src 'none'");
next();
});

;
import produtos_router from './api/routes/url_router';


app.use('/', produtos_router);



// app.use(express.static('public'));

export default app;





