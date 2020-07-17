import controller from './controller'
import Controller from './controller';

class Delete{
    private controller: controller;

    constructor(){
        this.controller = new Controller;
    }

    delete(req, res){
        const id = {_id: req.params.id}

        this.controller.deleteByID(id)
            .then(crushs => res.status(200).json({'result': crushs}))
            .catch(err => res.status(400).json({'result': err}));
    }


}

export default Delete