// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import router from './routes/app'

//bd
import pool from './settings/db'

const app = express();

const corsOptions = {
    origin: 'http://example.com',
    optionSuccessStatus: 200
}

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true}));


//routes
app.use('/api',cors(corsOptions), router);

//public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
});