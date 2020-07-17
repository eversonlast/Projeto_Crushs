import model from '../model'


class Controller{
    
    constructor(){
    
    }

    getCrushs(){
        return model.find({});
    }

    getCrushsByID(id){
        return model.find(id);
    }
    
    deleteByID(id){
        return model.deleteOne(id);
    }

    putByID(id, data){
        return model.findOneAndUpdate(id, data);
    }

    createCrush(data){
        return model.create(data);
    }

    // select(req, res){
    //     this.getCrushs()
    //         .then(crushs=> res.status(200).json({'results': crushs}))
    //         .catch(err=> res.status(400).json({'result': err}));
    // }

    
}

export default Controller;