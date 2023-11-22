import * as express from 'express';
import ProdutosController from '../controllers/url_controller';

const router: express.Router = express.Router();


router.get('/:hash', ProdutosController.getUrlByHash);

router.post('/', ProdutosController.postUrl);
// router.get('/teste', ProdutosController.getAll);

// router.get('/:cd_produto', ProdutosController.getById);

export default router;
