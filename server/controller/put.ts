import controller from './controller';
import Controller from './controller';

class Put{
    private controller: controller;

    constructor(){
        this.controller = new Controller();
    }

    update(req, res){
        const id = {_id: req.params.id}
        const crush = req.body;

        this.controller.putByID(id, crush)
            .then(crushs => res.status(200).json({'result': crushs}))
            .catch(err => res.status(400).json({'result': err}));
    }
}

export default Put;