import * as express from 'express';
import * as bodyparser from 'body-parser';


import database from './db';
import model from './model';
import controller from './controller/controller';
import Controller from './controller/controller';
import select from '../server/controller/select'
import Select from '../server/controller/select';
import Delete from '../server/controller/delete';
import Update from '../server/controller/put';
import Post from '../server/controller/post';


class App{
    public app: express.Application;
    private database: database;
    private controller: controller;
    private select: select;
    private delete: Delete;
    private update: Update;
    private post: Post;
    
    constructor(){
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database. createConnection();
        this.controller = new Controller();
        this.select = new Select();
        this.delete = new Delete();
        this.update = new Update();
        this.post = new Post();

        this.routes();
    }
    middleware(){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));
    }

    routes(){
        this.app.route('/').get( (req, res) => res.status(200).json({"result": "Hello World"}));
        this.app.route('/api/crushs').get((req, res)=> this.select.select(req, res));
        this.app.route('/api/crushs/:id').get((req, res)=> this.select.selectOne(req, res));
        this.app.route('/api/crushs/:id').delete((req, res)=> this.delete.delete(req, res));
        this.app.route('/api/crushs/:id').put((req, res)=> this.update.update(req, res));
        this.app.route('/api/crushs').post((req, res)=> this.post.insert(res, res));
    }
}

export default new App();
