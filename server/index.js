import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mysql from 'mysql';

import userDbRouter from './db_user.js';
import placeDbRouter from './db_place_rec.js';
import boardDbRouter from './db_board.js';
import resultDbRouter from './db_result.js';

dotenv.config();

(()=>{
    try{

        const db = mysql.createPool({
            host:process.env.HOST,
            port:process.env.MYSQL_PORT,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DB
        })


        const app = express();

        app.use('/', (req, res, next)=>{
            console.log(`allowed cors : ${req.originalUrl}`);
            res.set('Access-Control-Allow-Origin', 'http://localhost:8080') //8080port에 대해서 허용 함
            res.set('Access-Control-Allow-Origin', '*') //연습용
            res.set('Access-Control-Allow-Methods', '*') //method 허용 기본은 GET만
            res.set('Access-Control-Allow-Headers', '*') //Header 허용
            
    
            next();
        });
        app.use(cors());
        app.use(express.urlencoded({extended:true}));
        app.use(express.json());

        app.use('/api/user/', userDbRouter(db));
        app.use('/api/food/', placeDbRouter(db));
        app.use('/api/board/', boardDbRouter(db));
        app.use('/api/result/', resultDbRouter(db));
        
        app.listen(process.env.PORT, ()=>{
            if(process.env.NODE_ENV == 'dev'){
                console.log(`server state at : ${process.env.PORT}`)
            }
        })
    }
    catch(e){
        console.log(e);
    }
})();