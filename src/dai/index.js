import { Router } from 'express';
import daiControler from './controler.js'

const daiRouter = new Router();

//роути 
daiRouter.get("/init", daiControler.init);
daiRouter.get('/', daiControler.get);
daiRouter.get('/:id', daiControler.get_id);
daiRouter.post('/', daiControler.post);
daiRouter.delete('/:id', daiControler.delete_id);


export default daiRouter;
