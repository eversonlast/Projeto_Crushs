import * as mongoose from 'mongoose';


class DataBase{
    private dburl = 'mongodb://127.0.0.1/db_crushes';
    private dbconnection;

    constructor(){

    }

    createConnection(){
        mongoose.connect(this.dburl);
        this.looger(this.dburl);
    }

    looger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on("connected", ()=> console.log("monngoose está conectado"));
        this.dbconnection.on("erro", (error)=> console.error.bind(console, "erro na conexão" + error))
    }
}

export default DataBase;