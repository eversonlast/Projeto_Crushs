import Controller from './controller';
import controller from './controller';

class Post{
    private controller: controller;

    constructor(){
        this.controller = new Controller();
    }

    insert(req, res){
        const crush = req.body;
        this.controller.createCrush(crush)
            .then(crushs => res.status(200).json({'result': crushs}))
            .catch(err => res.status(400).json({'result': err}));
    }
}

export default Post;