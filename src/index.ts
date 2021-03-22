import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Koa from "koa";
import * as Router from "koa-router";
import { AppRoutes } from "./routes";
import * as bodyParser from "koa-bodyparser";
const cors = require('@koa/cors');
const logger = require('koa-logger')
import * as dotenv from "dotenv";
dotenv.config();

import { Admin } from "./entity/Admin";

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "",
//     database: "shopping",
//     entities:  [
//         'src/bEntity/*{.ts,.js}',
//         'src/bEntity/*.ts',
//         'src/bEntity/**/*.ts',
//         __dirname + "/bEntity/*.ts"
//     ],
//     synchronize: true,
//     logging: false
// }).then(async connection => {

//     let adminDB = new Admin2();
//     adminDB.id = Math.floor(Math.random() * 1000000000);
//     adminDB.name = 'testname';
//     adminDB.password = 'testpassword'
//     adminDB.userName = 'testusername'

//     await connection.manager.save(adminDB);
//     console.log('adminDB has been saved' + '\n');

// }).catch(error => console.log(error));


createConnection().then(async connection => {

    const PORT = process.env.PORT || 8080;

    // create koa app
    const app = new Koa();
    const router: Router = new Router();
    AppRoutes.forEach(route => router[route.method](route.path, route.action));

    // run app
    // app.use(bodyParser());
    app.use(cors());
    app.use(logger());
    app.use(router.routes());
    app.use(router.allowedMethods());
    // app.proxy = true;
    // router.get('/', async (ctx, next) => {
    //     ctx.body = 'hello world';
    // });

    console.log('adminDB has been saved');
    app.listen(PORT, () => {
        //หากทำการ run server สำเร็จ ให้แสดงข้อความนี้ใน cmd หรือ terminal
        console.log(`Server is running on port : ${PORT}`);
    });
    // app.listen(3000);



}).catch(error => console.log(error));