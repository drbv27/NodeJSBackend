import routerx from 'express-promise-router';
import Categoria from './categoria'
import Articulo from './articulo';

const router = routerx();

router.use('/articulo', Articulo);
router.use('/categoria', Categoria);

export default router;