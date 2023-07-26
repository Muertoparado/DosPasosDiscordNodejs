import express from 'express';
import session from 'express-session';
import val from './validation/validation.js';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import checkAuthentication from './validation/authentication.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(session({
    secret: 'proccess.env.secret',
    resave: false,
    saveUninitialized: false
}))

app.use(val.initialize());
app.use(val.session());

app.use(express.static('public'));

app.get('/', (req, res) => res.redirect('/login'));
app.use('/login',routes);
app.get('/dashboard',checkAuthentication, (req, res) =>{res.sendFile('dashboard.html',{root:'./public'})});

const config=JSON.parse(process.env.MY_CONFIG);
app.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});