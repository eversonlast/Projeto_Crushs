import controller from './controller'
import Controller from './controller';

class Select{

    private controller: controller;
    
    constructor(){
        this.controller =  new Controller;
    }

    select(req, res){
        this.controller.getCrushs()
            .then(crushs=> res.status(200).json({'results': crushs}))
            .catch(err=> res.status(400).json({'result': err}));
    }

    selectOne(req, res){
        const id = {_id: req.params.id}
        this.controller.getCrushsByID(id)
        .then(crushs=> res.status(200).json({'results': crushs}))
        .catch(err=> res.status(400).json({'result': err}));
    }
}

export default Select;
